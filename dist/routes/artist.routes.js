"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistRoutes = void 0;
const express_1 = require("express");
const artist_controller_1 = require("../controller/artist.controller");
const requestValidator_1 = __importDefault(require("../middlewares/requestValidator"));
const artist_validate_1 = require("../validations/artist.validate");
const verifyJwt_1 = __importDefault(require("../middlewares/verifyJwt"));
const auth_guard_1 = __importDefault(require("../middlewares/auth.guard"));
const router = (0, express_1.Router)();
router.get("/", verifyJwt_1.default, auth_guard_1.default, artist_controller_1.ArtistController.findMany);
router.post("/add", verifyJwt_1.default, auth_guard_1.default, (0, requestValidator_1.default)(artist_validate_1.artistValidatorPostSchema), artist_controller_1.ArtistController.insertOne);
router.patch("/update/:id", verifyJwt_1.default, auth_guard_1.default, (0, requestValidator_1.default)(artist_validate_1.artistValidatorUpdateSchema), artist_controller_1.ArtistController.updateOne);
router.delete("/delete/:id", verifyJwt_1.default, auth_guard_1.default, artist_controller_1.ArtistController.deleteOne);
router.get("/single/:id", verifyJwt_1.default, auth_guard_1.default, artist_controller_1.ArtistController.findById);
exports.ArtistRoutes = router;
