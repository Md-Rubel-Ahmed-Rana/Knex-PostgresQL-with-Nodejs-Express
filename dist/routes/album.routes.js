"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumRoutes = void 0;
const express_1 = require("express");
const album_controller_1 = require("../controller/album.controller");
const requestValidator_1 = __importDefault(require("../middlewares/requestValidator"));
const album_validate_1 = require("../validations/album.validate");
const router = (0, express_1.Router)();
router.get("/", album_controller_1.AlbumController.findMany);
router.post("/add", (0, requestValidator_1.default)(album_validate_1.albumValidatorPostSchema), album_controller_1.AlbumController.insertOne);
router.patch("/update/:id", (0, requestValidator_1.default)(album_validate_1.albumValidatorUpdateSchema), album_controller_1.AlbumController.updateOne);
router.delete("/delete/:id", album_controller_1.AlbumController.deleteOne);
router.get("/single/:id", album_controller_1.AlbumController.findById);
exports.AlbumRoutes = router;
