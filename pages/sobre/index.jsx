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
				path: "/assets/dog-love.json",
			});

			return () => animation.destroy();
		}
	}, [lottie]);
	return (
		<div>
			<Head>
				<title>Sobre</title>
			</Head>

			<main class="flex-shrink-0">
				<header>
					<div className="container-fluid pt-4 ps-5 pe-5 pb-4">
						<Navbar />
						<div class="row">
							<div class="col-6 mb-3">
								<h1 class="fw-bolder text-center mb-2 mt-5">Sobre nós</h1>
							</div>
						</div>
						<div class="row">
							<div class="col-12 col-lg-6">
								<div class="my-5">

									<p class="lead fw-normal text-muted mb-4">
										A Pet-Lovers existe para trazer amor e alegria para pets e pessoas, através da conexão entre eles...
									</p>
									<p class="lead fw-normal text-muted mb-4">
										Acreditamos que esse vínculo e muito forte e precioso, por isso tentamos recriar uma experiencia única para os usuários da plataforma.
									</p>
									<p class="lead fw-normal text-muted mb-4">
										Cada adoção que é feita e uma nova história que começa, e não existe limites para viver esse momento, pois tudo e possível se você acreditar!
									</p>
									<p class="lead fw-normal text-muted mb-4">
										Nossa missão é resgatar esse sonho de um futuro melhor conectando e criando laços tão fortes e importantes quanto qualquer outro que já existiu... Pois esse não é o fim e sim o começo, muito ainda pode ser vivenciado e apreciado quando damos importância as coisas certas.
									</p>
									<p class="lead fw-normal text-muted mb-4">
										Se de essa chance de viver novas experiencias com um novo amiguinho que vai mudar a sua vida e suas perspectivas.
									</p>
									<div class="row">
										<div class="col-12 text-center mt-1">
											<a href="#scroll-target">
												<button
													type="button"
													className="btn btn-info"
												>
													Nossa Historia
												</button>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-6 d-none d-lg-block">
								<div class="my-1">
									<div
										style={{ maxWidth: 700 }}
										className="w-75 ms-auto me-auto"
										ref={ref}
									></div>
								</div>
							</div>
						</div>
					</div>
				</header>

				<section class="py-5 bg-light" id="scroll-target">
					<div class="container px-5 my-5">
						<div class="row gx-5 align-items-center">
							<div class="col-lg-6"><img class="img-fluid rounded mb-5 mb-lg-0" src="/assets/historia1.jpg" alt="..." /></div>
							<div class="col-lg-6">
								<h2 class="fw-bolder">Uma Historia de Sucesso</h2>
								<p class="lead fw-normal text-muted mb-0">Nossa missão é resgatar esse sonho de um futuro melhor conectando e criando laços tão fortes e importantes quanto qualquer outro que já existiu... Pois esse não é o fim e sim o começo, muito ainda pode ser vivenciado e apreciado quando damos importância as coisas certas.</p>
							</div>
						</div>
					</div>
				</section>

				<section class="py-5">
					<div class="container px-5 my-5">
						<div class="row gx-5 align-items-center">
							<div class="col-lg-6 order-first order-lg-last"><img class="img-fluid rounded mb-5 mb-lg-0" src="/assets/historia2.jpg" alt="..." /></div>
							<div class="col-lg-6">
								<h2 class="fw-bolder">Nossa Trajetoria</h2>
								<p class="lead fw-normal text-muted mb-0">Acreditamos que esse vínculo e muito forte e precioso, por isso tentamos recriar uma experiencia única para os usuários da plataforma, cada adoção que é feita e uma nova história que começa, e não existe limites para viver esse momento, pois tudo e possível se você acreditar!</p>
							</div>
						</div>
					</div>
				</section>

				<section class="py-5 bg-light">
					<div class="container px-5 my-5">
						<div class="text-center">
							<h2 class="fw-bolder">Nosso Time</h2>
							<p class="lead fw-normal text-muted mb-5">Sua alegria e nosso sucesso...</p>
						</div>
						<div class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
							<div class="col mb-5 mb-5 mb-xl-0">
								<div class="text-center">
									<img class="img-fluid rounded-circle mb-4 px-4" src="/assets/vitor.jpeg" alt="..." />
									<h5 class="fw-bolder">Vitor Azeredo</h5>
									<div class="fst-italic text-muted">Fundador e Dev</div>
								</div>
							</div>
							<div class="col mb-5 mb-5 mb-xl-0">
								<div class="text-center">
									<img class="img-fluid rounded-circle mb-4 px-4" src="/assets/eric.jpeg" alt="..." />
									<h5 class="fw-bolder">Erick Motta</h5>
									<div class="fst-italic text-muted">Fundador e Dev</div>
								</div>
							</div>
							<div class="col mb-5 mb-5 mb-sm-0">
								<div class="text-center">
									<img class="img-fluid rounded-circle mb-4 px-4" src="/assets/renan.jpeg" alt="..." />
									<h5 class="fw-bolder">Renan Andrade</h5>
									<div class="fst-italic text-muted">Fundador e Dev</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>

	);
}
