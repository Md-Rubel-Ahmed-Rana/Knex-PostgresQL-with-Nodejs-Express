import { userController } from "../controller/user.controller";

const router = require("express").Router();

router.get("/", userController.getAll);

router.post("/create", userController.create);

router.patch("/update/:id", userController.update);

router.delete("/delete/:id", userController.deleteUser);

router.get("/single/:id", userController.getUser);

export const userRoutes = router;
