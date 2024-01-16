const knex = require("../db/knex");

const getAll = async () => {
  const posts = await knex.select("*").from("posts");
  return posts;
};

const create = async (data) => {
  const post = await knex("posts").insert(data).returning("*");
  return post;
};

const update = async (id, data) => {
  const updatedUser = await knex("posts")
    .where({ id })
    .update(data)
    .returning("*");
  return updatedUser;
};

const deletePost = async (id) => {
  const post = await knex("posts").where({ id }).del().returning("*");
  return post;
};

const getPost = async (id) => {
  console.log(id);
  const post = await knex.raw(`select * from posts where id = ${id}`);
  console.log(post);
  return post;
};

module.exports = {
  postService: {
    getAll,
    create,
    update,
    deletePost,
    getPost,
  },
};
