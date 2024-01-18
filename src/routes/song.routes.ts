import { Router } from "express";
import { SongController } from "../controller/song.controller";
import requestValidator from "../middlewares/requestValidator";
import {
  songValidatorPostSchema,
  songValidatorUpdateSchema,
} from "../validations/song.validate";
import verifyJwt from "../middlewares/verifyJwt";
import authGuard from "../middlewares/auth.guard";

const router = Router();

router.get("/", verifyJwt, authGuard, SongController.findMany);

router.get(
  "/album/:album_id",
  verifyJwt,
  authGuard,
  SongController.findSongsByAlbum
);

router.get(
  "/artist/:user_id",
  verifyJwt,
  authGuard,
  SongController.findSongsByArtist
);

router.post(
  "/add",
  verifyJwt,
  authGuard,
  requestValidator(songValidatorPostSchema),
  SongController.insertOne
);

router.patch(
  "/update/:id",
  verifyJwt,
  authGuard,
  requestValidator(songValidatorUpdateSchema),
  SongController.updateOne
);

router.delete("/delete/:id", verifyJwt, authGuard, SongController.deleteOne);

router.get("/single/:id", verifyJwt, authGuard, SongController.findById);

export const SongRoutes = router;
