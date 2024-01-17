import Joi from "joi";
import { IAlbum } from "../interfaces/album.interface";

export const albumValidatorPostSchema = Joi.object<IAlbum>({
  title: Joi.string().required(),
  release_year: Joi.number().integer().required(),
  user_id: Joi.number().integer().required(),
  genre: Joi.string().required(),
});

export const albumValidatorUpdateSchema = Joi.object<IAlbum>({
  title: Joi.string().optional(),
  release_year: Joi.number().integer().optional(),
  user_id: Joi.number().integer().optional(),
  genre: Joi.string().optional(),
});
