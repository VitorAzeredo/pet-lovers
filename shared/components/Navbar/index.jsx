import Link from "next/link";

import { useEffect, useState } from "react";
import { auth } from "../../../core/config/firebase/client";

export default function Navbar() {
	const [isLogged, setIsLogged] = useState(false);

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
			<div className="col-6 p-0">
				{" "}
				<Link href="/" passHref>
					<h3 className="customLink">Pet-Lovers</h3>
				</Link>
			</div>
			<div className="col-6 justify-content-end d-flex">
				<p className="ms-3">
					{" "}
					<Link href="/sobre">
						<a className="customLink">Sobre</a>
					</Link>
				</p>
				<p className="ms-3">
					{" "}
					<Link href="/adocao">
						<a className="customLink">Adoção</a>
					</Link>
				</p>
				<p className="ms-3">
					{" "}
					<Link href="/apadrinhamento">
						<a className="customLink">Apadrinhamento</a>
					</Link>
				</p>
				<p className="ms-3">
					{" "}
					<Link href="/artigos">
						<a className="customLink">Artigos</a>
					</Link>
				</p>
				<p className="ms-3">
					{" "}
					<Link href="/parceiros">
						<a className="customLink">Parceiros</a>
					</Link>
				</p>
				<p className="ms-3">
					{" "}
					<Link href="/contatos">
						<a className="customLink">Contatos</a>
					</Link>
				</p>
				<p className="ms-3">
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
