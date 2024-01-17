import { ISong } from "../interfaces/song.interface";
import { SongModel } from "../model/song.model";

const findMany = async () => {
  const data = await SongModel.findMany();
  return data;
};

const findById = async (id: string) => {
  const data = await SongModel.findById(id);
  return data?.rows[0];
};

const insertOne = async (data: ISong) => {
  const [newData] = await SongModel.insertOne(data);

  return newData;
};

const updateOne = async (id: string, data: ISong) => {
  const updatedRow = await SongModel.updateOne(id, data);
  return updatedRow[0];
};

const deleteOne = async (id: string) => {
  const data = await SongModel.deleteOne(id);
  return data;
};

export const SongService = {
  findMany,
  insertOne,
  updateOne,
  findById,
  deleteOne,
};
