import { UserController } from "../controller/user.controller";

import { Router } from "express";
import requestValidator from "../middlewares/requestValidator";
import { userValidatorPostSchema } from "../validations/user.validate";

const router = Router();

router.get("/", UserController.findMany);

router.post(
  "/register",
  requestValidator(userValidatorPostSchema),
  UserController.insertOne
);

router.patch("/update/:id", UserController.updateOne);

router.delete("/delete/:id", UserController.deleteOne);

router.get("/single/:id", UserController.findById);

export const UserRoutes = router;
