import Head from "next/head";
import Navbar from "../../../shared/components/Navbar";

export default function About() {
	return (
		<div>
			<Head>
				<title>Post04</title>
			</Head>
			<main class="flex-shrink-0">

            <section class="py-4 mb-3 ps-5 pe-5">
                <Navbar />
                <div class="container px-0 my-5">
                    <div class="row gx-5">
                        <div class="col-lg-3 p-0">
                            <div class="d-flex align-items-center mt-lg-5 mb-4">
                                <img class="img-fluid rounded-circle" src="/assets/artigos_destaque/ana_leticia.png" alt="..." />
                                <div class="ms-3">
                                    <div class="fw-bold">Ana Letícia Poletto</div>
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
                                    <h1 class="fw-bolder mb-1">Cães de trabalho: conheça as 5 principais profissões desses animais.</h1>
                                    <div class="text-muted fst-italic mb-2">17 de Maio, 2022</div>
                                    <a class="badge bg-dark text-decoration-none link-light me-1" href="">Médicina</a>
                                    <a class="badge bg-dark text-decoration-none link-light" href="">Veterinária</a>
                                </header>
                                <figure class="mb-4"><img class="img-fluid rounded mb-5 mb-lg-0" src="/assets/artigos_destaque/trabalho/resgate.jpg" alt="..." /></figure>
                                <section class="mb-5">
                                    <p class="fs-5 mb-4">Com a domesticação dos animais, percebe-se que os pets ganham cada vez mais espaço dentro das casas, e não é de se estranhar que hoje eles possam até ser tratados como filhos por seus tutores. Sabe-se que os cães existem há mais de 100 mil anos, e com a seleção artificial e diversos cruzamentos entre eles, foram surgindo raças com diferentes características, portes, comportamentos e, principalmente, personalidades.</p>

                                    <p class="fs-5 mb-4">Antigamente, os cães tinham uma grande importância em combates, e até hoje recebem esse prestígio auxiliando na segurança pública e em outros trabalhos que necessitam de ações específicas. Dentro desse processo de cruzamento de indivíduos, algumas características sensoriais permaneceram (como olfato, paladar, audição, tato e visão). Essas características podem ser aproveitadas em diversas tarefas. O comportamento desses animais se baseia nas experiências vividas por eles, a chamada flexibilidade mental, o que também os leva a confiar e desconfiar dos seres que os rodeiam.</p>

                                    <h3 class="fw-bolder mb-4">A história dos cães de trabalho</h3>

                                    <p class="fs-5 mb-4">Quando esses animais começaram a fazer parte da comunidade, passaram a ser treinados para usar seu potencial de forma a auxiliar em algumas atividades. Nos países do hemisfério norte, o povo começou a domesticar cães da raça Husky Siberiano como cães de trabalho para auxiliar o homem. Dentre todas as características, há quem diga que os cães são sensitivos e conseguem perceber quando algo não está legal. Além disso, aproveitando a capacidade de serem extremamente dóceis, também são candidatos em potencial para reabilitação de pacientes. Animais treinados e usados para esse fim são incríveis no tratamento em hospitais, terapias ocupacionais e locais de moradia de idosos.</p>
                                    
                                    <p class="fs-5 mb-4">Certas raças são selecionadas exclusivamente para alguns fins. No Brasil, por exemplo, usa-se o Labrador para auxílio de deficientes visuais. O animal passa por um treinamento longo e intensivo para aprender a acompanhar e guiar seu tutor sem que colida em obstáculos ou entre em situações de perigo. Para as pessoas que possuem alguma dificuldade motora, cães podem ser treinados para buscar objetos, desligar aparelhos e auxiliar em episódios de quedas, devido a sua afinidade em compreender as ações.</p>
                                    
                                    <p class="fs-5 mb-4">Após a Segunda Guerra Mundial, um veterinário que realizou experimentos comparando o sistema respiratório humano ao canino definiu: “o cão vê através do olfato, enquanto o homem o realiza através da visão.” A partir disso, a capacidade olfativa dos cães começou a ser treinada para auxiliar o trabalho da polícia na detecção de drogas ilícitas e entorpecentes, substâncias ilegais e substâncias orgânicas (animais, vegetais). Em conjunto com outras capacidades, também podemos citar as habilidades de cavar e vasculhar, muito importantes nas ações de busca e salvamentos dos bombeiros.</p>

                                    <p class="fs-5 mb-4">Até na zona rural os cães possuem grande importância, sendo funcionários efetivos. Atuando no manejo e deslocamento dos animais com pequenos gestos e sons, o cão consegue realizar com muita agilidade tarefas que levariam horas para um ser humano.</p>

                                    <h3 class="fw-bolder mb-4">Como um cão aprende a desempenhar essas funções?</h3>
                                    <p class="fs-5 mb-4">Assim como para nós é necessário muito treinamento para iniciar uma atividade nova ou aperfeiçoar uma habilidade. Os cães, mesmo sendo muito capazes, também precisam de treino. Você sabia que demora em média 2 anos para treinar um cão destinado à identificação de entorpecentes? Os cães são treinados desde as 4 semanas de vida, onde passam por um processo rigoroso de socialização, ambientação e testes para que estejam totalmente aptos a reconhecer o ambiente em que estão inseridos e os comandos do tutor. Todo trabalho bem feito necessita de uma recompensa, e é desse gatilho que os cães precisam. O reforço positivo na maioria das vezes está ligado a um brinquedo ou algo que o cão associe a uma coisa boa, como petiscos, por exemplo. Mas assim como temos o lado bom, existe o ruim: o reforço negativo tem como base retirar algo que o cão gosta e reforçar que, caso o comando não seja realizado da forma correta, o “gatilho bom” não existirá até o completo movimento.</p>

                                    <p class="fs-5 mb-4">Precisamos entender que o conceito cão de trabalho é realmente destinado a cães que possuem uma rotina de trabalho. Estes possuem horário para levantar, treinar, se alimentar e para brincar. Os cães aprendem por repetição, pois é dessa forma que ocorre a memorização do comando ou atividade a ser desempenhada. Todo adestramento, então, necessita de muita paciência. As rotinas de exercícios precisam integrar bem-estar, efetividade e foco, pois assim como nós, os animais também ficam entediados e frustrados. É o caso de cães que vivem muito tempo em canis, podendo apresentar estresse excessivo e consequentemente comportamentos inadequados.</p>

                                    <h3 class="fw-bolder mb-4">Para contextualizar, precisamos entender qual é o papel de cada cão na sua atividade. Por exemplo:</h3>

                                    <p class="fs-5 mb-4">É importante pesar o filhote durante a primeira consulta e acompanhar com o tempo para saber se há perda ou ganho de peso. Perguntar ao médico-veterinário qual o peso ideal do filhote é uma ótima opção para ter mais controle sobre sua saúde, evitando que desenvolva doenças como obesidade ou desnutrição.</p>

                                    <h4 class="fw-bolder mb-4 mt-5">1 &middot; Cães de faro</h4>
                                    <p class="fs-5 mb-4">Pela denominação do objetivo de seu trabalho, já podemos saber que esses animais precisam ter um faro muito aguçado, pois são utilizados para encontrar pessoas soterradas, explosivos e todo tipo de material, inclusive entorpecentes. Eles precisam de muito treino e contato com esses odores, para só então seguir com a busca. Algumas raças são muito usadas nesses trabalhos, como o Golden Retriever, o Labrador Retriever e o Pastor Alemão e suas variações, por demonstrarem características específicas, como forte temperamento e faro aguçado. O cão de faro utilizado para encontrar drogas, além de todas as características gerais, precisa ser brincalhão, ágil e flexível para poder escalar e entrar em lugares de difícil acesso.</p>

                                    <h4 class="fw-bolder mb-4">3 &middot;  Cães de Resgate e Salvamento</h4>
                                    <p class="fs-5 mb-4">A função de busca e salvamento surgiu para encontrar e identificar pessoas perdidas ou fugitivos. Antigamente, durante as guerras, os cães eram treinados para encontrar os feridos e prover suporte com kits acoplados a eles até que alguém pudesse chegar com apoio. Pouco tempo depois, os cães eram acoplados a trenós e realizavam os resgates de pilotos que se perdiam em meio a neve. Essa tarefa é feita até hoje.</p>

                                    <p class="fs-5 mb-4">Os cães utilizados pelos bombeiros seguem uma linha muito forte em relação ao olfato e audição. São designados a encontrar seres vivos ou não, em meio a matas, áreas soterradas, lama, água etc. As raças escolhidas para essa função normalmente são o Labrador Retriever e o Bloodhound.</p>

                                    <h2 class="fw-bolder mb-4 mt-5">4 &middot;  Cães de terapia</h2>
                                    <p class="fs-5 mb-4">Hoje em dia, sabe-se que os cães possuem um imenso potencial terapêutico, de maneira que apenas a presença deles já alivia o estresse e nos deixa mais calmos. Alguns cães são treinados para oferecer apoio emocional a pessoas doentes, crianças com alguma disfunção ou autismo e idosos, e até entram no plano terapêutico de alguns pacientes, os visitando nos hospitais. Para esta função pode ser utilizado qualquer cão que tenha o temperamento ideal, boa socialização e o correto treinamento.</p>

                                    <h2 class="fw-bolder mb-4 mt-5">5 &middot;  Cães de serviço</h2>
                                    <p class="fs-5 mb-4">Habitualmente, os cães de serviço são utilizados para orientar ou ajudar uma pessoa portadora de deficiência física ou que possua necessidades específicas. Esses cães se tornam parceiros da pessoa que o “emprega” e são essencialmente treinados para suprir a deficiência de seu tutor. A base do treinamento é identificar o problema e ajudar a superá-lo. Usando como exemplo um tutor que possua deficiência visual, o cão-guia pode auxiliá-lo a se locomover, evitando que se machuque ou entre em situações de perigo. Existem também cães de assistência a pessoas com crises convulsivas, que são treinados para identificar o início de uma crise, proteger e ajudar a evitar que se machuquem. Algumas raças comumente usadas são o Labrador Retriever e o Golden Retriever.</p>

                                    <p class="fs-5 mb-4">Normalmente, os cães de serviço são identificados com um colete que mostra que eles estão em horário de trabalho. É incrível pensar que esses animais têm capacidades inimagináveis e podem fazer tanto pelo ser humano. Sempre que avistar um cão, lembre-se de perguntar se ele está em serviço, pois tudo faz parte do treinamento, e uma atitude inofensiva pode desencadear algo desagradável. Por mais carismáticos que eles sejam, cães em serviço não podem ser acariciados ou alimentados, pois estão trabalhando e são muito felizes desempenhando sua função.</p>
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