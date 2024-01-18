import Joi from "joi";
import { ISong } from "../interfaces/song.interface";

export const songValidatorPostSchema = Joi.object<ISong>({
  title: Joi.string().required(),
  duration: Joi.number().required(),
  album_id: Joi.number().integer().required(),
  user_id: Joi.number().integer().required(),
});

export const songValidatorUpdateSchema = Joi.object<ISong>({
  id: Joi.number().optional(),
  title: Joi.string().optional(),
  duration: Joi.number().optional(),
  album_id: Joi.number().integer().optional(),
  user_id: Joi.number().integer().optional(),
  created_at: Joi.date().optional(),
  updated_at: Joi.date().optional(),
});
