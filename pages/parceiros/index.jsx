import Head from "next/head";
import Navbar from "../../shared/components/Navbar";

export default function About() {
	return (
		<div>
			<Head>
				<title>Serviços</title>
			</Head>
			<main class="flex-shrink-0">
				<section class="py-4 mb-3 ps-5 pe-5">
					<Navbar />
            	    <div class="container px-5 my-5">
            	        <div class="text-center mb-5">
            	            <h1 class="fw-bolder">Nossos Parceiros</h1>
            	            <p class="lead fw-normal text-muted mb-0">Empresas e Marcas que acreditam em nosso trabalho</p>
            	        </div>
            	        <div class="row gx-5">
            	            <div class="col-lg-4">
            	                <div class="position-relative mb-5">
            	                    <img class="img-fluid rounded-3 mb-3" src="/assets/parceiros/parceiro_amazon.jpg" alt="..." />
            	                    <a class="h3 fw-bolder text-decoration-none link-dark stretched-link" href="https://www.amazon.com.br/">Amazon</a>
            	                </div>
            	            </div>
            	            <div class="col-lg-4">
            	                <div class="position-relative mb-5">
            	                    <img class="img-fluid rounded-3 mb-3" src="/assets/parceiros/parceiro_google.jpg" alt="..." />
            	                    <a class="h3 fw-bolder text-decoration-none link-dark stretched-link" href="https://www.google.com/intl/pt-BR_br/business/">Google</a>
            	                </div>
            	            </div>
            	            <div class="col-lg-4">
            	                <div class="position-relative mb-5 mb-lg-0">
            	                    <img class="img-fluid rounded-3 mb-3" src="/assets/parceiros/parceiro_facebook.jpg" alt="..." />
            	                    <a class="h3 fw-bolder text-decoration-none link-dark stretched-link" href="https://about.facebook.com/br/meta/">Facebook</a>
            	                </div>
            	            </div>
            	            <div class="col-lg-4">
            	                <div class="position-relative">
            	                    <img class="img-fluid rounded-3 mb-3" src="/assets/parceiros/parceiro_ambev.jpg" alt="..." />
            	                    <a class="h3 fw-bolder text-decoration-none link-dark stretched-link" href="https://www.ambev.com.br/">Ambev</a>
            	                </div>
            	            </div>
							<div class="col-lg-4">
            	                <div class="position-relative mb-5">
            	                    <img class="img-fluid rounded-3 mb-3" src="/assets/parceiros/parceiro_cocacola.jpg" alt="..." />
            	                    <a class="h3 fw-bolder text-decoration-none link-dark stretched-link" href="https://www.coca-cola.com.br/">Coca-Cola</a>
            	                </div>
            	            </div>
							<div class="col-lg-4">
            	                <div class="position-relative mb-5">
            	                    <img class="img-fluid rounded-3 mb-3" src="/assets/parceiros/parceiro_xp.jpg" alt="..." />
            	                    <a class="h3 fw-bolder text-decoration-none link-dark stretched-link" href="https://www.xpi.com.br/">XP Investimentos</a>
            	                </div>
            	            </div>
							<div class="col-lg-4">
            	                <div class="position-relative mb-5">
            	                    <img class="img-fluid rounded-3 mb-3" src="/assets/parceiros/parceiro_mercado.jpg" alt="..." />
            	                    <a class="h3 fw-bolder text-decoration-none link-dark stretched-link" href="https://www.mercadobitcoin.com.br/">Mercado Bitcoin</a>
            	                </div>
            	            </div>
							<div class="col-lg-4">
            	                <div class="position-relative mb-5">
            	                    <img class="img-fluid rounded-3 mb-3" src="/assets/parceiros/parceiro_microsoft.jpg" alt="..." />
            	                    <a class="h3 fw-bolder text-decoration-none link-dark stretched-link" href="https://www.microsoft.com/pt-br">Microsoft</a>
            	                </div>
            	            </div>
							<div class="col-lg-4">
            	                <div class="position-relative mb-5">
            	                    <img class="img-fluid rounded-3 mb-3" src="/assets/parceiros/parceiro_binance.jpg" alt="..." />
            	                    <a class="h3 fw-bolder text-decoration-none link-dark stretched-link" href="https://www.binance.com/pt-BR">Binance</a>
            	                </div>
            	            </div>
            	        </div>
            	    </div>
            	</section>
			</main>
		</div>
	);
}
