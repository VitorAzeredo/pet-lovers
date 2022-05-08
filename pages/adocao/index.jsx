import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Navbar from "../../shared/components/Navbar";

export async function getServerSideProps() {
	const res = await fetch("http://localhost:3000/api/busca-pets/lista-pets");
	const data = await res.json();
	return { props: { data } };
}

export default function Adoption({ data }) {
	const [show, setShow] = useState(false);
	const [pet, setPet] = useState({});
	const [activePhoto, setActivePhoto] = useState(0);

	const [lottie, setLottie] = useState(null);
	const ref = useRef(null);

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
				path: "/assets/doge-moon.json",
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
	const handleShow = (pet) => {
		setPet(pet);
		setShow(true);
	};

	return (
		<div>
			<Head>
				<title>Adoção</title>
			</Head>
			<main>
				<div className="container-fluid pt-4 ps-5 pe-5 pb-4">
					<Navbar />
					<div className="row mt-4">
						{data?.length > 0 && (
							<div className="col-12 text-center">
								<h1>Um amigo para chamar de seu</h1>
								<p className="fs-5">
									Esses pets estão esperando por você
								</p>
							</div>
						)}
						<div className="col-12 text-end">
							<p className="">
								{" "}
								<Link href="/adocao/registrar" passHref>
									<button
										type="button"
										className="btn btn-dark"
									>
										Você teria um amigo para doar?
									</button>
								</Link>
							</p>
						</div>
					</div>
					{data?.length > 0 && (
						<div className="row mt-4">
							{data.map((pet) => (
								<div className="col-sm-3 mb-3" key={pet.petId}>
									<div className="card shadow">
										<div className="card-body">
											<h5 className="card-title">
												{pet.name}
											</h5>
											<Image
												layout="responsive"
												className="rounded cursorP img-fluid"
												src={pet.files[0]}
												alt="Vercel Logo"
												priority={true}
												width={300}
												height={250}
											/>
											<p className="card-text mt-2">
												{pet.description}
											</p>
											<div className="d-grid">
												<button
													onClick={() =>
														handleShow(pet)
													}
													type="button"
													className="btn btn-info"
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
							<h2>
								Por enquanto não encontramos amigos para doar
							</h2>
							<div
								style={{ maxWidth: 700 }}
								className="w-75 ms-auto me-auto"
								ref={ref}
							></div>
						</div>
					)}
				</div>
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
											index === activePhoto
												? "active"
												: ""
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
								<span className="visually-hidden">
									Previous
								</span>
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
						<div>
							<h4 className="m-0">Contatos para adoção</h4>
							<p>{pet.history}</p>
						</div>
						{pet.adopted ? (
							<div>
								<h4>Status da adoção: </h4>
								<div
									className="alert alert-success"
									role="alert"
								>
									Adotado!
								</div>
							</div>
						) : (
							<div>
								<h4>Status da adoção: </h4>
								<div className="alert alert-info" role="alert">
									Disponível para adoção
								</div>
							</div>
						)}
					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={handleClose}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</main>
		</div>
	);
}
