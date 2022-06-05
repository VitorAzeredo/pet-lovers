import nc from "next-connect";
import multipartFormParse from "../../../shared/middleware/pet/multipart-form-parser";
import admin from "../../../core/config/firebase/admin";
import { Validator } from "jsonschema";
import schema from "../../../shared/schemas/pet/data-atualiza-registro";

const v = new Validator();

const handler = nc({
	onError: (err, req, res, next) => {
		console.error(err.stack);
		res.status(500).end("Something broke!");
	},
	onNoMatch: (req, res) => {
		res.status(404).end("Page is not found");
	},
})
	.use(multipartFormParse)
	.put(async (req, res) => {
		const data = { body: req.body, headers: req.headers };
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
			return res.status(400).json(fields);
		}

		try {
			await admin
				.auth()
				.verifyIdToken(data.headers.authorization);
		} catch (error) {
			return res.status(401).json([
				{
					name: "instance.auth.error",
					userMessage: "Token expirado ou inválido",
				},
			]);
		}

        console.log(data.body);

		// await admin
		// 	.firestore()
		// 	.collection("pets")
		// 	.doc(body.petId)
		// 	.update({

		// 		adopted: false,
		// 		updatedAt: admin.firestore.Timestamp.now(),
		// 	});

		res.status(201).send();
	})

export const config = {
	api: {
		bodyParser: false,
	},
};

export default handler;
