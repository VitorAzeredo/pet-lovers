import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Navbar from "../../shared/components/Navbar";
import { auth } from "../../core/config/firebase/client";

export async function getServerSideProps() {
	const res = await fetch("http://localhost:3000/api/buscar-meus-apadrinhamentos/lista-pets");
	const data = await res.json();
	return { props: { data } };
}

export default function Adoption({ data }) {
	const [show, setShow] = useState(false);
	const [pet, setPet] = useState({});
	const [activePhoto, setActivePhoto] = useState(0);
	const [isSignin, setIsSignin] = useState(false);

	const [lottie, setLottie] = useState(null);
	const ref = useRef(null);

	useEffect(() => {
		return auth.onAuthStateChanged(user => {
			if (user) {
				setIsSignin(true);
			} else {
				setIsSignin(false);
			}
		}
		)
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

	return (
		<div>
			<Head>
				<title>Meus-apadrinhamentos</title>
			</Head>
			<main>
				<div className="container-fluid pt-4 ps-5 pe-5 pb-4">
					<Navbar />
					<div className="row mt-4">
						{data?.length > 0 && (
							<div className="col-12 text-center">
								<h1>Aqui estão todos os seus pets cadastrados para apadrinhamento</h1>
								<p className="fs-5">
									Você pode gerenciar eles na aba "Meus Apadrinhamentos"
								</p>
							</div>
						)}
						<div className="col-12 text-end mb-5">
							<p className="">
								{" "}
								{isSignin ? (<Link href="/apadrinhamento/registrar" passHref>
									<button
										type="button"
										className="btn btn-warning"
									>
										Você teria um amigo para apadrinhar?
									</button>
								</Link>) : null}
							</p>
						</div>
					</div>
					
					{!data?.length && (
						<div className="row text-center mt-4">
							<h2>
								Por enquanto não encontramos amigos para adotar
							</h2>
							<div
								style={{ maxWidth: 700 }}
								className="w-75 ms-auto me-auto"
								ref={ref}
							></div>
						</div>
					)}

					<div class="table-responsive ">
					  <table class="table align-middle">
					    <thead>
					      <tr class="table-dark">
							  <th class="bi bi-file-person"> Nome</th>
							  <th class="bi bi-envelope-fill"> E-mail</th>
							  <th class="bi bi-layers-fill"> Status</th>
							  <th class="bi bi-pencil-square"> Editar</th>
					      </tr>
					    </thead>
					    <tbody>
					      <tr class="table-light">
						  	  <th>Thor</th>
							  <th>vitor.silva.azeredo@gmail.com</th>
							  <th>Disponivel</th>
							  <th>Alterar</th>
					      </tr>
					      <tr class="align-bottom table-light">
						  	  <th>Thor</th>
							  <th>vitor.silva.azeredo@gmail.com</th>
							  <th>Disponivel</th>
							  <th>Alterar</th>
					      </tr>
					      <tr class="align-bottom table-light">
						  	  <th>Thor</th>
							  <th>vitor.silva.azeredo@gmail.com</th>
							  <th>Disponivel</th>
							  <th>Alterar</th>
					      </tr>
					    </tbody>
					  </table>
					</div>

				</div>
			</main>
		</div>
	);
}
