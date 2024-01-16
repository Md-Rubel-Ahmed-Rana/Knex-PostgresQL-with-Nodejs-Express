const knex = require("../db/knex");

const getAll = async () => {
  const users = await knex.select("*").from("users");
  return users;
};

const create = async (data) => {
  const newUser = await knex("users").insert(data).returning("*");
  return newUser;
};

const update = async (id, data) => {
  const updatedUser = await knex("users")
    .where({ id })
    .update(data)
    .returning("*");
  return updatedUser;
};

const deleteUser = async (id) => {
  const updatedUser = await knex("users").where({ id }).del().returning("*");
  return updatedUser;
};

const getUser = async (id) => {
  const user = await knex.raw(`select * from users where id = ${id}`);
  return user;
};

module.exports = {
  userService: {
    getAll,
    create,
    update,
    deleteUser,
    getUser,
  },
};
