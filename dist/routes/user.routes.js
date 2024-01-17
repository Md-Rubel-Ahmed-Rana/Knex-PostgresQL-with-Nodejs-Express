"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const user_controller_1 = require("../controller/user.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", user_controller_1.UserController.findMany);
router.post("/create", user_controller_1.UserController.insertOne);
router.patch("/update/:id", user_controller_1.UserController.updateOne);
router.delete("/delete/:id", user_controller_1.UserController.deleteOne);
router.get("/single/:id", user_controller_1.UserController.findById);
exports.UserRoutes = router;
