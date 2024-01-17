import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";
import {
  ValidationError,
  ValidationErrorResponse,
} from "../interfaces/error.interface";

const requestValidator = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const validationErrors: ValidationError[] = error.details.map((err) => ({
        path: err.path[0] as string | number,
        message: err.message,
      }));

      const response: ValidationErrorResponse = {
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

export default requestValidator;
