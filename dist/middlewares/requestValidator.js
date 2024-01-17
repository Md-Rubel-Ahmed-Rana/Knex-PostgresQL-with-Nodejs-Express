"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestValidator = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const validationErrors = error.details.map((err) => ({
                path: err.path[0],
                message: err.message,
            }));
            const response = {
                success: false,
                message: "Validation error",
                errors: validationErrors,
            };
            return res.status(400).json(response);
        }
        req.body = value;
        next();
    };
};
exports.default = requestValidator;
