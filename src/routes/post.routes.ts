import { postControllers } from "../controller/post.controller";

const router = require("express").Router();

router.get("/single/:id", postControllers.getPost);

router.get("/", postControllers.getAll);

router.post("/create", postControllers.create);

router.patch("/update/:id", postControllers.update);

router.delete("/delete/:id", postControllers.deletePost);

export const postRoutes = router;
