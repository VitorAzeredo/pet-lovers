import { useState, useRef, useEffect } from "react";
import Base from "../../shared/layout/Base";

About.getLayout = function getLayout(page) {
	return <Base pageTitle="Sobre">{page}</Base>;
};

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
		<>
			<div className="row">
				<div className="col-6 mb-3">
					<h1 className="fw-bolder text-center mb-2 mt-5">
						Sobre nós
					</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-lg-6">
					<div className="my-5">
						<p className="lead fw-normal text-muted mb-4">
							A Pet-Lovers existe para trazer amor e alegria para
							pets e pessoas, através da conexão entre eles...
						</p>
						<p className="lead fw-normal text-muted mb-4">
							Acreditamos que esse vínculo e muito forte e
							precioso, por isso tentamos recriar uma experiencia
							única para os usuários da plataforma.
						</p>
						<p className="lead fw-normal text-muted mb-4">
							Cada adoção que é feita e uma nova história que
							começa, e não existe limites para viver esse
							momento, pois tudo e possível se você acreditar!
						</p>
						<p className="lead fw-normal text-muted mb-4">
							Nossa missão é resgatar esse sonho de um futuro
							melhor conectando e criando laços tão fortes e
							importantes quanto qualquer outro que já existiu...
							Pois esse não é o fim e sim o começo, muito ainda
							pode ser vivenciado e apreciado quando damos
							importância as coisas certas.
						</p>
						<p className="lead fw-normal text-muted mb-4">
							Se de essa chance de viver novas experiencias com um
							novo amiguinho que vai mudar a sua vida e suas
							perspectivas.
						</p>
						<div className="row">
							<div className="col-12 text-center mt-1">
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
				<div className="col-6 d-none d-lg-block">
					<div className="my-1">
						<div
							style={{ maxWidth: 700 }}
							classNameName="w-75 ms-auto me-auto"
							ref={ref}
						></div>
					</div>
				</div>
			</div>

			<section className="py-5 bg-light" id="scroll-target">
				<div className="container px-5 my-5">
					<div className="row gx-5 align-items-center">
						<div className="col-lg-6">
							<img
								className="img-fluid rounded mb-5 mb-lg-0"
								src="/assets/historia1.jpg"
								alt="..."
							/>
						</div>
						<div className="col-lg-6">
							<h2 className="fw-bolder">
								Uma Historia de Sucesso
							</h2>
							<p className="lead fw-normal text-muted mb-0">
								Nossa missão é resgatar esse sonho de um futuro
								melhor conectando e criando laços tão fortes e
								importantes quanto qualquer outro que já
								existiu... Pois esse não é o fim e sim o começo,
								muito ainda pode ser vivenciado e apreciado
								quando damos importância as coisas certas.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-5">
				<div className="container px-5 my-5">
					<div className="row gx-5 align-items-center">
						<div className="col-lg-6 order-first order-lg-last">
							<img
								className="img-fluid rounded mb-5 mb-lg-0"
								src="/assets/historia2.jpg"
								alt="..."
							/>
						</div>
						<div className="col-lg-6">
							<h2 className="fw-bolder">Nossa Trajetoria</h2>
							<p className="lead fw-normal text-muted mb-0">
								Acreditamos que esse vínculo e muito forte e
								precioso, por isso tentamos recriar uma
								experiencia única para os usuários da
								plataforma, cada adoção que é feita e uma nova
								história que começa, e não existe limites para
								viver esse momento, pois tudo e possível se você
								acreditar!
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-5 bg-light">
				<div className="container px-5 my-5">
					<div className="text-center">
						<h2 className="fw-bolder">Nosso Time</h2>
						<p className="lead fw-normal text-muted mb-5">
							Sua alegria e nosso sucesso...
						</p>
					</div>
					<div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
						<div className="col mb-5 mb-5 mb-xl-0">
							<div className="text-center">
								<img
									className="img-fluid rounded-circle mb-4 px-4"
									src="/assets/vitor.jpeg"
									alt="..."
								/>
								<h5 className="fw-bolder">Vitor Azeredo</h5>
								<div className="fst-italic text-muted">
									Fundador e Dev
								</div>
							</div>
						</div>
						<div className="col mb-5 mb-5 mb-xl-0">
							<div className="text-center">
								<img
									className="img-fluid rounded-circle mb-4 px-4"
									src="/assets/eric.jpeg"
									alt="..."
								/>
								<h5 className="fw-bolder">Erick Motta</h5>
								<div className="fst-italic text-muted">
									Fundador e Dev
								</div>
							</div>
						</div>
						<div className="col mb-5 mb-5 mb-sm-0">
							<div className="text-center">
								<img
									className="img-fluid rounded-circle mb-4 px-4"
									src="/assets/renan.jpeg"
									alt="..."
								/>
								<h5 className="fw-bolder">Renan Andrade</h5>
								<div className="fst-italic text-muted">
									Fundador e Dev
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
