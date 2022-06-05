import Head from "next/head";
import Navbar from "../../shared/components/Navbar";
import { useState, useRef, useEffect } from "react";

export default function About() {
	const [lottie, setLottie] = useState(null);
	const ref = useRef(null);
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
				path: "/assets/nyan-cat.json",
			});

			return () => animation.destroy();
		}
	}, [lottie]);
    return (
		<div>
			<Head>
				<title>Contatos</title>
			</Head>
			<main class="flex-shrink-0">
				<section class="py-4 ps-5 pe-5">
				<Navbar />
                <div class="container">
                    <div class="rounded-2 py-2 px-2 px-md-2 mb-2">
                        <div class="text-center mb-3 mt-2">
                            <div class="rounded-3 mb-3"><i class="bi bi-envelope-heart-fill-5x"></i></div>
                            <h1 class="fw-bolder">Vamos Conversar!</h1>
                            <p class="lead fw-normal text-muted mb-0">Sua opinião e muito importante pra nós, sugestões ou criticas.</p>
                        </div>
                        <div class="row gx-5 justify-content-center">
                            <div class="col-lg-6 col-xl-6">
                                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                        <label for="name">Seu Nome</label>
                                        <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                        <label for="email">Um Email valido</label>
                                        <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                        <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                        <label for="phone">Um numero de contato</label>
                                        <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <textarea class="form-control" id="message" type="text" placeholder="Deixe aqui a sua Mensagem" data-sb-validations="required"></textarea>
                                        <label for="message">Deixe aqui a sua Mensagem</label>
                                        <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                    </div>
                                    <div class="d-none" id="submitSuccessMessage">
                                        <div class="text-center mb-3">
                                            <div class="fw-bolder">Seu formulario foi enviado com sucesso!</div>
                                            <br />
                                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                        </div>
                                    </div>
                                    <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Houve uma falha no envio da sua mensagem!</div></div>
                                    <div class="d-grid"><button class="btn btn-info btn-lg" id="submitButton" type="submit">Enviar</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 rounded mx-auto d-none d-lg-block">
						<div class="my-1">
							<div
								style={{ maxWidth: 900 }}
								className="w-75 ms-auto me-auto"
								ref={ref}
							></div>
						</div>
					</div>
                   {/* <div class="row gx-5 row-cols-2 row-cols-lg-4 py-5 mt-5">
                        <div class="col">
                            <div class="feature bg-dark bg-gradient text-white fw-bolder mb-3"><i class="bi bi-telephone-outbound ms-2"> 1746</i></div>
                            <div class="h5 mb-2">SMPDA</div>
                            <a class="text-decoration-none" href="https://www.rio.rj.gov.br/web/smpda"><p class="text-muted mb-0">Secretaria Municipal de Proteção e Defesa dos Animais.</p></a>
                        </div>
                        <div class="col">
                            <div class="feature bg-dark bg-gradient text-white rounded-3 mb-3"><i class="bi bi-telephone-outbound ms-2"></i></div>
                            <div class="h5">Teste</div>
                            <a class="text-decoration-none" href="https://www.rio.rj.gov.br/web/smpda"><p class="text-muted mb-0">Secretaria Municipal de Proteção e Defesa dos Animais.</p></a>
                        </div>
                        <div class="col">
                            <div class="feature bg-dark bg-gradient text-white rounded-3 mb-3"><i class="bi bi-telephone-outbound ms-2"></i></div>
                            <div class="h5">Teste</div>
                            <a class="text-decoration-none" href="https://www.rio.rj.gov.br/web/smpda"><p class="text-muted mb-0">Secretaria Municipal de Proteção e Defesa dos Animais.</p></a>
                        </div>
                        <div class="col">
                            <div class="feature bg-dark bg-gradient text-white rounded-3 mb-3"><i class="bi bi-telephone-outbound ms-2"></i></div>
                            <div class="h5">Teste</div>
                            <a class="text-decoration-none" href="https://www.rio.rj.gov.br/web/smpda"><p class="text-muted mb-0">Secretaria Municipal de Proteção e Defesa dos Animais.</p></a>
                        </div>
                    </div>*/}
                </div>
            	</section>
			</main>
		</div>
	);
}