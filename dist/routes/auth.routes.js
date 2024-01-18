"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const verifyJwt_1 = __importDefault(require("../middlewares/verifyJwt"));
const auth_controller_1 = require("../controller/auth.controller");
const router = (0, express_1.Router)();
router.post("/login", auth_controller_1.AuthController.login);
router.get("/", verifyJwt_1.default, auth_controller_1.AuthController.auth);
exports.AuthRoutes = router;
