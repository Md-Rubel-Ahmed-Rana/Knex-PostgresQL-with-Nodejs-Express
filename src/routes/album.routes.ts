import { Router } from "express";
import { AlbumController } from "../controller/album.controller";
import requestValidator from "../middlewares/requestValidator";
import {
  albumValidatorPostSchema,
  albumValidatorUpdateSchema,
} from "../validations/album.validate";

const router = Router();

router.get("/", AlbumController.findMany);

router.post(
  "/add",
  requestValidator(albumValidatorPostSchema),
  AlbumController.insertOne
);

router.patch(
  "/update/:id",
  requestValidator(albumValidatorUpdateSchema),
  AlbumController.updateOne
);

router.delete("/delete/:id", AlbumController.deleteOne);

router.get("/single/:id", AlbumController.findById);

export const AlbumRoutes = router;
