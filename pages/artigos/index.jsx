import Head from "next/head";
import Navbar from "../../shared/components/Navbar";

export default function About() {
	return (
		<div>
			<Head>
				<title>Artigos</title>
			</Head>
			<main class="flex-shrink-0">
				<section class="py-4 mb-3 ps-5 pe-5">
                <Navbar />
                <div className="container px-2">
                    <h1 class="row justify-content-center py-4">Artigos que talvés você goste</h1>
                    <div class="card border-0 shadow rounded-3 overflow-hidden">
                        <div class="card-body p-0">
                            <div class="row gx-0">
                                <div class="col-lg-6 col-xl-5 py-lg-5">
                                   <div class="p-4 p-md-5">
                                        <div class="badge bg-primary bg-gradient rounded-pill mb-3">Mais lido</div>
                                        <div class="h2 fw-bolder">O que perguntar ao veterinário na 1ª consulta do seu pet</div>
                                        <p>Cuidar de um filhote é uma das melhores experiências que podemos ter. Para que esse pequeno pet tenha uma saúde ótima ao longo da vida, é importante realizar a primeira consulta com um médico-veterinário de confiança. Confira algumas perguntas que você pode fazer nessa ocasião</p>
                                        <a href="#!">
                                            Veja o Artigo Completo...
                                        </a>
                                    </div>
                                </div>
                                	<div class="col-lg-6 col-xl-7">
                                        <div class="bg-featured-blog">
                                            <img class="img-fluid rounded mb-5 mb-lg-0" src="/assets/artigos_destaque/veterinario.webp" alt="..." />
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
				</div>
                </section>
                <section class="py-5 bg-light">
                <div class="container px-5">
                    <div class="row gx-5">
                        <div class="col-xl-8">
                            <h2 class="fw-bolder fs-5 mb-4">Notícias</h2>
                            <div class="mb-4">
                                <div class="small text-muted">29 de Março, 2022 - 11:20</div>
                                <a class="link-dark" href="#!"><h3>Entenda a tendência probiótica na alimentação animal</h3></a>
                            </div>
                            <div class="mb-5">
                                <div class="small text-muted">22 de Abril, 2022 - 12:38</div>
                                <a class="link-dark" href="#!"><h3>O que pode ou não pode nos primeiros meses do filhote.</h3></a>
                            </div>
                            <div class="mb-5">
                                <div class="small text-muted">28 de Janeiro, 2022 - 14:11</div>
                                <a class="link-dark" href="#!"><h3>Calendário de vacinas - saiba a importância de imunizar o seu pet.</h3></a>
                            </div>
                            <div class="text-end mb-5 mb-xl-0">
                                <a href="#!">
                                    <button
								        type="button"
								        className="btn btn-info">
							            Mais Artigos
							        </button>
                                </a>
                            </div>
                        </div>
                        <div class="col-xl-4">
                            <div class="card border-0 h-100">
                                <div class="card-body p-4">
                                    <div class="d-flex h-100 align-items-center justify-content-center">
                                        <div class="text-center">  
                                            <a className="customLink" href="/contatos">
                                                <h5>Fale Conosco</h5>
                                            </a> 
                                            <p class="text-muted mb-4">
                                                Adorariamos ouvir suas criticas e sugestões!
                                                <br />
                                                <a href="#!">contato@petslover.com.br</a>
                                            </p>
                                            <div class="h6 fw-bolder">Nós Siga nas Rede Sociais</div>
                                            <a class="fs-5 px-2 link-dark" href="https://twitter.com/"><i class="bi-twitter"></i></a>
                                            <a class="fs-5 px-2 link-dark" href="https://pt-br.facebook.com/"><i class="bi-facebook"></i></a>
                                            <a class="fs-5 px-2 link-dark" href="https://www.linkedin.com/"><i class="bi-linkedin"></i></a>
                                            <a class="fs-5 px-2 link-dark" href="https://www.youtube.com/"><i class="bi-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                <section class="py-5">
                <div class="container px-5">
                    <h2 class="fw-bolder fs-5 mb-4">Artigos em destaque</h2>
                    <div class="row gx-5">
                        <div class="col-lg-4 mb-5">
                            <div class="card h-100 shadow border-0">
                                <img class="card-img-top" src="/assets/artigos_destaque/ovo_pascoa.png" alt="pets-na-pascoa"/>
                                <div class="card-body p-4">
                                    <div class="badge bg-primary bg-gradient rounded-pill mb-2">Novidades</div>
                                    <a class="text-decoration-none link-dark stretched-link" href="#!"><div class="h5 card-title mb-3">Cuidados com os pets na Páscoa</div></a>
                                    <p class="card-text mb-0">Você sabia os cães e gatos não podem comer chocolate? Confira algumas dicas para comemorar a Páscoa com os pets de forma saudável...</p>
                                </div>
                                <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div class="d-flex align-items-end justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <img class="rounded-circle me-3" src="/assets/artigos_destaque/kelly_maiara.png" alt="..." />
                                            <div class="small">
                                                <div class="fw-bold">Kelly Maiara Lopes Carreiro - Médica - Veterinária</div>
                                                <div class="text-muted"> 18 de Abril, 2022 &middot; 08:18</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-5">
                            <div class="card h-100 shadow border-0">
                                <img class="card-img-top" src="/assets/artigos_destaque/gravidez.png" alt="https://www.specialdog.com.br/portalpet/gravidez-psicologica-em-pets-como-identificar-e-tratar" />
                                <div class="card-body p-4">
                                    <div class="badge bg-primary bg-gradient rounded-pill mb-2">Novidades</div>
                                    <a class="text-decoration-none link-dark stretched-link" href="#!"><div class="h5 card-title mb-3">Gravidez psicológica em pets: como identificar e tratar</div></a>
                                    <p class="card-text mb-0">Entenda um pouco mais sobre a Pseudociese (gravidez psicológica) em gatas e cadelas, as alterações comportamentais e quais as implicações envolvidas nesta condição...</p>
                                </div>
                                <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div class="d-flex align-items-end justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <img class="rounded-circle me-3" src="/assets/artigos_destaque/kelly_maiara.png" alt="..." />
                                            <div class="small">
                                                <div class="fw-bold">Kelly Maiara Lopes Carreiro - Médica - Veterinária</div>
                                                <div class="text-muted"> 16 de Março, 2022 &middot; 11:28</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-5">
                            <div class="card h-100 shadow border-0">
                                <img class="card-img-top" src="/assets/artigos_destaque/caoguia.png" alt="https://www.specialdog.com.br/portalpet/caes-de-trabalho-conheca-as-5-principais-profissoes-desses-animais-"/>
                                <div class="card-body p-4">
                                    <div class="badge bg-primary bg-gradient rounded-pill mb-2">Novidades</div>
                                    <a class="text-decoration-none link-dark stretched-link" href="#!"><div class="h5 card-title mb-3">Cães de trabalho: conheça as 5 principais profissões desses animais</div></a>
                                    <p class="card-text mb-0">Os animais domésticos são muito além de companhia, podendo auxiliar os humanos em funções muito importantes. Com a domesticação...</p>
                                </div>
                                <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div class="d-flex align-items-end justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <img class="rounded-circle me-3" src="/assets/artigos_destaque/ana_leticia.png" alt="..."/>
                                            <div class="small">
                                                <div class="fw-bold">Ana Letícia Poletto &middot; Médica - Veterinária</div>
                                                <div class="text-muted">02 de Maio, 2022 &middot; 15:01</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-end mb-5 mb-xl-0">
                        <a href="#!">
                            <button
								type="button"
								className="btn btn-info"
							>
							    Mais Artigos
							</button>
                        </a>
                    </div>
                </div>
                </section>
			</main>
		</div>
	);
}