"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootRoutes = void 0;
const { postRoutes } = require("./post.routes");
const { userRoutes } = require("./user.routes");
const router = require("express").Router();
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
exports.rootRoutes = router;
