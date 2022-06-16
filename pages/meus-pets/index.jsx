import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../../shared/components/Navbar";
import { auth } from "../../core/config/firebase/client";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";

// Veridica se o usuário está logado e habilita a opção de cadastrar um novo pet, e editar.
export default function Adoption() {
	const { register, setValue, getValues, watch } = useForm();
	const [checkIsAdopted, setCheckIsAdopted] = useState(false);
	const [isSignin, setIsSignin] = useState(false);
	const [data, setData] = useState(null);
	const [show, setShow] = useState(false);
	const [showDelete, setShowDelete] = useState(false);
	const [petDetail, setPetDetail] = useState({});
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const setDataPet = (data) => {
		for (const [key, value] of Object.entries(data)) {
			setValue(key, value);
		}
	};

	useEffect(() => {
		const subscription = watch(({adopted}) => setCheckIsAdopted(adopted));
		return () => subscription.unsubscribe();
	  }, [watch]);

	const handleDeletePet = (petId) => {
		deletePet(petId);
		setShowDelete((currentState) => !currentState);
	};

	const handleShowModalDelete = () => {
		setShowDelete((currentState) => !currentState);
	};

	const deletePet = async (petId) => {
		const find = data.findIndex((pet) => pet.petId === petId);
		const copyData = [...data];

		if (find === -1) {
			return;
		}

		const token = await auth.currentUser.getIdToken();
		await fetch(`/api/deletar-pet/${petId}`, {
			method: "DELETE",
			headers: {
				Authorization: token,
			},
		});

		copyData.splice(find, 1);
		setData(copyData);
	};

	const handleShowWithDataPet = (id) => {
		handleShow();
		const findPet = data.find((pet) => pet.petId === id);
		if (!findPet) {
			return;
		}
		setDataPet(findPet);
		setPetDetail(findPet);
	};

	const getUserToken = async () => {
		return auth.currentUser.getIdToken();
	};

	const sendUpdatePetAndCloseModal = async () => {
		const { name, description, state, city, cep, history, adopted, petId } =
			getValues();

		const token = await getUserToken();
		await fetch("/api/atualizar-pet/atualiza-pet", {
			method: "PATCH",
			headers: {
				Authorization: token,
			},
			body: JSON.stringify({
				name,
				description,
				state,
				city,
				cep,
				history,
				adopted,
				petId,
			}),
		});
		const indexToUpdate = data.findIndex((pet) => pet.petId === petId);
		data[indexToUpdate] = Object.assign(data[indexToUpdate], {
			...getValues(),
			adopted,
		});
		handleClose();
	};

	useEffect(() => {
		return auth.onAuthStateChanged((user) => {
			if (user) {
				setIsSignin(true);
				getUserToken().then((userToken) => {
					fetch("api/buscar-meus-pets/meus-pets", {
						method: "GET",
						headers: {
							Authorization: userToken,
						},
					})
						.then((res) => res.json())
						.then((dataPets) => setData(dataPets));
				});
			} else {
				setIsSignin(false);
			}
		});
	}, []);

	return (
		<div>
			<Head>
				<title>Meus-pets</title>
			</Head>
			<main>
				<div className="container-fluid pt-4 ps-5 pe-5 pb-4">
					<Navbar />
					<div className="row mt-4">
						{data?.length > 0 && (
							<div className="col-12 text-center">
								<h1>
									Aqui estão todos os seus pets cadastrados
									para adoção
								</h1>
								<p className="fs-5">
									Você pode gerenciar eles na aba "Meus Pets"
								</p>
							</div>
						)}
						<div className="col-12 text-end mb-5">
							<p className="">
								{" "}
								{isSignin ? (
									<Link href="/adocao/registrar" passHref>
										<button
											type="button"
											className="btn btn-info"
										>
											Você teria um pet para doar?
										</button>
									</Link>
								) : null}
							</p>
						</div>
					</div>
					<div className="table-responsive ">
						<table className="table align-middle">
							<thead>
								<tr className="table-dark">
									<th className="bi bi-file-person"> Nome</th>
									<th className="bi bi-journal">
										{" "}
										Descrição
									</th>
									<th className="bi bi-map"> Estado</th>
									<th className="bi bi-geo-alt"> Cidade</th>
									<th className="bi bi-geo"> CEP</th>
									<th className="bi bi-book">
										{" "}
										Historia do Pet
									</th>
									<th className="bi bi-layers-fill">
										{" "}
										Status
									</th>
									<th className="bi bi-pencil-square">
										{" "}
										Editar
									</th>
									<th className="bi bi-pencil-square">
										{" "}
										Excluir
									</th>
								</tr>
							</thead>
							<tbody>
								{data?.map((pet) => (
									<tr key={pet.petId} className="table-light">
										<th className="fw-normal">
											{pet.name}
										</th>
										<th className="text-break fw-normal">
											{pet.description}
										</th>
										<th className="fw-normal">
											{pet.state}
										</th>
										<th className="fw-normal">
											{pet.city}
										</th>
										<th className="fw-normal">{pet.cep}</th>
										<th className="text-break fw-normal">
											{pet.history}
										</th>
										<th>
											{pet?.adopted ? (
												<button
													type="button"
													disabled
													className="btn btn-success ps-3 pe-3"
												>
													Adotado
												</button>
											) : (
												<button
													type="button"
													disabled
													className="btn btn-warning ps-2.1 pe-2"
												>
													Disponível
												</button>
											)}
										</th>
										<th>
											<button
												type="button"
												className="btn btn-outline-dark"
												onClick={() =>
													handleShowWithDataPet(
														pet.petId
													)
												}
											>
												Alterar
											</button>
											<Modal
												show={show}
												onHide={handleClose}
											>
												<Modal.Header closeButton>
													<Modal.Title>
														Editor de cadastro
													</Modal.Title>
												</Modal.Header>
												<Modal.Body>
													<form>
														<div className="col-md-12 mb-3">
															<label
																htmlFor="name"
																className="form-label"
															>
																Nome
															</label>
															<input
																type="text"
																className="form-control"
																id="name"
																placeholder="Ex: Doggo"
																{...register(
																	"name",
																	{
																		required:
																			"Requerido",
																		minLength: 1,
																	}
																)}
															/>
														</div>
														<div className="col-md-12 mb-3">
															<label
																htmlFor="inputDescription"
																className="form-label"
															>
																Descrição
															</label>
															<input
																type="text"
																className="form-control"
																id="inputDescription"
																placeholder="Ex: Cachorro | Fêmea | Adulto | Porte pequeno"
																{...register(
																	"description",
																	{
																		required:
																			"Requerido",
																		minLength: 1,
																	}
																)}
															/>
														</div>
														<div className="col-md-12 mb-3">
															<label
																htmlFor="inputState"
																className="form-label"
															>
																Estado
															</label>
															<select
																id="inputState"
																className="form-select"
																defaultValue="SP"
																{...register(
																	"state",
																	{
																		required: true,
																	}
																)}
															>
																<option value="">
																	Selecionar...
																</option>
																<option value="SP">
																	São Paulo
																</option>
																<option value="RJ">
																	Rio de
																	Janeiro
																</option>
																<option value="RC">
																	Recife
																</option>
															</select>
														</div>
														<div className="col-12 mb-3">
															<label
																htmlFor="inputCity"
																className="form-label"
															>
																Cidade
															</label>
															<input
																type="text"
																className="form-control"
																id="inputCity"
																placeholder="Ex: Angra dos Reis"
																defaultValue=""
																{...register(
																	"city",
																	{
																		required: true,
																	}
																)}
															/>
														</div>
														<div className="col-md-12 mb-3">
															<label
																htmlFor="inputCep"
																className="form-label"
															>
																Cep
															</label>
															<input
																type="number"
																className="form-control"
																id="inputCep"
																placeholder="Ex: 00000000"
																defaultValue=""
																{...register(
																	"cep",
																	{
																		required: true,
																	}
																)}
															/>
														</div>

														<div className="col-12 mb-3">
															<label
																htmlFor="inputHistory"
																className="form-label"
															>
																História do
																peludo
															</label>
															<textarea
																type="text"
																className="form-control"
																id="inputHistory"
																placeholder="Conte a história do seu bichinho"
																defaultValue=""
																{...register(
																	"history",
																	{
																		required: true,
																	}
																)}
															/>
														</div>
														<div className="col-md-12 mb-3">
															<label
																htmlFor="inputAdopted"
																className="form-label"
															>
																Status pet
															</label>
															<select
																id="inputAdopted"
																className="form-select"
																{...register(
																	"adopted",
																	{
																		required: true,
																		setValueAs:
																			(
																				value
																			) =>
																				JSON.parse(
																					value
																				),
																	}
																)}
															>
																<option
																	value={
																		false
																	}
																>
																	Selecionar...
																</option>
																<option
																	value={
																		false
																	}
																>
																	Disponível
																</option>
																<option
																	value={true}
																>
																	Adotado
																</option>
															</select>
														</div>
														{checkIsAdopted ? (<div className="col-12 mb-3">
															<label
																htmlFor="inputHistory"
																className="form-label"
															>
																Como foi sua experiência?
															</label>
															<textarea
																type="text"
																className="form-control"
																id="inputHistory"
																placeholder="Conte um pouco para nós sobre sua experiência na PetLovers"
																defaultValue=""
																{...register(
																	"experience",
																	{
																		required: true,
																	}
																)}
															/>
														</div>) : null}

													</form>
												</Modal.Body>
												<Modal.Footer>
													<Button
														variant="secondary"
														onClick={handleClose}
													>
														Fechar
													</Button>
													<Button
														variant="primary"
														onClick={
															sendUpdatePetAndCloseModal
														}
													>
														Savar Alterações
													</Button>
												</Modal.Footer>
											</Modal>
											<Modal
												show={showDelete}
												onHide={handleShowModalDelete}
											>
												<Modal.Header closeButton>
													<Modal.Title>
														Exclusão de cadastro
													</Modal.Title>
												</Modal.Header>
												<Modal.Body>
													<h3>
														Tem certeza que deseja
														excluir?
													</h3>
												</Modal.Body>
												<Modal.Footer>
													<Button
														variant="secondary"
														onClick={
															handleShowModalDelete
														}
													>
														Fechar
													</Button>
													<Button
														variant="primary"
														onClick={() =>
															handleDeletePet(
																pet.petId
															)
														}
													>
														Excluir
													</Button>
												</Modal.Footer>
											</Modal>
										</th>
										<th>
											<button
												type="button"
												className="btn btn-outline-danger"
												onClick={handleShowModalDelete}
											>
												Excluir
											</button>
										</th>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</main>
		</div>
	);
}
