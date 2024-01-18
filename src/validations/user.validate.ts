import Joi from "joi";
import { IUser } from "../interfaces/user.interface";

export const userValidatorPostSchema = Joi.object<IUser>({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
