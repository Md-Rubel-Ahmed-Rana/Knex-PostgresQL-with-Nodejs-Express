import { Router } from "express";
import { UserRoutes } from "./user.routes";
import { AuthRoutes } from "./auth.routes";
import { ArtistRoutes } from "./artist.routes";
import { AlbumRoutes } from "./album.routes";

const router = Router();

router.use("/user", UserRoutes);

router.use("/auth", AuthRoutes);

router.use("/artist", ArtistRoutes);

router.use("/album", AlbumRoutes);

export const rootRoutes = router;
