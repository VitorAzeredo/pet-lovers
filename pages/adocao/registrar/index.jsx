import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Navbar from "../../../shared/components/Navbar";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { auth } from "../../../core/config/firebase/client";
import { useRouter } from "next/router";
import Base from "../../../shared/layout/Base";

const sendAnimalData = async (animalData) => {
	const formData = new FormData();

	for (const name in animalData.files) {
		if (
			typeof animalData.files[name] !== "number" &&
			typeof animalData.files[name] !== "function"
		) {
			formData.append(
				"files[]",
				animalData.files[name],
				animalData.files[name].name
			);
		}
	}

	delete animalData.files;

	for (const name in animalData) {
		formData.append(name, animalData[name]);
	}

	const token = await auth.currentUser.getIdToken();
	return fetch("/api/registro-pet/envia-registro", {
		method: "POST",
		headers: {
			Authorization: token,
		},
		body: formData,
	});
};

Donation.getLayout = function getLayout(page) {
	return <Base pageTitle="Doação">{page}</Base>;
};

export default function Donation() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const [images, setImages] = useState([]);
	const [load, setLoad] = useState(false);
	const router = useRouter();
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
				path: "/assets/dog-walking.json",
			});

			return () => animation.destroy();
		}
	}, [lottie]);

	useEffect(() => {
		const subscription = watch((values) => {
			setImages([]);
			readmultifiles(values.files);
		});
		return () => subscription.unsubscribe();
	}, [watch]);

	const onSubmit = async (data) => {
		setLoad(true);
		try {
			await sendAnimalData(data);
		} catch (error) {
			setLoad(false);
		}
		router.push("/adocao");
	};

	const readmultifiles = (files) => {
		const reader = new FileReader();
		const readFile = (index) => {
			if (index >= files.length) return;
			const file = files[index];
			reader.onload = function (e) {
				// get file content
				const bin = e.target.result;
				setImages((state) => [...state, { index, bin }]);
				// do sth with bin
				readFile(index + 1);
			};
			reader.readAsDataURL(file);
		};
		readFile(0);
	};
	return (
		<>
			<div className="row mt-4">
				<div className="col-12 text-center">
					<h1>Divulgue seu bichinho</h1>
					<p className="fs-5">Para que ele possa ter um novo lar</p>
				</div>
			</div>
			<div className="container mt-4">
				<div className="row ">
					<div
						style={{ maxWidth: "700px" }}
						className={`${
							load ? "d-block" : "d-none"
						} min-vw-50 ms-auto me-auto`}
						ref={ref}
					></div>
					<form
						className={`${
							!load ? "d-flex" : "d-none"
						} row g-3 mt-0`}
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className="col-md-6">
							<label htmlFor="inputName4" className="form-label">
								Nome
							</label>
							<input
								type="text"
								className="form-control"
								id="inputName4"
								placeholder="Ex: Doggo"
								defaultValue=""
								{...register("name", {
									required: true,
								})}
							/>
							{errors.name && (
								<span className="text-danger">
									Este campo é obrigatório
								</span>
							)}
						</div>
						<div className="col-md-6">
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
								defaultValue=""
								{...register("description", {
									required: true,
								})}
							/>
							{errors.description && (
								<span className="text-danger">
									Este campo é obrigatório
								</span>
							)}
						</div>
						<div className="col-md-4">
							<label htmlFor="inputState" className="form-label">
								Estado
							</label>
							<select
								id="inputState"
								className="form-select"
								defaultValue="SP"
								{...register("state", {
									required: true,
								})}
							>
								<option selected value="SP">
									Selecionar...
								</option>
								<option value="SP">São Paulo</option>
								<option value="SP">Rio de Janeiro</option>
								<option value="SP">Recife</option>
							</select>
							{errors.state && (
								<span className="text-danger">
									Este campo é obrigatório
								</span>
							)}
						</div>
						<div className="col-6">
							<label htmlFor="inputCity" className="form-label">
								Cidade
							</label>
							<input
								type="text"
								className="form-control"
								id="inputCity"
								placeholder="Ex: Angra dos Reis"
								defaultValue=""
								{...register("city", {
									required: true,
								})}
							/>
							{errors.city && (
								<span className="text-danger">
									Este campo é obrigatório
								</span>
							)}
						</div>
						<div className="col-md-2">
							<label htmlFor="inputCep" className="form-label">
								Cep
							</label>
							<input
								type="number"
								className="form-control"
								id="inputCep"
								placeholder="Ex: 00000000"
								defaultValue=""
								{...register("cep", {
									required: true,
								})}
							/>
							{errors.cep && (
								<span className="text-danger">
									Este campo é obrigatório
								</span>
							)}
						</div>

						<div className="col-12">
							<label
								htmlFor="inputHistory"
								className="form-label"
							>
								História do peludo
							</label>
							<textarea
								type="text"
								className="form-control"
								id="inputHistory"
								placeholder="Conte a história do seu bichinho"
								defaultValue=""
								{...register("history", {
									required: true,
								})}
							/>
							{errors.history && (
								<span className="text-danger">
									Este campo é obrigatório
								</span>
							)}
						</div>
						<div className="col-12">
							<div className="mb-3">
								<label
									htmlFor="inputFiles"
									className="form-label"
								>
									Selecione multiplas imagens
								</label>
								<input
									className="form-control"
									type="file"
									id="inputFiles"
									multiple
									{...register("files", {
										required: "Este campo é obrigatório",
										validate: (value) => {
											if (value.length < 2) {
												return "Selecione pelo menos 2 arquivo";
											}
											return undefined;
										},
									})}
								/>
								{errors.files && (
									<span className="text-danger">
										{errors.files.message}
									</span>
								)}
							</div>
						</div>
						<div className="col-12">
							<button type="submit" className="btn btn-info">
								Enviar
							</button>
							<Link href="/adocao" passHref>
								<button
									type="button"
									className="btn btn-dark ms-2"
								>
									Voltar para Adoção
								</button>
							</Link>
						</div>
					</form>
				</div>
				{!load && (
					<div className="row mt-4">
						{images.map((image) => (
							<div
								key={image.bin}
								className="p-0 col-12 col-sm-6 col-md-4 col-lg-3"
							>
								<Image
									className="rounded "
									layout="responsive"
									src={image.bin}
									alt="Vercel Logo"
									width={300}
									height={300}
								/>
							</div>
						))}
					</div>
				)}
			</div>
		</>
	);
}
