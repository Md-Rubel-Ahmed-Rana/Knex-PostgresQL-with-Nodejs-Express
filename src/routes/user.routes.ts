import { UserController } from "../controller/user.controller";

import { Router } from "express";
import requestValidator from "../middlewares/requestValidator";
import { userValidatorPostSchema } from "../validations/user.validate";
import verifyJwt from "../middlewares/verifyJwt";
import authGuard from "../middlewares/auth.guard";

const router = Router();

router.get("/", verifyJwt, authGuard, UserController.findMany);

router.post(
  "/register",
  requestValidator(userValidatorPostSchema),
  UserController.insertOne
);

router.patch("/update/:id", verifyJwt, authGuard, UserController.updateOne);

router.delete("/delete/:id", verifyJwt, authGuard, UserController.deleteOne);

router.get("/single/:id", verifyJwt, authGuard, UserController.findById);

export const UserRoutes = router;
