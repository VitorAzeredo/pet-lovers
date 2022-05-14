import nc from "next-connect";
import multipartFormParse from "../../../shared/middleware/pet/multipart-form-parser";
import admin from "../../../core/config/firebase/admin";
import { Validator } from "jsonschema";
import schema from "../../../shared/schemas/pet/data-envia-registro";

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
	.post(async (req, res) => {
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

		let uid;
		let name;
		let email;
		const fileNames = [];

		try {
			const decodedToken = await admin
				.auth()
				.verifyIdToken(data.headers.authorization);
			
			name = decodedToken.name;
			email = decodedToken.email;
			uid = decodedToken.uid;
		} catch (error) {
			return res.status(401).json([
				{
					name: "instance.auth.error",
					userMessage: "Token expirado ou inválido",
				},
			]);
		}

		const doc = await admin
			.firestore()
			.collection("protections")
			.add({
				...data.body,
				owner: uid,
				ownerName: name,
				ownerEmail: email,
				adopted: false,
				createdAt: admin.firestore.Timestamp.now(),
				updatedAt: admin.firestore.Timestamp.now(),
			});

		for await (const file of req.files["files[]"]) {
			fileNames.push(file.originalFilename);
			await admin
				.storage()
				.bucket("gs://pets-lovers-a2f10.appspot.com")
				.upload(file.filepath, {
					destination: `protections/${uid}/${doc.id}/${file.originalFilename}`,
					contentType: file.mimetype,
				});
		}

		const transformedFileNames = fileNames.map(
			(fileName) => `${uid}/${doc.id}/${fileName}`
		);

		await admin
			.firestore()
			.collection("protections")
			.doc(doc.id)
			.update({
				files: admin.firestore.FieldValue.arrayUnion(
					...transformedFileNames
				),
			});

		res.status(201).send();
	})

export const config = {
	api: {
		bodyParser: false,
	},
};

export default handler;
