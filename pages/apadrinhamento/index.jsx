import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { auth } from "../../core/config/firebase/client";
import Base from "../../shared/layout/Base";
import { SelectFilter } from "../../shared/components/SelectFilter";
import { cities, allCities } from "../../shared/static/cities";
import { states } from "../../shared/static/states";

export async function getServerSideProps() {
	const res = await fetch(
		"http://localhost:3000/api/busca-apadrinhado/lista-pets"
	);
	const data = await res.json();
	return { props: { data } };
}

Support.getLayout = function getLayout(page) {
	return <Base pageTitle="Apadrinhamento">{page}</Base>;
};

export default function Support({ data }) {
	const [copyData, setCopyData] = useState(data);
	const [statesStatic, setStatesStatic] = useState([]);
	const [citiesStatic, setCitiesStatic] = useState([]);
	const [filters, setFilters] = useState(["", ""]);
	const [show, setShow] = useState(false);
	const [pet, setPet] = useState({});
	const [activePhoto, setActivePhoto] = useState(0);
	const [isSignin, setIsSignin] = useState(false);

	const [lottie, setLottie] = useState(null);
	const ref = useRef(null);

	const changeFilterStateOrCity = (value, stateOrCity) => {
		const filtersCopy = [...filters];
		if (stateOrCity === "state") {
			filtersCopy[0] = value;
			filtersCopy[1] = "";
			if (value.length === 0) {
				setCitiesStatic(allCities);
			} else {
				setCitiesStatic(cities[value]);
			}
		} else {
			filtersCopy[1] = value;
		}

		setFilters(filtersCopy);
	};

	useEffect(() => {
		if (filters[0].length === 0 && filters[1].length === 0) {
			return setCopyData(data);
		}

		const dataFilteredWithState = data.filter(
			(petData) => petData.state === filters[0]
		);

		if (filters[1].length > 0) {
			if (filters[0].length > 0) {
				const dataFilteredWithCity = dataFilteredWithState.filter(
					(petData) => petData.city === filters[1]
				);

				if (dataFilteredWithCity.length > 0) {
					return setCopyData(dataFilteredWithCity);
				}
			} else {
				const dataFilteredWithCity = data.filter(
					(petData) => petData.city === filters[1]
				);

				if (dataFilteredWithCity.length > 0) {
					return setCopyData(dataFilteredWithCity);
				}
			}
		}
		setCopyData(dataFilteredWithState);
	}, [data, filters]);

	useEffect(() => {
		setStatesStatic(states);
		setCitiesStatic(allCities);
	}, []);

	useEffect(() => {
		return auth.onAuthStateChanged((user) => {
			if (user) {
				setIsSignin(true);
			} else {
				setIsSignin(false);
			}
		});
	}, []);

	useEffect(() => {
		import("lottie-web").then((Lottie) => setLottie(Lottie.default));
	}, []);

	useEffect(() => {
		if (lottie && ref.current) {
			const animation = lottie.loadAnimation({
				container: ref.current,
				renderer: "svg",
				loop: true,
				autoplay: true,
				path: "/assets/dog-and-me.json",
			});

			return () => animation.destroy();
		}
	}, [lottie]);

	const nextImage = () => {
		if (activePhoto < pet.files.length - 1) {
			setActivePhoto(activePhoto + 1);
		} else {
			setActivePhoto(0);
		}
	};
	const prevImage = () => {
		if (activePhoto > 0) {
			setActivePhoto(activePhoto - 1);
		}
	};

	const handleClose = () => setShow(false);
	const handleShow = (petParams) => {
		setPet(petParams);
		setShow(true);
	};

	const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
	const handleShowModal = () => setShowModal(true);

	return (
		<>
			<div className="row mt-4">
				<div className="col-12 text-center">
					<h1>Ajude um amiguinho que precisa de você</h1>
					<p className="fs-5">Esses pets precisam do seu apoio, apadrinhe eles!</p>
				</div>
				<div className="col-12 text-end">
					<p className="">
						{" "}
						{isSignin ? (
							<Link href="/apadrinhamento/registrar" passHref>
								<button type="button" className="btn btn-dark">
									Você tem um pet que precisa de um padrinho?
								</button>
							</Link>
						) : null}
					</p>
				</div>
			</div>
			<div className="row">
				<div className="col-2">
					<SelectFilter
						wordToFilter={(value) =>
							changeFilterStateOrCity(value, "state")
						}
						titleSelect="Estado"
						options={statesStatic}
					/>
				</div>
				<div className="col-2">
					<SelectFilter
						wordToFilter={(value) =>
							changeFilterStateOrCity(value, "city")
						}
						titleSelect="Cidade"
						options={citiesStatic}
					/>
				</div>
				<div className="col-8">
                	    <Link href="#" passHref>
                	        <button onClick={handleShowModal} type="button" className="btn btn-dark rounded" >
                	        <i className="bi bi-question-octagon"></i>
                	        </button>
                	    </Link>
                	    <Modal show={showModal} onHide={handleCloseModal} >
                	        <Modal.Header
                	            closeButton
                	            className="bg-light"
                	        >
                	            <Modal.Title>
                	                Ola, Precisa de ajuda?
                	                Que tal assistir nosso tutorial sobre a PetLovers.
                	            </Modal.Title>
                	        </Modal.Header>
                	        <Modal.Body>
                	            <iframe width="466" height="315" src="https://www.youtube.com/embed/ii-KRRt13o4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                	            </iframe>
                	        </Modal.Body>
                	        <Modal.Footer>
                	            <Button
                	                variant="dark"
                	                onClick={
                	                    handleCloseModal
                	                }
                	            >
                	                Fechar
                	            </Button>
                	        </Modal.Footer>
                	    </Modal>
                	</div>
			</div>
			{copyData?.length > 0 && (
				<div className="row mt-4">
					{copyData.map((petMapped) => (
						<div className="col-sm-3 mb-3" key={petMapped.petId}>
						<div className="card shadow border-warning">
							<div className="card-body">
								<h5 className="card-title">
									{petMapped.name}
								</h5>
									<Image
										onClick={() => handleShow(petMapped)}
										layout="responsive"
										className="rounded cursorP img-fluid"
										src={petMapped.files[0]}
										alt="Vercel Logo"
										priority={true}
										width={300}
										height={250}
									/>
									<p className="card-text mt-2">
										{petMapped.description}
									</p>
									<div className="d-grid">
										<button
											onClick={() =>
												handleShow(petMapped)
											}
											type="button"
											className="btn btn-warning"
										>
											Detalhes
											<i className="ms-2 bi bi-balloon-heart-fill"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
			{!data?.length && (
				<div className="row text-center mt-4">
					<h2>Por enquanto não encontramos amigos para apadrinhar</h2>
					<div
						style={{ maxWidth: 700 }}
						className="w-75 ms-auto me-auto"
						ref={ref}
					></div>
				</div>
			)}
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Detalhes do pet</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h1>{pet.name}</h1>
					<div className="carousel slide mt-2">
						<div className="carousel-inner">
							{pet?.files?.map((file, index) => (
								<div
									className={`carousel-item ${
										index === activePhoto ? "active" : ""
									}`}
									key={index}
								>
									<Image
										layout="responsive"
										className="rounded cursorP img-fluid"
										src={file}
										alt="Vercel Logo"
										priority={true}
										width={300}
										height={230}
									/>
								</div>
							))}
						</div>
						<button
							onClick={prevImage}
							className="carousel-control-prev"
							type="button"
						>
							<span
								className="carousel-control-prev-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							onClick={nextImage}
							className="carousel-control-next"
							type="button"
						>
							<span
								className="carousel-control-next-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
					<div className="mt-2">
						<h4 className="m-0">Descrição do pet</h4>
						<p>{pet.description}</p>
					</div>
					<div>
						<h4 className="m-0">História do pet</h4>
						<p>{pet.history}</p>
					</div>
					<div className="my-2">
						<h4>Contatos para adoção</h4>
						<p className="m-0">{pet.ownerName}</p>
						<p className="m-0">{pet.ownerEmail}</p>
						<p className="m-0">
							Estado: {pet.state} - Cidade: {pet.city}
						</p>
					</div>
					{pet.adopted ? (
						<div>
							<h4>Status do apadrinhamento: </h4>
							<div className="alert alert-success" role="alert">
								Meta alcançada!
							</div>
						</div>
					) : (
						<div>
							<h4>Status do apadrinhamento: </h4>
							<div className="alert alert-warning" role="alert">
								Disponível para apadrinhar!
							</div>
						</div>
					)}
				</Modal.Body>

				<Modal.Footer>
					<Button variant="warning" onClick={handleClose}>
						Fechar
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
