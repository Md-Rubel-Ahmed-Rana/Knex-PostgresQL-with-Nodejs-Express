import { Request, Response } from "express";
import { userService } from "../services/user.service";

const getAll = async (req: Request, res: Response) => {
  const users = await userService.getAll();
  res.send(users);
};

const create = async (req: Request, res: Response) => {
  const newUser = await userService.create(req.body);
  res.send(newUser);
};

const update = async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedUser = await userService.update(id, req.body);
  res.send(updatedUser);
};

const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedUser = await userService.deleteUser(id);
  res.send(updatedUser);
};

const getUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const users = await userService.getUser(id);

  res.send(users.rows);
};

export const userController = {
  getAll,
  create,
  update,
  deleteUser,
  getUser,
};
