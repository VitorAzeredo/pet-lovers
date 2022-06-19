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
			<main className="flex-shrink-0">
				<section className="py-4 ps-5 pe-5">
				<Navbar />
                <div className="container">
                    <div className="rounded-2 py-2 px-2 px-md-2 mb-2">
                        <div className="text-center mb-3 mt-2">
                            <div className="rounded-3 mb-3"><i className="bi bi-envelope-heart-fill-5x"></i></div>
                            <h1 className="fw-bolder">Vamos Conversar!</h1>
                            <p className="lead fw-normal text-muted mb-0">Sua opinião e muito importante pra nós, sugestões ou criticas.</p>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-6 col-xl-6">
                                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                        <label type="name">Seu Nome</label>
                                        <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                        <label type="email">Um Email valido</label>
                                        <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                        <label type="phone">Um numero de contato</label>
                                        <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <textarea className="form-control lh-1" id="message" type="text" placeholder="Deixe aqui a sua Mensagem" data-sb-validations="required"></textarea>
                                        <label type="message">Deixe aqui a sua Mensagem</label>
                                        <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                    </div>
                                    <div className="d-none" id="submitSuccessMessage">
                                        <div className="text-center mb-3">
                                            <div className="fw-bolder">Seu formulario foi enviado com sucesso!</div>
                                            <br />
                                        </div>
                                    </div>
                                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Houve uma falha no envio da sua mensagem!</div></div>
                                    <div className="d-grid"><button className="btn btn-info btn-lg" id="submitButton" type="submit">Enviar</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 rounded mx-auto d-none d-lg-block">
						<div className="my-1">
							<div
								style={{ maxWidth: 900 }}
								className="w-75 ms-auto me-auto"
								ref={ref}
							></div>
						</div>
					</div>
                </div>
            	</section>
			</main>
		</div>
	);
}