import { Request, Response } from "express";
import { ArtistService } from "../services/artist.service";

const findMany = async (req: Request, res: Response) => {
  const data = await ArtistService.findMany();
  res.send(data);
};

const create = async (req: Request, res: Response) => {
  const newData = await ArtistService.create(req.body);
  res.send(newData);
};

const update = async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedRow = await ArtistService.update(id, req.body);
  res.send(updatedRow);
};

const deleteOne = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await ArtistService.deleteOne(id);
  res.send(data);
};

const findById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await ArtistService.findById(id);

  res.send(data);
};

export const ArtistController = {
  findMany,
  create,
  update,
  deleteOne,
  findById,
};
