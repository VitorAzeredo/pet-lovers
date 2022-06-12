import nc from "next-connect";
import admin from "../../../core/config/firebase/admin";

const handler = nc({
	onError: (err, req, res, next) => {
		console.error(err.stack);
		res.status(500).end("Something broke!");
	},
	onNoMatch: (req, res) => {
		res.status(404).end("Page is not found");
	},
}).delete(async (req, res) => {
	const { petId } = req.query;

	try {
		await admin.auth().verifyIdToken(req.headers.authorization);
	} catch (error) {
		return res.status(401).json([
			{
				name: "instance.auth.error",
				userMessage: "Token expirado ou inválido",
			},
		]);
	}

	try {
		admin.firestore().collection("protections").doc(petId).delete();
	} catch (error) {
		return res.status(404).json([
			{
				name: "instance.pets.error",
				userMessage: "Erro na busca dos pets",
			},
		]);
	}

	res.status(201).send();
});

export default handler;
