import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "../core/config/firebase/client";
import { Offcanvas } from "react-bootstrap";
import { CustomOverlay } from "../shared/components/Overlay";
import { NavbarPerfilPopover } from "../shared/components/NavbarPerfilPopover";

export default function Home() {
	const [isLogged, setIsLogged] = useState(false);
	const [show, setShow] = useState(false);
	const [urlImgUser, setUrlImgUser] = useState("");
	const [emailUser, setEmailUser] = useState("");
	const extractName = (email) => {
		return email.split("@")[0];
	};

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setIsLogged(true);
				setUrlImgUser(user.photoURL);
				setEmailUser(extractName(user.email));
			} else {
				setIsLogged(false);
			}
		});
	}, []);

	const signOut = () => {
		auth.signOut();
	};

	return (
		<div className="container-fluid p-0">
			<Head>
				<title>Pet Lovers</title>
				<meta
					name="description"
					content="De amigos dos animais, para amigos dos animais."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="fullHeight">
				<Offcanvas show={show} onHide={handleClose}>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>Menu</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<p className="mt-3" onClick={handleClose}>
							{" "}
							<Link href="/sobre">
								<a className="customLink">Sobre</a>
							</Link>
						</p>
						<p className="mt-3" onClick={handleClose}>
							{" "}
							<Link href="/adocao">
								<a className="customLink">Adoção</a>
							</Link>
						</p>
						<p className="mt-3" onClick={handleClose}>
							{" "}
							<Link href="/apadrinhamento">
								<a className="customLink">Apadrinhamento</a>
							</Link>
						</p>
						{/* <p className="mt-3" onClick={handleClose}>
							{" "}
							<Link href="/pets-adotados">
								<a className="customLink">Pets Adotados</a>
							</Link>
						</p> */}
						<p className="mt-3" onClick={handleClose}>
							{" "}
							<Link href="/artigos">
								<a className="customLink">Artigos</a>
							</Link>
						</p>
						<p className="mt-3" onClick={handleClose}>
							{" "}
							<Link href="/parceiros">
								<a className="customLink">Parceiros</a>
							</Link>
						</p>
						<p className="mt-3" onClick={handleClose}>
							{" "}
							<Link href="/contatos">
								<a className="customLink">Contatos</a>
							</Link>
						</p>
						<p className="mt-3 fullWidth" onClick={handleClose}>
							{" "}
							{isLogged ? (
								<Link href="/">
									<a
										onClick={signOut}
										className="customLink rounded"
									>
										Sair
									</a>
								</Link>
							) : (
								<Link href="/autenticacao/entrar">
									<a className="customLink rounded">Entrar</a>
								</Link>
							)}
						</p>
					</Offcanvas.Body>
				</Offcanvas>
				<div className="container-fluid m-0">
					<div className="row">
						<div
							className={`fullHeight col-sm-6 pt-4 ps-5 pe-5 pb-4`}
						>
							<div className="row pt-2">
								<div className="col-6 p-0 d-flex align-items-center">
									{" "}
									<Link href="/" passHref>
										<h3 className="customLink mb-0">
											Pet-Lovers
										</h3>
									</Link>
								</div>
								<div className="col-6 p-0 text-end">
									<i
										style={{ cursor: "pointer" }}
										onClick={handleShow}
										className="bi bi-list fs-3 d-block d-sm-none"
									></i>
								</div>
							</div>
							<div className="row mt-5">
								<div className="col-12 p-0">
									<h1 className={styles.title}>
										Procure <br /> seu pet perfeito
									</h1>
								</div>
							</div>
							<div className="row mt-2">
								<div className="col-12 p-0">
									<h2>Simples, Seguro e Amigável</h2>
								</div>
							</div>
							<div className="row mt-4">
								<div className="col-12 p-0">
									<Link href="/adocao" passHref>
										<button
											type="button"
											className="btn btn-dark"
										>
											Adote agora!
										</button>
									</Link>
								</div>
							</div>
							<div className="row mt-5">
								<div className="col-12 p-0">
									<small className="mt-4">
										Disponível agora:
									</small>
								</div>
								<div className="col-12 p-0 mt-1">
									<Link href="/apadrinhamento" passHref>
										<button
											type="button"
											className="btn btn-info"
										>
											Apadrinhamento
										</button>
									</Link>
									<Link href="https://apoia.se/" passHref>
										<button
											type="button"
											className="btn btn-dark rounded ms-2"
										>
											Apoia.se
										</button>
									</Link>
								</div>
							</div>
						</div>
						<div
							className={`${styles.bgPrincipalDog} fullHeight d-none col-sm-6 pt-4 ps-5 pe-5 pb-4 justify-content-end d-sm-flex`}
						>
							<p
								onClick={handleShow}
								className="mb-0 d-block d-xl-none"
								style={{ cursor: "pointer" }}
							>
								<i className="bi bi-list fs-1"></i>
							</p>
							<p className="ms-3 mt-2 d-none d-xl-block">
								{" "}
								<Link href="/sobre">
									<a className="customLink">Sobre</a>
								</Link>
							</p>
							<p className="ms-3 mt-2 d-none d-xl-block">
								{" "}
								<Link href="/adocao">
									<a className="customLink">Adoção</a>
								</Link>
							</p>
							<p className="ms-3 mt-2 d-none d-xl-block">
								{" "}
								<Link href="/apadrinhamento">
									<a className="customLink">Apadrinhamento</a>
								</Link>
							</p>
							{/* <p className="ms-3 mt-2 d-none d-xl-block">
								{" "}
								<Link href="/pets-adotados">
									<a className="customLink">Pets Adotados</a>
								</Link>
							</p> */}
							<p className="ms-3 mt-2 d-none d-xl-block">
								{" "}
								<Link href="/artigos">
									<a className="customLink">Artigos</a>
								</Link>
							</p>
							<p className="ms-3 mt-2 d-none d-xl-block">
								{" "}
								<Link href="/parceiros">
									<a className="customLink">Parceiros</a>
								</Link>
							</p>
							<p className="ms-3 mt-2  d-none d-xl-block">
								{" "}
								<Link href="/contatos">
									<a className="customLink">Contatos</a>
								</Link>
							</p>
							<div className="ms-3 d-none d-xl-block">
								{" "}
								{isLogged ? (
									<CustomOverlay
										popAs="h3"
										popPlacement="bottom"
										popHeaderTitle={emailUser}
										popId="pop-thumbnail"
										urlImgUser={urlImgUser}
									>
										<NavbarPerfilPopover
											signOutAndRoute={signOut}
										/>
									</CustomOverlay>
								) : (
									<Link href="/autenticacao/entrar">
										<a className="customLink text-dark bg-info p-2 rounded">
											Entrar
										</a>
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
