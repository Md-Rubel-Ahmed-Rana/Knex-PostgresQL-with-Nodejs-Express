import { Router } from "express";
import { UserRoutes } from "./user.routes";
import { AuthRoutes } from "./auth.routes";
import { ArtistRoutes } from "./artist.routes";

const router = Router();

router.use("/user", UserRoutes);

router.use("/auth", AuthRoutes);

router.use("/artist", ArtistRoutes);

export const rootRoutes = router;
