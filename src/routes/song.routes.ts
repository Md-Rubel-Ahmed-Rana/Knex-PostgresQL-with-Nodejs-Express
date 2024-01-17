import { Router } from "express";
import { SongController } from "../controller/song.controller";

const router = Router();

router.get("/", SongController.findMany);

router.post("/add", SongController.insertOne);

router.patch("/update/:id", SongController.updateOne);

router.delete("/delete/:id", SongController.deleteOne);

router.get("/single/:id", SongController.findById);

export const SongRoutes = router;
