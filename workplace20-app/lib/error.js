export function ValidationError(code, message, args) {
    return {
        code: code,
        message: message,
        arguments: args
    }
}

export function Create(res) {
    return {
        errors: [],
        any: () => errors.length > 0,
        add: (error) => errors.push(error),
        endWith: (statusCode, message, args) =>
            res
            .status(statusCode)
            .send({
                errors: [{
                    code: 400,
                    message: message,
                    arguments: args
                }]
            })
    }
}
