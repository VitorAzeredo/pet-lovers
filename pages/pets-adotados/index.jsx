import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { auth } from "../../core/config/firebase/client";
import Base from "../../shared/layout/Base";


export async function getServerSideProps() {
	const res = await fetch("http://localhost:3000/api/adota-pet/pet-adotados");
	const data = await res.json();
	return { props: { data } };
}

Adoption.getLayout = function getLayout(page) {
	return <Base pageTitle="Pet Adotado">{page}</Base>;
};

export default function Adoption({ data }) {
	const [show, setShow] = useState(false);
	const [pet, setPet] = useState({});
	const [activePhoto, setActivePhoto] = useState(0);
	const [isSignin, setIsSignin] = useState(false);

	const [lottie, setLottie] = useState(null);
	const ref = useRef(null);

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
	const handleShow = (petParams) => {
		setPet(petParams);
		setShow(true);
	};

	return (
		<>
			<div className="row mt-4">
				{data?.length > 0 && (
					<div className="col-12 text-center mb-5 mt-2">
						<h1>Amigos que já encontraram um lar</h1>
					</div>
				)}
			</div>
			{data?.length > 0 && (
				<div className="row mt-4">
					{data.map((petMapped) => (
						<div className="col-sm-3 mb-3" key={petMapped.petId}>
							<div className="card shadow bg-light border-success">
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
                                        <h2><span className="w-100 badge text-ligth bg-dark">Adotado<i className="ms-2 bi bi-balloon-heart-fill"></i></span></h2>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
			{!data?.length && (
				<div className="row text-center mt-4">
					<h2>Por enquanto não encontramos amigos adotados!</h2>
					<div
						style={{ maxWidth: 700 }}
						className="w-75 ms-auto me-auto"
						ref={ref}
					></div>
				</div>
			)}
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Detalhes da adoção</Modal.Title>
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
					{pet.adopted ? (
						<div className="mt-2">
							<h4>Status da adoção: </h4>
							<div className="alert alert-success" role="alert">
								Adotado!
							</div>
						</div>
					) : (
						<div>
							<h4>Status da adoção: </h4>
							<div className="alert alert-info" role="alert">
								Disponível para adoção!
							</div>
						</div>
					)}
					<h5>Experiência do usuário: </h5>
					<p className="card-text mt-2 text-break">
						{pet.experience}
					</p>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="outline-success" onClick={handleClose}>
						Fechar
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
