import Head from "next/head";
import Navbar from "../../shared/components/Navbar";

export default function About() {
	return (
		<div>
			<Head>
				<title>Serviços</title>
			</Head>
			<main className="flex-shrink-0">
				<section className="py-4 mb-3 ps-5 pe-5">
					<Navbar />
					<div className="container px-5 my-5">
						<div className="text-center mb-5">
							<h1 className="fw-bolder">Nossos Parceiros</h1>
							<p className="lead fw-normal text-muted mb-0">
								Empresas e Marcas que acreditam em nosso
								trabalho
							</p>
						</div>
						<div className="row gx-5">
							<div className="col-lg-4">
								<div className="position-relative mb-5">
									<img
										className="img-fluid rounded-3 mb-3"
										src="/assets/parceiros/parceiro_amazon.jpg"
										alt="..."
									/>
									<a
										className="h3 fw-bolder text-decoration-none link-dark stretched-link"
										href="https://www.amazon.com.br/"
									>
										Amazon
									</a>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="position-relative mb-5">
									<img
										className="img-fluid rounded-3 mb-3"
										src="/assets/parceiros/parceiro_google.jpg"
										alt="..."
									/>
									<a
										className="h3 fw-bolder text-decoration-none link-dark stretched-link"
										href="https://www.google.com/intl/pt-BR_br/business/"
									>
										Google
									</a>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="position-relative mb-5 mb-lg-0">
									<img
										className="img-fluid rounded-3 mb-3"
										src="/assets/parceiros/parceiro_facebook.jpg"
										alt="..."
									/>
									<a
										className="h3 fw-bolder text-decoration-none link-dark stretched-link"
										href="https://about.facebook.com/br/meta/"
									>
										Facebook
									</a>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="position-relative">
									<img
										className="img-fluid rounded-3 mb-3"
										src="/assets/parceiros/parceiro_ambev.jpg"
										alt="..."
									/>
									<a
										className="h3 fw-bolder text-decoration-none link-dark stretched-link"
										href="https://www.ambev.com.br/"
									>
										Ambev
									</a>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="position-relative mb-5">
									<img
										className="img-fluid rounded-3 mb-3"
										src="/assets/parceiros/parceiro_cocacola.jpg"
										alt="..."
									/>
									<a
										className="h3 fw-bolder text-decoration-none link-dark stretched-link"
										href="https://www.coca-cola.com.br/"
									>
										Coca-Cola
									</a>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="position-relative mb-5">
									<img
										className="img-fluid rounded-3 mb-3"
										src="/assets/parceiros/parceiro_xp.jpg"
										alt="..."
									/>
									<a
										className="h3 fw-bolder text-decoration-none link-dark stretched-link"
										href="https://www.xpi.com.br/"
									>
										XP Investimentos
									</a>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="position-relative mb-5">
									<img
										className="img-fluid rounded-3 mb-3"
										src="/assets/parceiros/parceiro_mercado.jpg"
										alt="..."
									/>
									<a
										className="h3 fw-bolder text-decoration-none link-dark stretched-link"
										href="https://www.mercadobitcoin.com.br/"
									>
										Mercado Bitcoin
									</a>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="position-relative mb-5">
									<img
										className="img-fluid rounded-3 mb-3"
										src="/assets/parceiros/parceiro_microsoft.jpg"
										alt="..."
									/>
									<a
										className="h3 fw-bolder text-decoration-none link-dark stretched-link"
										href="https://www.microsoft.com/pt-br"
									>
										Microsoft
									</a>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="position-relative mb-5">
									<img
										className="img-fluid rounded-3 mb-3"
										src="/assets/parceiros/parceiro_binance.jpg"
										alt="..."
									/>
									<a
										className="h3 fw-bolder text-decoration-none link-dark stretched-link"
										href="https://www.binance.com/pt-BR"
									>
										Binance
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
