import { IUser } from "../interfaces/user.interface";
import { UserModel } from "../model/user.model";
import bcrypt from "bcrypt";

const getAll = async () => {
  const users = await UserModel.all();
  return users;
};

const getUser = async (id: string) => {
  const user = await UserModel.getUserById(id);
  return user;
};

const create = async (data: IUser) => {
  const hashedPassword = await bcrypt.hash(data.password, 12);
  data.password = hashedPassword;
  const newUser = await UserModel.insert(data);
  return newUser;
};

const update = async (id: string, data: IUser) => {
  const updatedUser = await UserModel.update(id, data);
  return updatedUser;
};

const deleteUser = async (id: string) => {
  const updatedUser = await UserModel.delete(id);
  return updatedUser;
};

export const userService = {
  getAll,
  create,
  update,
  deleteUser,
  getUser,
};
