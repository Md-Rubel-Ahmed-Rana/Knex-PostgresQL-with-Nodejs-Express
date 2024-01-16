const { postControllers } = require("../controller/post.controller");

const router = require("express").Router();

router.get("/single/:id", postControllers.getPost);

router.get("/", postControllers.getAll);

router.post("/create", postControllers.create);

router.patch("/update/:id", postControllers.update);

router.delete("/delete/:id", postControllers.deletePost);

module.exports = {
  postRoutes: router,
};
