import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { auth } from "../../../core/config/firebase/client";
import { useRouter } from "next/router";
import Base from "../../../shared/layout/Base";
import { states } from "../../../shared/static/states";
import { cities, allCities } from "../../../shared/static/cities";

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
	return fetch("/api/apadrinha-pet/envia-registro", {
		method: "POST",
		headers: {
			Authorization: token,
		},
		body: formData,
	});
};

Donation.getLayout = function getLayout(page) {
	return <Base pageTitle="Apadrinhamento">{page}</Base>;
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
	const [isStateSelected, setIsStateSelected] = useState("");
	const [isCityDisabled, setIsCityDisabled] = useState(true);
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
			if (values.state.length === 0) {
				setIsStateSelected("");
				setIsCityDisabled(true);
			} else {
				setIsStateSelected(values.state);
				setIsCityDisabled(false);
			}
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
		router.push("/apadrinhamento");
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
					<p className="fs-5">
						Para que ele possa encontrar um padrinho
					</p>
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
								defaultValue=""
								{...register("state", {
									required: true,
								})}
							>
								<option value="">Selecionar...</option>
								{states?.map((state) => (
									<option
										key={state.value}
										value={state.value}
									>
										{state.label}
									</option>
								))}
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
							<select
								id="inputCity"
								className="form-select"
								defaultValue=""
								disabled={isCityDisabled}
								{...register("city", {
									required: true,
								})}
							>
								<option value="">Selecionar...</option>
								{isStateSelected.length > 0 ? (
									cities[isStateSelected]?.map(
										(city, index) => (
											<option
												key={city.value.concat(
													String(index)
												)}
												value={city.value}
											>
												{city.label}
											</option>
										)
									)
								) : (
									<option value="">Selecionar...</option>
								)}
							</select>
							{errors.state && (
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
												return "Selecione pelo menos 2 arquivos";
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
							<button type="submit" className="btn btn-warning">
								Enviar
							</button>
							<Link href="/apadrinhamento" passHref>
								<button
									type="button"
									className="btn btn-dark ms-2"
								>
									Voltar para Apadrinhamento
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
