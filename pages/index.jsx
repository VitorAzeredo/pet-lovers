import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "../core/config/firebase/client";

export default function Home() {
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
		<div class="container-fluid">
			<Head>
				<title>Pet Lovers</title>
				<meta
					name="description"
					content="De amigos dos animais, para amigos dos animais."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="fullHeight">
				<div className="container-fluid m-0">
					<div className="row">
						<div className={`fullHeight col-6 pt-4 ps-5 pe-5 pb-4`}>
							<div className="row">
								<div className="col-6 p-0">
									{" "}
									<Link href="/" passHref>
										<h3 className="customLink">
											Pet-Lovers
										</h3>
									</Link>
								</div>
								<div className="col-6 p-0 text-end">
									<i className="bi bi-search-heart fs-3"></i>
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
							className={`${styles.bgPrincipalDog} fullHeight col-6 pt-4 ps-5 pe-5 pb-4 justify-content-end d-flex`}
						>
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
				</div>
			</main>

			{/* <footer>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<span>
						<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							width={72}
							height={16}
						/>
					</span>
				</a>
			</footer> */}
		</div>
	);
}
