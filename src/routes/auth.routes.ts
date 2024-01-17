import { Router } from "express";
import verifyJwt from "../middlewares/verifyJwt";
import { AuthController } from "../controller/auth.controller";

const router = Router();

router.post("/login", AuthController.login);

router.get("/", verifyJwt, AuthController.auth);

export const AuthRoutes = router;
