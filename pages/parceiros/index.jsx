import Link from "next/link";
import Base from "../../shared/layout/Base";
import ModalHelper from "../../shared/components/ModalHelper"

About.getLayout = function getLayout(page) {
	return <Base pageTitle="Serviços">{page}</Base>;
};

export default function About() {
	return (
		<>
		<ModalHelper/>
			<div className="container px-5 my-5">
				<div className="text-center mb-5">
					<h1 className="fw-bolder">Nossos Parceiros</h1>
					<p className="lead fw-normal text-muted mb-0">
						Empresas e Marcas que acreditam em nosso trabalho
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
							<Link href="https://www.amazon.com.br/">	
								<a className="h3 fw-bolder text-decoration-none link-dark stretched-link">Amazon</a>
							</Link>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="position-relative mb-5">
							<img
								className="img-fluid rounded-3 mb-3"
								src="/assets/parceiros/parceiro_google.jpg"
								alt="..."
							/>
							<Link href="https://www.google.com/intl/pt-BR_br/business/">
								<a className="h3 fw-bolder text-decoration-none link-dark stretched-link">Google</a>
							</Link>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="position-relative mb-5 mb-lg-0">
							<img
								className="img-fluid rounded-3 mb-3"
								src="/assets/parceiros/parceiro_facebook.jpg"
								alt="..."
							/>
							<Link href="https://about.facebook.com/br/meta/">
								<a className="h3 fw-bolder text-decoration-none link-dark stretched-link">Facebook</a>
							</Link>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="position-relative">
							<img
								className="img-fluid rounded-3 mb-3"
								src="/assets/parceiros/parceiro_ambev.jpg"
								alt="..."
							/>
							<Link href="https://www.ambev.com.br/">
								<a className="h3 fw-bolder text-decoration-none link-dark stretched-link">Ambev</a>
							</Link>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="position-relative mb-5">
							<img
								className="img-fluid rounded-3 mb-3"
								src="/assets/parceiros/parceiro_cocacola.jpg"
								alt="..."
							/>
							<Link href="https://www.coca-cola.com.br/">
								<a className="h3 fw-bolder text-decoration-none link-dark stretched-link">Coca-Cola</a>
							</Link>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="position-relative mb-5">
							<img
								className="img-fluid rounded-3 mb-3"
								src="/assets/parceiros/parceiro_xp.jpg"
								alt="..."
							/>
							<Link href="https://www.xpi.com.br/">
								<a className="h3 fw-bolder text-decoration-none link-dark stretched-link">XP Investimentos</a>
							</Link>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="position-relative mb-5">
							<img
								className="img-fluid rounded-3 mb-3"
								src="/assets/parceiros/parceiro_mercado.jpg"
								alt="..."
							/>
							<Link href="https://www.mercadobitcoin.com.br/">
								<a className="h3 fw-bolder text-decoration-none link-dark stretched-link">Mercado Bitcoin</a>
							</Link>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="position-relative mb-5">
							<img
								className="img-fluid rounded-3 mb-3"
								src="/assets/parceiros/parceiro_microsoft.jpg"
								alt="..."
							/>
							<Link href="https://www.microsoft.com/pt-br">
								<a className="h3 fw-bolder text-decoration-none link-dark stretched-link">Microsoft</a>
							</Link>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="position-relative mb-5">
							<img
								className="img-fluid rounded-3 mb-3"
								src="/assets/parceiros/parceiro_binance.jpg"
								alt="..."
							/>
							<Link href="https://www.binance.com/pt-BR">
								<a className="h3 fw-bolder text-decoration-none link-dark stretched-link">Binance</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
