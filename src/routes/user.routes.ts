import { userController } from "../controller/user.controller";

import { Router } from "express";

const router = Router();

router.get("/", userController.getAll);

router.post("/create", userController.create);

router.patch("/update/:id", userController.update);

router.delete("/delete/:id", userController.deleteUser);

router.get("/single/:id", userController.getUser);

export const userRoutes = router;
