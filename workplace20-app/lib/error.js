export function ValidationError(code, message, args) {
	return {
		code: code,
		message: message,
		arguments: args,
	};
}

export function Create(res) {
	return {
		endWith: function (statusCode, error) {
			let errorObj = {
				title: "Bad request",
				status: statusCode,
			};

			if (Array.isArray(error)) {
				errorObj.source = error;
			} else {
				errorObj.detail = error;
			}

			res.status(statusCode).send({ errors: errorObj });
		},
	};
}
