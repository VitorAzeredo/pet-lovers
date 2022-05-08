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
}).get(async (req, res) => {
	try {
		admin
			.firestore()
			.collection("pets")
			.get()
			.then((snapshot) => {
				const pets = [];
				snapshot.forEach((doc) => {
					const pet = doc.data();
					pet.petId = doc.id;
					pet.files = pet.files.map(reference => {
						const referenceSplitString = reference.split('/');
						return `https://firebasestorage.googleapis.com/v0/b/pet-lovers-f7d3a.appspot.com/o/${referenceSplitString[0]}%2F${referenceSplitString[1]}%2F${referenceSplitString[2]}?alt=media`
					})		
					pets.push(pet);
				});
				res.status(200).json(pets);
			});
	} catch (error) {
		return res.status(404).json([
			{
				name: "instance.pets.error",
				userMessage: "Erro na busca dos pets",
			},
		]);
	}
});

export default handler;
