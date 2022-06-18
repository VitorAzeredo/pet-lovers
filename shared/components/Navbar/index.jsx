import Link from "next/link";
import { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { auth } from "../../../core/config/firebase/client";
import { NavbarPerfilPopover } from "../NavbarPerfilPopover";
import { NavIconMenu } from "../NavIconMenu";
import { NavItem } from "../NavItem";
import { CustomOverlay } from "../Overlay";
import { useRouter } from "next/router";

export default function Navbar() {
	const [isLogged, setIsLogged] = useState(false);
	const [show, setShow] = useState(false);
	const [urlImgUser, setUrlImgUser] = useState("");
	const [emailUser, setEmailUser] = useState("");
	const router = useRouter();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const extractName = (email) => {
		return email.split("@")[0];
	};

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
		router.push("/");
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
					<p className="mt-3" onClick={handleClose}>
						{" "}
						<Link href="/pets-adotados">
							<a className="customLink">Adotados</a>
						</Link>
					</p>
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
					<p className="mt-3 fullWidth">
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
			<div className="col-6 p-0 d-flex align-items-center">
				{" "}
				<Link href="/" passHref>
					<h3 className="customLink">Pet-Lovers</h3>
				</Link>
			</div>
			<ul className="col-6 justify-content-end d-flex">
				<NavIconMenu handle={handleShow} />
				<NavItem linkPage="sobre" title="Sobre" />
				<NavItem linkPage="adocao" title="Adoção" />
				<NavItem linkPage="apadrinhamento" title="Apadrinhamento" />
				<NavItem linkPage="pets-adotados" title="Adotados" />
				<NavItem linkPage="artigos" title="Artigos" />
				<NavItem linkPage="parceiros" title="Parceiros" />
				<NavItem linkPage="contatos" title="Contatos" />
				<span className="ms-3 d-none d-md-flex align-items-center">
					{" "}
					{isLogged ? (
						<CustomOverlay
							popAs="h3"
							popPlacement="bottom"
							popHeaderTitle={emailUser}
							popId="pop-thumbnail"
							urlImgUser={urlImgUser}
						>
							<NavbarPerfilPopover signOutAndRoute={signOut} />
						</CustomOverlay>
					) : (
						<Link href="../autenticacao/entrar">
							<a className="customLink text-dark bg-info p-2 rounded">
								Entrar
							</a>
						</Link>
					)}
				</span>
			</ul>
		</div>
	);
}
