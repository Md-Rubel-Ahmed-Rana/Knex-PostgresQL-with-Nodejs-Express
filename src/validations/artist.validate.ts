import Joi from "joi";
import { IArtist } from "../interfaces/artist.interface";

export const artistValidatorPostSchema = Joi.object<IArtist>({
  name: Joi.string().required(),
});

export const artistValidatorUpdateSchema = Joi.object<IArtist>({
  name: Joi.string().optional(),
});
