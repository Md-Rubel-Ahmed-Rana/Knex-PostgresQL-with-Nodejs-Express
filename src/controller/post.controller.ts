import { Request, Response } from "express";

import { postService } from "../services/post.service";

const getAll = async (req: Request, res: Response) => {
  const posts = await postService.getAll();
  res.send(posts);
};

const create = async (req: Request, res: Response) => {
  const post = await postService.create(req.body);
  res.send(post);
};

const update = async (req: Request, res: Response) => {
  const id = req.params.id;
  const post = await postService.update(id, req.body);
  res.send(post);
};

const deletePost = async (req: Request, res: Response) => {
  const id = req.params.id;
  const post = await postService.deletePost(id);
  res.send(post);
};

const getPost = async (req: Request, res: Response) => {
  const id = req.params.id;
  const posts = await postService.getPost(id);
  res.send(posts.rows);
};

export const postControllers = {
  getAll,
  create,
  update,
  deletePost,
  getPost,
};
