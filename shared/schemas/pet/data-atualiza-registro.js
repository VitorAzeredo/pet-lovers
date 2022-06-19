/* eslint-disable import/no-anonymous-default-export */
export default {
	type: "object",
	id: "data-envia-registro-pet",
	properties: {
		body: {
			require: true,
			additionalProperties: false,
			type: "object",
			properties: {
				cep: {
					type: "string",
					minLength: 7,
					maxLength: 8,
					required: true,
				},
				city: {
					type: "string",
					minLength: 1,
					maxLength: 50,
					required: true,
				},
				description: {
					type: "string",
					minLength: 1,
					maxLength: 400,
					required: true,
				},
				history: {
					type: "string",
					minLength: 1,
					maxLength: 400,
					required: true,
				},
				name: {
					type: "string",
					minLength: 1,
					maxLength: 50,
					required: true,
				},
				state: {
					type: "string",
					minLength: 1,
					maxLength: 50,
					required: true,
				},
				adopted: {
					type: "boolean",
					required: true,
				},
				petId: {
					type: "string",
					minLength: 8,
					maxLength: 50,
					required: true,
				},
				experience: {
					type: "string",
					maxLength: 300,
				},
			},
		},
		headers: {
			require: true,
			type: "object",
			properties: {
				authorization: {
					type: "string",
					minLength: 1,
					maxLength: 1300,
					required: true,
				},
			},
		},
	},
};
