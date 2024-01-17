import { Router } from "express";
import { ArtistController } from "../controller/artist.controller";
import requestValidator from "../middlewares/requestValidator";
import {
  artistValidatorPostSchema,
  artistValidatorUpdateSchema,
} from "../validations/artist.validate";

const router = Router();

router.get("/", ArtistController.findMany);

router.post(
  "/add",
  requestValidator(artistValidatorPostSchema),
  ArtistController.insertOne
);

router.patch(
  "/update/:id",
  requestValidator(artistValidatorUpdateSchema),
  ArtistController.updateOne
);

router.delete("/delete/:id", ArtistController.deleteOne);

router.get("/single/:id", ArtistController.findById);

export const ArtistRoutes = router;
