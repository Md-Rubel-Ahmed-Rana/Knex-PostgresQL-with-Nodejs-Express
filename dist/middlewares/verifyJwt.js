"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyJwt = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(400).json({
                success: false,
                message: "Did't provide access token",
                error: "You have not sent your access token",
            });
        }
        const extractedToken = token === null || token === void 0 ? void 0 : token.split(" ")[1];
        const isVerified = jsonwebtoken_1.default.verify(extractedToken, process.env.JWT_SECRET);
        if (!isVerified) {
            return res.status(500).json({
                success: false,
                message: "Invalid token",
                error: "Your provide access token is not valid",
            });
        }
        req.email = isVerified.email;
        req.id = isVerified.id;
        next();
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong to verify token",
            error: error.message,
        });
    }
});
exports.default = verifyJwt;
