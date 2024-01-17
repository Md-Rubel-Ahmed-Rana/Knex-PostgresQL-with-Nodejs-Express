import { ArtistModel } from "../model/artist.model";
import { IArtist } from "../interfaces/artist.interface";

const findMany = async () => {
  const data = await ArtistModel.all();
  return data;
};

const findById = async (id: string) => {
  const data = await ArtistModel.getUserById(id);
  return data?.rows[0];
};

const create = async (data: IArtist) => {
  const newData = await ArtistModel.insert(data);
  return newData;
};

const update = async (id: string, data: IArtist) => {
  const updatedRow = await ArtistModel.update(id, data);
  return updatedRow[0];
};

const deleteOne = async (id: string) => {
  const data = await ArtistModel.delete(id);
  return data;
};

export const ArtistService = {
  findMany,
  create,
  update,
  findById,
  deleteOne,
};
