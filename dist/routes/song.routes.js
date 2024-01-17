"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongRoutes = void 0;
const express_1 = require("express");
const song_controller_1 = require("../controller/song.controller");
const requestValidator_1 = __importDefault(require("../middlewares/requestValidator"));
const song_validate_1 = require("../validations/song.validate");
const router = (0, express_1.Router)();
router.get("/", song_controller_1.SongController.findMany);
router.post("/add", (0, requestValidator_1.default)(song_validate_1.songValidatorPostSchema), song_controller_1.SongController.insertOne);
router.patch("/update/:id", (0, requestValidator_1.default)(song_validate_1.songValidatorUpdateSchema), song_controller_1.SongController.updateOne);
router.delete("/delete/:id", song_controller_1.SongController.deleteOne);
router.get("/single/:id", song_controller_1.SongController.findById);
exports.SongRoutes = router;
