import Head from "next/head";
import Navbar from "../../../shared/components/Navbar";

export default function About() {
	return (
		<div>
			<Head>
				<title>Post</title>
			</Head>
			<main class="flex-shrink-0">

            <section class="py-4 mb-3 ps-5 pe-5">
                <Navbar />
                <div class="container px-0 my-5">
                    <div class="row gx-5">
                        <div class="col-lg-3 p-0">
                            <div class="d-flex align-items-center mt-lg-5 mb-4">
                                <img class="img-fluid rounded-circle" src="/assets/artigos_destaque/kelly_maiara.png" alt="..." />
                                <div class="ms-3">
                                    <div class="fw-bold">Kelly Maiara Lopes Carreiro</div>
                                    <div class="text-muted mb-2">Médica - Veterinária</div>
                                    <a href="/artigos">
							    	    <button
							    	    	type="button"
							    	    	className="btn btn-info"
							    	    >
							    	    	Voltar aos artigos?
							    	    </button>
							        </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9 p-0">
                            <article>
                                <header class="mb-4">
                                    <h1 class="fw-bolder mb-1">Cuidados com os pets na Páscoa</h1>
                                    <div class="text-muted fst-italic mb-2">18 Abril, 2022</div>
                                    <a class="badge bg-dark text-decoration-none link-light me-1" href="#!">Médicina</a>
                                    <a class="badge bg-dark text-decoration-none link-light" href="#!">Veterinária</a>
                                </header>
                                <figure class="mb-4"><img class="img-fluid rounded mb-5 mb-lg-0" src="/assets/artigos_destaque/pascoa.png" alt="..." /></figure>
                                <section class="mb-5">
                                    <p class="fs-5 mb-4">A Páscoa é uma data muito comemorada pelos brasileiros, e o que não pode faltar é o ovo de chocolate para confraternizar com os familiares e amigos. Mas o que poucos sabem é que os nossos pets não podem comer chocolates, nem mesmo em pequenas quantidades.</p>

                                    <p class="fs-5 mb-4">Acontece que os chocolates possuem ingredientes que são tóxicos ou que podem fazer mal aos pets se ingeridos. Este é o caso da Teobromina, uma substância presente no cacau, encontrada em maior quantidade em chocolates mais escuros do tipo amargo ou culinários. A Teobromina pode intoxicar os pets, pois eles não possuem capacidade para metabolizá-la.</p>

                                    <p class="fs-5 mb-4">Os sintomas podem surgir de 4 a 6 horas após o consumo do chocolate, e a gravidade pode variar de acordo com a quantidade ingerida, o tipo do chocolate, o peso do pet e o seu estado de saúde.</p>
                                    
                                    <p class="fs-5 mb-4">Chocolates brancos, mesmo contendo quantidades menores de cacau, também não devem ser consumidos pelos pets, pois além de possuírem muito açúcar, também contém grandes quantidades de gordura, o que é prejudicial à saúde dos animais, podendo provocar hiperglicemia, colesterol, alterações no pâncreas e até predisposição a Diabetes.</p>

                                    <figure class="mb-4"><img class="img-fluid rounded mb-5 mb-lg-0" src="/assets/artigos_destaque/natural.png" alt="..." /></figure>
                                    
                                    <p class="fs-5 mb-4">Deve-se ter cuidado também com as embalagens dos ovos, ou até brinquedos pequenos que venham dentro deles. Os pets podem acabar ingerindo esses objetos em uma brincadeira ou momento de curiosidade, correndo o risco de ficarem obstruídos por esses corpos estranhos.</p>

                                    <p class="fs-5 mb-4">Se perceber que o pet veio a ingerir chocolates acidentalmente, leve-o ao médico-veterinário de sua confiança para que a tratativa seja tomada o mais rápido possível.</p>

                                    <p class="fs-5 mb-4">Mas a boa notícia é que existem algumas formas de incluirmos nossos amigos peludos nas festividades de Páscoa. Confira algumas dicas abaixo:</p>

                                    <p class="fs-5 mb-4">Petiscos naturais: se quiser oferecer um petisco comemorativo a seu pet, considere agradá-lo com pedaços de cenoura. Esse é um alimento saudável que os pets adoram.</p>

                                    <p class="fs-5 mb-4">Brinquedos: outra opção também é presenteá-los com ovos ou coelhinhos de pelúcia ou materiais emborrachados para que possam brincar e entrar no clima das festividades.</p>
 
                                    <p class="fs-5 mb-4">Brincadeiras: vale fazer caça aos ovos com petiscos dentro de bolinhas em cestos ou escondidos no quintal. Essa é uma ótima dica de enriquecimento ambiental para distrair e divertir o seu pet.</p>

                                    <p class="fs-5 mb-4">Com todos esses cuidados, você e seu pet poderão desfrutar de uma Páscoa feliz e tranquila em família, para que as datas comemorativas sejam sempre lembradas por boas experiências e diversão.</p>

                                </section>
                            </article>
                                <a href="/artigos">
							    	<button
							    		type="button"
							    		className="btn btn-info"
							    	>
							    		Voltar aos artigos?
							    	</button>
							    </a>
                        </div>
                    </div>
                </div>
            </section>

            </main>
        </div>
	);
}