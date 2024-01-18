"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const root_routes_1 = require("./routes/root.routes");
const port = process.env.PORT || 5000;
dotenv_1.default.config();
const app = (0, express_1.default)();
// middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// base route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Building a Music Library System server is running",
        data: null,
    });
});
// routes
app.use("/api/v1", root_routes_1.rootRoutes);
// 404 route not found
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Not Found",
        error: "API endpoint you hit is not found",
    });
    next();
});
// global error handler
app.use((error, req, res, next) => {
    res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error,
    });
});
// starting application
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
