import { Router } from "express";
import { ArtistController } from "../controller/artist.controller";
import requestValidator from "../middlewares/requestValidator";
import {
  artistValidatorPostSchema,
  artistValidatorUpdateSchema,
} from "../validations/artist.validate";
import verifyJwt from "../middlewares/verifyJwt";
import authGuard from "../middlewares/auth.guard";

const router = Router();

router.get("/", verifyJwt, authGuard, ArtistController.findMany);

router.post(
  "/add",
  verifyJwt,
  authGuard,
  requestValidator(artistValidatorPostSchema),
  ArtistController.insertOne
);

router.patch(
  "/update/:id",
  verifyJwt,
  authGuard,
  requestValidator(artistValidatorUpdateSchema),
  ArtistController.updateOne
);

router.delete("/delete/:id", verifyJwt, authGuard, ArtistController.deleteOne);

router.get("/single/:id", verifyJwt, authGuard, ArtistController.findById);

export const ArtistRoutes = router;
