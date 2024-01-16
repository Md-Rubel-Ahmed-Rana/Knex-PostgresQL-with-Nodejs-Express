"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const root_routes_1 = require("./routes/root.routes");
const port = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
// routes
app.use("/api/v1", root_routes_1.rootRoutes);
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
