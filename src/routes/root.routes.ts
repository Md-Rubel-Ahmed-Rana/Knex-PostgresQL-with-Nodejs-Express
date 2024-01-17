import { Router } from "express";
import { UserRoutes } from "./user.routes";
import { AuthRoutes } from "./auth.routes";

const router = Router();

router.use("/user", UserRoutes);
router.use("/auth", AuthRoutes);

export const rootRoutes = router;
