import { Router } from "express";
import { ArtistController } from "../controller/artist.controller";

const router = Router();

router.get("/", ArtistController.findMany);

router.post("/add", ArtistController.insertOne);

router.patch("/update/:id", ArtistController.updateOne);

router.delete("/delete/:id", ArtistController.deleteOne);

router.get("/single/:id", ArtistController.findById);

export const ArtistRoutes = router;
