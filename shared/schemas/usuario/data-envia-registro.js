/* eslint-disable import/no-anonymous-default-export */
export default {
	type: "object",
	id: "data-envia-registro-usuario",
	properties: {
		body: {
			require: true,
			additionalProperties: false,
			type: "object",
			properties: {
				email: {
					type: "string",
					format: "email",
					minLength: 1,
					maxLength: 200,
					required: true,
				},
				password: {
					type: "string",
					minLength: 8,
					maxLength: 36,
					required: true,
				},
				rePassword: {
					type: "string",
					minLength: 8,
					maxLength: 36,
					required: true,
				},
			},
		},
	},
};
