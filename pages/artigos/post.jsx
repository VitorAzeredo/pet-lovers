import Head from "next/head";
import Navbar from "../../shared/components/Navbar";

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
                            {/*<section>
                                <div class="card bg-light">
                                    <div class="card-body">
                                        <form class="mb-4"><textarea class="form-control" rows="3" placeholder="Join the discussion and leave a comment!"></textarea></form>
                                        <div class="d-flex mb-4">
                                            <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                            <div class="ms-3">
                                                <div class="fw-bold">Commenter Name</div>
                                                If you're going to lead a space frontier, it has to be government; it'll never be private enterprise. Because the space frontier is dangerous, and it's expensive, and it has unquantified risks.
                                                <div class="d-flex mt-4">
                                                    <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                                    <div class="ms-3">
                                                        <div class="fw-bold">Commenter Name</div>
                                                        And under those conditions, you cannot establish a capital-market evaluation of that enterprise. You can't get investors.
                                                    </div>
                                                </div>
                                                <div class="d-flex mt-4">
                                                    <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                                    <div class="ms-3">
                                                        <div class="fw-bold">Commenter Name</div>
                                                        When you put money directly to a problem, it makes a good headline.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                            <div class="ms-3">
                                                <div class="fw-bold">Commenter Name</div>
                                                When I look at the universe and all the ways the universe wants to kill us, I find it hard to reconcile that with statements of beneficence.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>*/}
                        </div>
                    </div>
                </div>
            </section>

            </main>
        </div>
	);
}