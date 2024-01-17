import { Router } from "express";
import { AlbumController } from "../controller/album.controller";

const router = Router();

router.get("/", AlbumController.findMany);

router.post("/add", AlbumController.insertOne);

router.patch("/update/:id", AlbumController.updateOne);

router.delete("/delete/:id", AlbumController.deleteOne);

router.get("/single/:id", AlbumController.findById);

export const AlbumRoutes = router;
