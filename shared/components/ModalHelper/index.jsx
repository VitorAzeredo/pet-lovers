import Link from "next/link";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function ModalHelper(){
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
	const handleShowModal = () => setShowModal(true);
    return(
        <>  
            <div className="row p-0 position-absolute" style={{bottom:"1em"}}>
                <div className="col-12 p-0">
                    <Link href="#" passHref>
                        <button onClick={handleShowModal} type="button" className="btn btn-info rounded" >
                                Precisa de Ajuda <i className="bi bi-question-lg"></i>
                        </button>
                    </Link>
                    <Modal show={showModal} onHide={handleCloseModal} >
                        <Modal.Header
                            closeButton
                            className="bg-light"
                        >
                            <Modal.Title>
                                Ola, Precisa de ajuda?
                                Que tal assistir nosso tutorial sobre a PetLovers.
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <iframe width="466" height="315" src="https://www.youtube.com/embed/ii-KRRt13o4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="dark"
                                onClick={
                                    handleCloseModal
                                }
                            >
                                Fechar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </>
    )
}


