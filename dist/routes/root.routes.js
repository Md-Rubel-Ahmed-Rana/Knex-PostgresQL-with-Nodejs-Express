"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootRoutes = void 0;
const express_1 = require("express");
const user_routes_1 = require("./user.routes");
const router = (0, express_1.Router)();
router.use("/user", user_routes_1.userRoutes);
exports.rootRoutes = router;
