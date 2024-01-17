import { Request, Response } from "express";
import { SongService } from "../services/song.service";

const findMany = async (req: Request, res: Response) => {
  const data = await SongService.findMany();
  res.send(data);
};

const insertOne = async (req: Request, res: Response) => {
  const newData = await SongService.insertOne(req.body);
  res.send(newData);
};

const updateOne = async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedRow = await SongService.updateOne(id, req.body);
  res.send(updatedRow);
};

const deleteOne = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await SongService.deleteOne(id);
  res.send(data);
};

const findById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await SongService.findById(id);

  res.send(data);
};

export const SongController = {
  findMany,
  insertOne,
  updateOne,
  deleteOne,
  findById,
};
