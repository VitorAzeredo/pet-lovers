import Head from "next/head";
import Navbar from "../../../shared/components/Navbar";

export default function About() {
	return (
		<div>
			<Head>
				<title>Post01</title>
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
                                    <h1 class="fw-bolder mb-1">O que perguntar ao veterinário na 1ª consulta do seu pet.</h1>
                                    <div class="text-muted fst-italic mb-2">12 Novembro, 2021</div>
                                    <a class="badge bg-dark text-decoration-none link-light me-1" href="#!">Médicina</a>
                                    <a class="badge bg-dark text-decoration-none link-light" href="#!">Veterinária</a>
                                </header>
                                <figure class="mb-4"><img class="img-fluid rounded mb-5 mb-lg-0" src="/assets/artigos_destaque/veterinario.webp" alt="..." /></figure>
                                <section class="mb-5">
                                    <p class="fs-5 mb-4">Quando recebemos um novo filhote em casa, nossas rotinas mudam bastante. Precisamos adaptar o ambiente para que seja um lugar favorável ao crescimento e desenvolvimento saudável desse novo integrante da família. Junto aos cuidados, é de extrema importância que o filhote passe por uma consulta veterinária, que será de grande valia para que o tutor entenda melhor o animalzinho e possa oferecer todos os cuidados necessários para essa fase.</p>

                                    <p class="fs-5 mb-4">Ao levar o filhote para a clínica veterinária, tenha em mãos algumas informações iniciais que ajudarão o médico-veterinário a ter um histórico do paciente para melhor avaliá-lo. É importante, por exemplo, que o tutor saiba a procedência do animal, ou seja, se esse filhote foi adotado de uma ONG ou comprado em algum canil/gatil, se já conviveu com outros animais, há quanto tempo está com o tutor, se existe algum documento relacionado a ele, se há conhecimento dos pais, se houve cruzamento entre parentes ou raças, se esse animal tomou algum vermífugo ou vacina, se mamou leite materno ou algum sucedâneo (substituto do leite) e se o filhote teve alguma alteração de comportamento ou doença.</p>

                                    <p class="fs-5 mb-4">Fornecer essas informações iniciais sobre o filhote ajudarão o médico-veterinário a entender melhor seus primeiros dias de vida e ter conhecimento de alguns fatores que podem interferir na boa saúde do filhote.</p>
                                    
                                    <h2 class="fw-bolder mb-4 mt-5">1 &middot; VERMIFUGAÇÃO E VACINAÇÃO</h2>
                                    <p class="fs-5 mb-4">Nessa primeira consulta é imprescindível que o tutor tire todas as dúvidas com o médico-veterinário sobre o protocolo de vacinação e vermifugação do pet enquanto filhote e ao longo da vida. Pergunte qual vermífugo pode ser administrado e de quanto em quanto tempo, quais vacinas o pet deverá tomar nesse primeiro momento e quais serão anuais.</p>
                                    
                                    <h2 class="fw-bolder mb-4 mt-5">2 &middot; EXAME DE SANGUE</h2>
                                    <p class="fs-5 mb-4">Pergunte ao médico-veterinário se há necessidade de um exame de sangue para avaliar a saúde do filhote. Alguns pets nessa fase apresentam anemia ou doenças infecciosas que podem aparecer na avaliação do sangue, necessitando assim de uma atenção maior e até de um tratamento. Para os tutores de filhotes de gatos, é de extrema importância tirar todas as dúvidas sobre as duas doenças relacionadas à imunidade dos gatinhos que podem ser diagnosticadas nessa fase da vida:  a FIV e FELV. Aproveite esse exame de sangue para realizar o teste rápido.</p>

                                    <h2 class="fw-bolder mb-4 mt-5">3 &middot; CONTROLE DE ECTOPARASITAS</h2>
                                    <p class="fs-5 mb-4">Nessa primeira consulta, é importante questionar o médico-veterinário sobre qual remédio para controlar pulgas e carrapatos o animal deve usar. Dependendo da idade, muitos filhotes ainda não podem usar remédios por via oral ou tópico. Questione qual é o remédio mais adequado ao tempo de vida e de quanto em quanto tempo ele pode ser administrado. Busque também dicas sobre como evitar pulgas e carrapatos no animal e como higienizar o ambiente que ele irá habitar.</p>

                                    <h2 class="fw-bolder mb-4 mt-5">4 &middot; ALIMENTAÇÃO</h2>
                                    <p class="fs-5 mb-4">Uma das perguntas mais importantes que o tutor deve fazer ao médico-veterinário é sobre a alimentação, para saber de acordo com a idade do filhote se ele já está apto a consumir ração ou se deve continuar no leite materno/sucedâneo. Pergunte qual é o alimento ideal para essa fase da vida. Se for um alimento convencional industrializado (ração seca), questione qual a melhor categoria do alimento (premium, premium especial ou super premium), qual a quantidade que deve ser oferecida, quantas vezes ao dia o filhote deve se alimentar, se pode misturar com alimentação úmida (sachês/patês) e se a alimentação úmida pode ser oferecida todos os dias. Caso o tutor tenha interesse em oferecer dieta caseira, é interessante perguntar se seria adequada à fase da vida e se deve ser suplementada. Uma dica é procurar um médico-veterinário nutricionista para realizar essa primeira consulta nutricional mais detalhada.</p>

                                    <h2 class="fw-bolder mb-4 mt-5">5 &middot; COMPORTAMENTO</h2>
                                    <p class="fs-5 mb-4">Dúvidas sobre o comportamento da raça e do filhote são sempre bem-vindas. Questione sobre o que deve se esperar do comportamento ativo do filhote, os cuidados com cada raça e a individualidade de cada espécie, por exemplo o comportamento dos cães de morder chinelos e dos gatos de arranhar sofás.</p>

                                    <h2 class="fw-bolder mb-4 mt-5">6 &middot; PESO</h2>
                                    <p class="fs-5 mb-4">É importante pesar o filhote durante a primeira consulta e acompanhar com o tempo para saber se há perda ou ganho de peso. Perguntar ao médico-veterinário qual o peso ideal do filhote é uma ótima opção para ter mais controle sobre sua saúde, evitando que desenvolva doenças como obesidade ou desnutrição.</p>

                                    <h2 class="fw-bolder mb-4 mt-5">7 &middot; CASTRAÇÃO</h2>
                                    <p class="fs-5 mb-4">Dúvidas sobre a castração são as mais recorrentes nas clínicas veterinárias. É de extrema importância na primeira consulta questionar se e quando o filhote deve ser castrado, pois assim o tutor pode se preparar financeiramente e planejar a data ideal da castração, caso opte por essa opção.</p>

                                    <h2 class="fw-bolder mb-4 mt-5">8 &middot;  MICROCHIPAGEM</h2>
                                    <p class="fs-5 mb-4">Nessa consulta inicial também pode ser realizada a microchipagem dos filhotes, que funciona como o RG do animalzinho, além de ser um método bastante eficiente para localizar esse pet caso ele se perca ou fuja.</p>

                                    <h2 class="fw-bolder mb-4 mt-5">9 &middot;  ROTINA DE BANHOS</h2>
                                    <p class="fs-5 mb-4">Durante a consulta, o tutor pode aproveitar e questionar como e quando devem ocorrer os banhos dos filhotes. Importante ressaltar que, por ainda estar sob protocolo vacinal, a ida ao petshop durante esse período pode acarretar danos a saúde, como o desenvolvimento de doenças infectocontagiosas. Perguntar sobre os banhos em casa também é uma boa opção, lembrando dos cuidados com a temperatura da água e secagem.</p>

                                    <h2 class="fw-bolder mb-4 mt-5">10 &middot;  RETORNO AO VETERINÁRIO</h2>
                                    <p class="fs-5 mb-4">No final dessa consulta, o tutor pode perguntar a frequência necessária de retorno ao médico-veterinário. O check-up de um animal saudável, por exemplo, pode ser realizado a cada 6 meses. Já uma avaliação durante um tratamento deve ser marcada conforme a conduta do profissional e a necessidade do paciente.

Reunir junto ao médico-veterinário todas as informações sobre essa fase da vida e os cuidados com o novo integrante fará com que o tutor se sinta mais seguro e tenha mais confiança, além de proporcionar maior bem-estar e saúde ao pet.</p>
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