import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../../shared/components/Navbar";
import { auth } from "../../core/config/firebase/client";

export async function getServerSideProps() { // Verificar se será possível reaproveitar a listagem de pets
	const res = await fetch("http://localhost:3000/api/buscar-meus-pets/lista-pets");
	const data = await res.json();
	return { props: { data } };
}

export default function Adoption({ data }) { // Veridica se o usuário está logado e habilita a opção de cadastrar um novo pet, e editar.
	const [isSignin, setIsSignin] = useState(false);

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
								{isSignin ? (<Link href="/adocao/registrar" passHref>
									<button
										type="button"
										className="btn btn-warning"
									>
										Você teria um pet que precisa de um padrinho?
									</button>
								</Link>) : null}
							</p>
						</div>
					</div>
					<div class="table-responsive ">
					  <table class="table align-middle">
					    <thead>
					      <tr class="table-dark">
							  <th class="bi bi-file-person"> Nome</th>
							  <th class="bi bi-journal"> Descrição</th>
							  <th class="bi bi-map"> Estado</th>
							  <th class="bi bi-geo-alt"> Cidade</th>
							  <th class="bi bi-geo"> CEP</th>
							  <th class="bi bi-book"> Historia do Pet</th>
							  <th class="bi bi-images"> Edição das Imagens</th>
							  <th class="bi bi-layers-fill"> Status</th>
							  <th class="bi bi-pencil-square"> Editar</th>
					      </tr>
					    </thead>
					    <tbody>
					      <tr class="table-light">
						  	  <th>Thor</th>
							  <th>Cachorro de grande porte - Preto</th>
							  <th>Rio de Janeiro</th>
							  <th>Niteroi</th>
							  <th>24.547-896</th>
							  <th>Thor foi achado na rua.</th>
							  <th>Alterar Imagens</th>
							  <th>Disponível</th>
							  <th><button type="button" className="btn btn-outline-dark"> Alterar</button></th>
					      </tr>
					      <tr class="align-bottom table-light">
						  	  <th>Zeus</th>
							  <th>Gato de pequeno porte - Branco</th>
							  <th>São Paulo</th>
							  <th>Morumbi</th>
							  <th>24.258-874</th>
							  <th>Sua dona faleceu, ele procura um novo lar.</th>
							  <th>Alterar Imagens</th>
							  <th>Indisponível</th>
							  <th><button type="button" className="btn btn-outline-dark"> Alterar</button></th>
					      </tr>
					      <tr class="align-bottom table-light">
						  	  <th>Poseidon</th>
							  <th>Cacchorro de porte medio - Vira-lata</th>
							  <th>Recife</th>
							  <th>Centro</th>
							  <th>24.258-125</th>
							  <th>Seu dono não tem mas condições de sustenta-lo</th>
							  <th>Alterar Imagens</th>
							  <th>Disponível</th>
							  <th><button type="button" className="btn btn-outline-dark"> Alterar</button></th>	
					      </tr>
					    </tbody>
					  </table>
					</div>

				</div>
			</main>
		</div>
	);
}
