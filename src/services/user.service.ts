import { Model } from "../database/knex";

const getAll = async () => {
  const users = await Model.select("*").from("users");
  return users;
};

const create = async (data: any) => {
  const newUser = await Model("users").insert(data).returning("*");
  return newUser;
};

const update = async (id: string, data: any) => {
  const updatedUser = await Model("users")
    .where({ id })
    .update(data)
    .returning("*");
  return updatedUser;
};

const deleteUser = async (id: string) => {
  const updatedUser = await Model("users").where({ id }).del().returning("*");
  return updatedUser;
};

const getUser = async (id: string) => {
  const user = await Model.raw(`select * from users where id = ${id}`);
  return user;
};

export const userService = {
  getAll,
  create,
  update,
  deleteUser,
  getUser,
};
