import { UserController } from "../controller/user.controller";

import { Router } from "express";

const router = Router();

router.get("/", UserController.findMany);

router.post("/create", UserController.insertOne);

router.patch("/update/:id", UserController.updateOne);

router.delete("/delete/:id", UserController.deleteOne);

router.get("/single/:id", UserController.findById);

export const UserRoutes = router;
