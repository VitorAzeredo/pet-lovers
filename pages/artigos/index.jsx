import Link from "next/link";
import Base from "../../shared/layout/Base";
import ModalHelper from "../../shared/components/ModalHelper"

About.getLayout = function getLayout(page) {
	return <Base pageTitle="Artigos">{page}</Base>;
};

export default function About() {
	return (
		<>
		<ModalHelper/>
			<div className="container px-2">
				<h1 className="row justify-content-center py-4">
					Artigos que talvez você goste
				</h1>
				<div className="card border-0 shadow rounded-3 overflow-hidden">
					<div className="card-body p-0">
						<div className="row gx-0">
							<div className="col-lg-6 col-xl-5 py-lg-5">
								<div className="p-4 p-md-5">
									<div className="badge bg-primary bg-gradient rounded-pill mb-3">
										Mais lido
									</div>
									<div className="h2 fw-bolder">
										O que perguntar ao veterinário na 1ª
										consulta do seu pet
									</div>
									<p>
										Cuidar de um filhote é uma das melhores
										experiências que podemos ter. Para que
										esse pequeno pet tenha uma saúde ótima
										ao longo da vida, é importante realizar
										a primeira consulta com um
										médico-veterinário de confiança. Confira
										algumas perguntas que você pode fazer
										nessa ocasião
									</p>
									<Link href="/artigos/posts/post01" passHref>
										<button
											type="button"
											className="btn btn-info"
										>
											Ler o artigo completo
										</button>
									</Link>
								</div>
							</div>
							<div className="col-lg-6 col-xl-7">
								<div className="bg-featured-blog">
									<img
										className="img-fluid rounded mb-5 mb-lg-0"
										src="/assets/artigos_destaque/veterinario.webp"
										alt="..."
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="py-5 bg-light">
				<div className="container px-5">
					<div className="row gx-5">
						<div className="col-xl-8">
							<h2 className="fw-bolder fs-5 mb-4">Notícias</h2>
							<div className="mb-4">
								<div className="small text-muted">
									29 de Março, 2022 - 11:20
								</div>
								<Link href="https://www.specialdog.com.br/portalpet/entenda-a-tendencia-probiotica-na-alimentacao-animal-">
								<a className="link-dark">
									<h3>
										Entenda a tendência probiótica na
										alimentação animal
									</h3>
								</a>
								</Link>
							</div>
							<div className="mb-5">
								<div className="small text-muted">
									22 de Abril, 2022 - 12:38
								</div>
								<Link href="https://www.specialdog.com.br/portalpet/o-que-pode-ou-nao-pode-nos-primeiros-meses-do-filhote-">
								<a className="link-dark">
									<h3>
										O que pode ou não pode nos primeiros
										meses do filhote.
									</h3>
								</a>
								</Link>
							</div>
							<div className="mb-5">
								<div className="small text-muted">
									28 de Janeiro, 2022 - 14:11
								</div>
								<Link href="https://www.specialdog.com.br/portalpet/calendario-de-vacinas-saiba-a-importancia-de-imunizar-o-seu-pet-">
								<a className="link-dark">
									<h3>
										Calendário de vacinas - saiba a
										importância de imunizar o seu pet.
									</h3>
								</a>
								</Link>
							</div>
							<div className="text-end mb-5 mb-xl-0">
								<Link href="https://www.specialdog.com.br/portalpet/">
								<a>
									<button
										type="button"
										className="btn btn-info"
									>
										Mais Noticias
									</button>
								</a>
								</Link>
							</div>
						</div>
						<div className="col-xl-4">
							<div className="card border-0 h-100">
								<div className="card-body p-4">
									<div className="d-flex h-100 align-items-center justify-content-center">
										<div className="text-center">
											<Link href="/contatos">
												<a
													className="customLink"
												>
													<h5>Fale Conosco</h5>
												</a>
											</Link>
											<p className="text-muted mb-4">
												Sugestões de artigos, envie para nossa equipe!
												<br />
												<Link href="#!">
													<a>
														contato@petslover.com.br
													</a>
												</Link>
											</p>
											<div className="h6 fw-bolder">
												Nós Siga nas Rede Sociais
											</div>
											<Link href="https://twitter.com/">
												<a
													className="fs-5 px-2 link-dark"
												>
													<i className="bi-twitter"></i>
												</a>
											</Link>
											<Link href="https://pt-br.facebook.com/">
												<a
													className="fs-5 px-2 link-dark"
													
												>
													<i className="bi-facebook"></i>
												</a>
											</Link>
											<Link href="https://www.linkedin.com/">
												<a
													className="fs-5 px-2 link-dark"
												>
													<i className="bi-linkedin"></i>
												</a>
											</Link>
											<Link href="https://www.youtube.com/">
												<a
													className="fs-5 px-2 link-dark"
												>
													<i className="bi-youtube"></i>
												</a>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-5">
				<div className="container px-5">
					<h2 className="fw-bolder fs-5 mb-4">Artigos em destaque</h2>
					<div className="row gx-5">
						<div className="col-lg-4 mb-5">
							<div className="card h-100 shadow border-0">
								<img
									className="card-img-top"
									src="/assets/artigos_destaque/ovo_pascoa.png"
									alt="pets-na-pascoa"
								/>
								<div className="card-body p-4">
									<div className="badge bg-primary bg-gradient rounded-pill mb-2">
										Novidades
									</div>
									<Link href="/artigos/posts/post02">
										<a
											className="text-decoration-none link-dark stretched-link"
										>
											<div className="h5 card-title mb-3">
												Cuidados com os pets na Páscoa
											</div>
										</a>
									</Link>
									<p className="card-text mb-0">
										Você sabia os cães e gatos não podem
										comer chocolate? Confira algumas dicas
										para comemorar a Páscoa com os pets de
										forma saudável...
									</p>
								</div>
								<div className="card-footer p-4 pt-0 bg-transparent border-top-0">
									<div className="d-flex align-items-end justify-content-between">
										<div className="d-flex align-items-center">
											<img
												className="rounded-circle me-3"
												src="/assets/artigos_destaque/kelly_maiara.png"
												alt="..."
											/>
											<div className="small">
												<div className="fw-bold">
													Kelly Maiara Lopes Carreiro
													- Médica - Veterinária
												</div>
												<div className="text-muted">
													{" "}
													18 de Abril, 2022 &middot;
													08:18
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 mb-5">
							<div className="card h-100 shadow border-0">
								<img
									className="card-img-top"
									src="/assets/artigos_destaque/gravidez.png"
									alt="https://www.specialdog.com.br/portalpet/gravidez-psicologica-em-pets-como-identificar-e-tratar"
								/>
								<div className="card-body p-4">
									<div className="badge bg-primary bg-gradient rounded-pill mb-2">
										Novidades
									</div>
									<Link href="/artigos/posts/post03">
										<a
											className="text-decoration-none link-dark stretched-link"
										>
											<div className="h5 card-title mb-3">
												Gravidez psicológica em pets: como
												identificar e tratar
											</div>
										</a>
									</Link>
									<p className="card-text mb-0">
										Entenda um pouco mais sobre a
										Pseudociese (gravidez psicológica) em
										gatas e cadelas, as alterações
										comportamentais e quais as implicações
										envolvidas nesta condição...
									</p>
								</div>
								<div className="card-footer p-4 pt-0 bg-transparent border-top-0">
									<div className="d-flex align-items-end justify-content-between">
										<div className="d-flex align-items-center">
											<img
												className="rounded-circle me-3"
												src="/assets/artigos_destaque/kelly_maiara.png"
												alt="..."
											/>
											<div className="small">
												<div className="fw-bold">
													Kelly Maiara Lopes Carreiro
													- Médica - Veterinária
												</div>
												<div className="text-muted">
													{" "}
													16 de Março, 2022 &middot;
													11:28
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 mb-5">
							<div className="card h-100 shadow border-0">
								<img
									className="card-img-top"
									src="/assets/artigos_destaque/caoguia.png"
									alt="https://www.specialdog.com.br/portalpet/caes-de-trabalho-conheca-as-5-principais-profissoes-desses-animais-"
								/>
								<div className="card-body p-4">
									<div className="badge bg-primary bg-gradient rounded-pill mb-2">
										Novidades
									</div>
									<Link href="/artigos/posts/post04">
										<a
											className="text-decoration-none link-dark stretched-link"
										>
											<div className="h5 card-title mb-3">
												Cães de trabalho: conheça as 5
												principais profissões desses animais
											</div>
										</a>
									</Link>
									<p className="card-text mb-0">
										Os animais domésticos são muito além de
										companhia, podendo auxiliar os humanos
										em funções muito importantes. Com a
										domesticação...
									</p>
								</div>
								<div className="card-footer p-4 pt-0 bg-transparent border-top-0">
									<div className="d-flex align-items-end justify-content-between">
										<div className="d-flex align-items-center">
											<img
												className="rounded-circle me-3"
												src="/assets/artigos_destaque/ana_leticia.png"
												alt="..."
											/>
											<div className="small">
												<div className="fw-bold">
													Ana Letícia Poletto &middot;
													Médica - Veterinária
												</div>
												<div className="text-muted">
													02 de Maio, 2022 &middot;
													15:01
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
