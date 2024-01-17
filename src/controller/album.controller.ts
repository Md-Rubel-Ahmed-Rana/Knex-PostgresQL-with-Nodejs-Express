import { Request, Response } from "express";
import { AlbumService } from "../services/album.service";

const findMany = async (req: Request, res: Response) => {
  const data = await AlbumService.findMany();
  res.send(data);
};

const insertOne = async (req: Request, res: Response) => {
  const newData = await AlbumService.insertOne(req.body);
  res.send(newData);
};

const updateOne = async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedRow = await AlbumService.updateOne(id, req.body);
  res.send(updatedRow);
};

const deleteOne = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await AlbumService.deleteOne(id);
  res.send(data);
};

const findById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await AlbumService.findById(id);

  res.send(data);
};

export const AlbumController = {
  findMany,
  insertOne,
  updateOne,
  deleteOne,
  findById,
};
