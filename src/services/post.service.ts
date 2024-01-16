import { Model } from "../database/knex";

const getAll = async () => {
  const posts = await Model.select("*").from("posts");
  return posts;
};

const create = async (data: any) => {
  const post = await Model("posts").insert(data).returning("*");
  return post;
};

const update = async (id: string, data: any) => {
  const updatedUser = await Model("posts")
    .where({ id })
    .update(data)
    .returning("*");
  return updatedUser;
};

const deletePost = async (id: string) => {
  const post = await Model("posts").where({ id }).del().returning("*");
  return post;
};

const getPost = async (id: string) => {
  const post = await Model.raw(`select * from posts where id = ${id}`);
  return post;
};

export const postService = {
  getAll,
  create,
  update,
  deletePost,
  getPost,
};
