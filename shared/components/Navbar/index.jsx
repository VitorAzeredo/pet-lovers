import Link from "next/link";

import { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { auth } from "../../../core/config/firebase/client";

export default function Navbar() {
	const [isLogged, setIsLogged] = useState(false);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setIsLogged(true);
			} else {
				setIsLogged(false);
			}
		});
	}, []);

	const signOut = () => {
		auth.signOut();
	};
	return (
		<div className="row">
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
					<p className="mt-3">
						{" "}
						<Link href="/adocao">
							<a className="customLink">Adoção</a>
						</Link>
					</p>
					<p className="mt-3">
						{" "}
						<Link href="/apadrinhamento">
							<a className="customLink">Apadrinhamento</a>
						</Link>
					</p>
					<p className="mt-3">
						{" "}
						<Link href="/artigos">
							<a className="customLink">Artigos</a>
						</Link>
					</p>
					<p className="mt-3">
						{" "}
						<Link href="/parceiros">
							<a className="customLink">Parceiros</a>
						</Link>
					</p>
					<p className="mt-3">
						{" "}
						<Link href="/contatos">
							<a className="customLink">Contatos</a>
						</Link>
					</p>
					<p className="mt-3 fullWidth ">
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
								<a className="customLink rounded">
									Entrar
								</a>
							</Link>
						)}
					</p>
				</Offcanvas.Body>
			</Offcanvas>
			<div className="col-6 p-0 d-flex align-items-center">
				{" "}
				<Link href="/" passHref>
					<h3 className="customLink">Pet-Lovers</h3>
				</Link>
			</div>
			<div className="col-6 justify-content-end d-flex">
				<p onClick={handleShow} className="mb-0 d-block d-md-none" style={{ cursor: 'pointer' }}>
					<i className="bi bi-list fs-1"></i>
				</p>
				<p className="ms-3 d-none d-md-block">
					{" "}
					<Link href="/sobre">
						<a className="customLink">Sobre</a>
					</Link>
				</p>
				<p className="ms-3 d-none d-md-block">
					{" "}
					<Link href="/adocao">
						<a className="customLink">Adoção</a>
					</Link>
				</p>
				<p className="ms-3 d-none d-md-block">
					{" "}
					<Link href="/apadrinhamento">
						<a className="customLink">Apadrinhamento</a>
					</Link>
				</p>
				<p className="ms-3 d-none d-md-block">
					{" "}
					<Link href="/artigos">
						<a className="customLink">Artigos</a>
					</Link>
				</p>
				<p className="ms-3 d-none d-md-block">
					{" "}
					<Link href="/parceiros">
						<a className="customLink">Parceiros</a>
					</Link>
				</p>
				<p className="ms-3 d-none d-md-block">
					{" "}
					<Link href="/contatos">
						<a className="customLink">Contatos</a>
					</Link>
				</p>
				<p className="ms-3 d-none d-md-block">
					{" "}
					{isLogged ? (
						<Link href="/">
							<a
								onClick={signOut}
								className="customLink text-dark bg-info p-2 rounded"
							>
								Sair
							</a>
						</Link>
					) : (
						<Link href="/autenticacao/entrar">
							<a className="customLink text-dark bg-info p-2 rounded">
								Entrar
							</a>
						</Link>
					)}
				</p>
			</div>
		</div>
	);
}
