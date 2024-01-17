import { Router } from "express";
import { ArtistController } from "../controller/artist.controller";

const router = Router();

router.get("/", ArtistController.findMany);

router.post("/add", ArtistController.create);

router.patch("/update/:id", ArtistController.update);

router.delete("/delete/:id", ArtistController.deleteOne);

router.get("/single/:id", ArtistController.findById);

export const ArtistRoutes = router;
