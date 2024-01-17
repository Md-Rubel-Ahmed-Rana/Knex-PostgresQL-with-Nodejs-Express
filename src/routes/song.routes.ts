import { Router } from "express";
import { SongController } from "../controller/song.controller";
import requestValidator from "../middlewares/requestValidator";
import {
  songValidatorPostSchema,
  songValidatorUpdateSchema,
} from "../validations/song.validate";

const router = Router();

router.get("/", SongController.findMany);

router.get("/album/:album_id", SongController.findSongsByAlbum);

router.get("/artist/:user_id", SongController.findSongsByArtist);

router.post(
  "/add",
  requestValidator(songValidatorPostSchema),
  SongController.insertOne
);

router.patch(
  "/update/:id",
  requestValidator(songValidatorUpdateSchema),
  SongController.updateOne
);

router.delete("/delete/:id", SongController.deleteOne);

router.get("/single/:id", SongController.findById);

export const SongRoutes = router;
