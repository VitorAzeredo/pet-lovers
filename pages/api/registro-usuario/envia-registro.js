import admin from "../../../core/config/firebase/admin";
import { Validator } from "jsonschema";
import schema from "../../../shared/schemas/usuario/data-envia-registro";

const v = new Validator();

export default function handler(req, res) {
	if (req.method !== "POST") {
		res.status(405).send();
		return;
	}

	const data = { body: req.body };
	const result = v.validate(data, schema);

	if (result.errors.length) {
		const fields = [];
		result.errors.forEach((e) => {
			const error = {
				name: e.property,
				userMessage: e.message,
			};
			fields.push(error);
		});
		res.status(400).json(fields);
	}

	if (data.body.password !== data.body.rePassword) {
		res.status(400).json([
			{
				name: "instance.body.password.dontmatch",
				userMessage: "Passwords dont match",
			},
		]);
	}

	admin
		.auth()
		.createUser({
			email: data.body.email,
			password: data.body.password,
			rePassword: data.body.rePassword,
			emailVerified: false,
			disabled: false,
		})
		.then((userRecord) => {
			res.status(200).json({
				data: userRecord.uid,
			});
		})
		.catch((error) => {
			res.status(500).json([
				{
					name: "instance.server.error",
					userMessage: error.message,
				},
			]);
		});
}
