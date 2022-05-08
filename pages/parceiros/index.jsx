import Head from "next/head";
import Navbar from "../../shared/components/Navbar";

export default function About() {
	return (
		<div>
			<Head>
				<title>Serviços</title>
			</Head>
			<main>
				<div className="container-fluid pt-4 ps-5 pe-5 pb-4">
					<Navbar />
					<div className="row">
						<div className="col-12 text-center">
							<h1>Nossos serviços</h1>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
