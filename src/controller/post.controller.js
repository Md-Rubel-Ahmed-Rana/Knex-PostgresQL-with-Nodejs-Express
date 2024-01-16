const { postService } = require("../services/post.service");

const getAll = async (req, res) => {
  const posts = await postService.getAll();
  res.send(posts);
};

const create = async (req, res) => {
  const post = await postService.create(req.body);
  res.send(post);
};

const update = async (req, res) => {
  const id = req.params.id;
  const post = await postService.update(id, req.body);
  res.send(post);
};

const deletePost = async (req, res) => {
  const id = req.params.id;
  const post = await postService.deletePost(id);
  res.send(post);
};

const getPost = async (req, res) => {
  const id = req.params.id;
  const posts = await postService.getPost(id);
  res.send(posts.rows);
};

module.exports = {
  postControllers: {
    getAll,
    create,
    update,
    deletePost,
    getPost,
  },
};
