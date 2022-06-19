import Head from "next/head";
import Link from "next/link";
import Navbar from "../../../shared/components/Navbar";

export default function About() {
	return (
		<div>
			<Head>
				<title>Post03</title>
			</Head>
			<main className="flex-shrink-0">

            <section className="py-4 mb-3 ps-5 pe-5">
                <Navbar />
                <div className="container px-0 my-5">
                    <div className="row gx-5">
                        <div className="col-lg-3 p-0">
                            <div className="d-flex align-items-center mt-lg-5 mb-4">
                                <img className="img-fluid rounded-circle" src="/assets/artigos_destaque/kelly_maiara.png" alt="..." />
                                <div className="ms-3">
                                    <div className="fw-bold">Kelly Maiara Lopes Carreiro</div>
                                    <div className="text-muted mb-2">Médica - Veterinária</div>
                                    <Link href="/artigos">   
                                        <a>
                                            <button
                                                type="button"
                                                className="btn btn-info"
                                            >
                                                Voltar aos artigos?
                                            </button>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 p-0">
                            <article>
                                <header className="mb-4">
                                    <h1 className="fw-bolder mb-1">Gravidez psicológica em pets: como identificar e tratar</h1>
                                    <div className="text-muted fst-italic mb-2">16 de Março, 2022</div>
                                    <Link href="#!"><a className="badge bg-dark text-decoration-none link-light me-1">Médicina</a></Link>
                                    <Link href="#!"><a className="badge bg-dark text-decoration-none link-light" href="#!">Veterinária</a></Link>
                                </header>

                                <figure className="mb-4"><img className="img-fluid rounded mb-5 mb-lg-0" src="/assets/artigos_destaque/gravidez/gata_gestante.webp" alt="..." /></figure>
                                
                                <section className="mb-5">
                                    <p className="fs-5 mb-4">Entenda um pouco mais sobre a Pseudociese (gravidez psicológica) em gatas e cadelas, as alterações comportamentais e quais as implicações envolvidas nesta condição.</p>

                                    <p className="fs-5 mb-4">A Pseudociese ou Pseudogestação é popularmente conhecida como gravidez psicológica nos pets. Essa condição é percebida pelos tutores através de algumas alterações no corpo e no comportamento das cadelas ou gatas, muito semelhantes às ocorridas em uma gestação ou no período pós-parto.</p>

                                    <p className="fs-5 mb-4">Pode-se definir como uma síndrome que acomete as fêmeas não gestantes no período de diestro (algumas semanas após o cio), possuindo interferências físicas e comportamentais devido às alterações dos níveis de hormônios, principalmente progesterona e prolactina.</p>
                                    
                                    <p className="fs-5 mb-4">A ocorrência é muito comum, e não há predisposição entre raças, faixas etárias ou porte. Acredita-se que a grande maioria das cadelas e gatas desenvolva a pseudociese, entretanto nem todas apresentam sinais clínicos.</p>

                                    <h3 className="mb-4">Os principais sinais clínicos apresentados são:</h3>

                                    <lu>
                                        <li className="fs-5 mb-4">Adoção de objetos inanimados (tapetes, ursinhos, cobertas);</li>
                                        <li className="fs-5 mb-4">Adoção de filhotes de outras fêmeas;</li>
                                        <li className="fs-5 mb-4">Comportamentos maternos e de ninho;</li>
                                        <li className="fs-5 mb-4">Prostração (ficar mais quieta, desanimada);</li>
                                        <li className="fs-5 mb-4">Anorexia (parar de comer);</li>
                                        <li className="fs-5 mb-4">Comportamento mais alerta, de proteção e defesa;</li>
                                        <li className="fs-5 mb-4">Lambedura do abdômen;</li>
                                        <li className="fs-5 mb-4">Distensão mamária;</li>
                                        <li className="fs-5 mb-4">Produção e secreção de leite;</li>
                                        <li className="fs-5 mb-4">Empedramento das mamas ou mastite (inflamação mamária) - podendo ficar   avermelhadas e mais quentes;</li>
                                        <li className="fs-5 mb-4">Ganho de peso;</li>
                                    </lu>
                                    
                                    <figure className="mb-4"><img className="img-fluid rounded mb-5 mb-lg-0" src="/assets/artigos_destaque/gravidez/gata_gestante_2.jpg" alt="..." /></figure>
                                    
                                    <h3 className="mb-4">Diagnóstico</h3>

                                    <p className="fs-5 mb-4">O diagnóstico é realizado através do histórico de saúde do pet, além das alterações comportamentais e fisiológicas apresentadas e do período do ciclo estral que o pet se encontra. O médico-veterinário deverá examinar o pet e, caso necessário, solicitar exames complementares para verificar se não está gestante ou apresenta outro diagnóstico, pois algumas doenças podem cursar com sintomas semelhantes aos descritos anteriormente.</p>

                                    <h3 className="mb-4">Orientações e tratamento</h3>

                                    <p className="fs-5 mb-4">Ao perceber qualquer alteração física ou comportamental em seu pet, é extremamente importante procurar pelo médico-veterinário de confiança que acompanha a saúde da sua cadela ou gata. É importante lembrar que todo e qualquer tratamento deve ser indicado pelo médico-veterinário. Em paralelo a isso, algumas ações podem começar a ser tomadas já no início do aparecimento das alterações comportamentais.</p>

                                    <p className="fs-5 mb-4">Ao perceber que o pet está demonstrando comportamentos maternos exacerbados e adotando objetos ou filhotes de outras fêmeas, é importante retirá-los dela de imediato, para que essa prática não seja intensificada.</p>

                                    <p className="fs-5 mb-4">Se o pet começar a lamber com muita frequência as mamas, a utilização de um colar elizabetano é muito importante para que ela não venha estimular ainda mais a produção de leite.</p>

                                    <p className="fs-5 mb-4">Passear e praticar atividades físicas com o pet também são ótimas alternativas para distraí-los e contribuir com a melhora dos comportamentos maternos.</p>
 
                                    <p className="fs-5 mb-4">Jamais medique seu pet sem orientação veterinária. Após a consulta e fechado o diagnóstico, se houver necessidade de oferecer medicamentos, o médico-veterinário receitará todo o tratamento de acordo com a necessidade individual do pet, passando as demais orientações de cuidados.</p>

                                    <p className="fs-5 mb-4">Essa alteração pode ser recorrente e aparecer após todo período de cio. Além de ser incômodo e desagradável ao pet, a estimulação frequente das glândulas mamárias pode predispor ao desenvolvimento de tumores de mama nas fêmeas.</p>
                                    
                                    <p className="fs-5 mb-4">Se não houver a intenção de reprodução para sua cadela ou gata, uma indicação muito importante tanto para prevenção e até mesmo para tratamento da pseudociese é a castração.  Este procedimento previne não só esta condição, como diversas outras implicações que podem acometer os pets.</p>

                                </section>
                            </article>
                                <Link href="/artigos">
                                    <a>
                                        <button
                                            type="button"
                                            className="btn btn-info"
                                        >
                                            Voltar aos artigos?
                                        </button>
                                    </a>
                                </Link>
                        </div>
                    </div>
                </div>
            </section>

            </main>
        </div>
	);
}