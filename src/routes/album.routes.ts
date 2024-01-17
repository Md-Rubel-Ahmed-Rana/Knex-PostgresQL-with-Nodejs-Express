import { Router } from "express";
import { AlbumController } from "../controller/album.controller";
import requestValidator from "../middlewares/requestValidator";
import {
  albumValidatorPostSchema,
  albumValidatorUpdateSchema,
} from "../validations/album.validate";
import verifyJwt from "../middlewares/verifyJwt";
import authGuard from "../middlewares/auth.guard";

const router = Router();

router.get("/", verifyJwt, authGuard, AlbumController.findMany);

router.post(
  "/add",
  verifyJwt,
  authGuard,
  requestValidator(albumValidatorPostSchema),
  AlbumController.insertOne
);

router.patch(
  "/update/:id",
  verifyJwt,
  authGuard,
  requestValidator(albumValidatorUpdateSchema),
  AlbumController.updateOne
);

router.delete("/delete/:id", verifyJwt, authGuard, AlbumController.deleteOne);

router.get("/single/:id", verifyJwt, authGuard, AlbumController.findById);

export const AlbumRoutes = router;
