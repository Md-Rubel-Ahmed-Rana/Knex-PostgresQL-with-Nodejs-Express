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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("../services/auth.service");
class Controller {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const token = yield auth_service_1.AuthService.login(email, password);
                // Set the token in the cookie
                res.cookie("accessToken", token, { httpOnly: true });
                res.status(200).json({
                    success: true,
                    message: "Login successful",
                    token: token,
                });
            }
            catch (error) {
                res.status(401).json({
                    success: false,
                    message: "Login failed",
                    error: error.message,
                });
            }
        });
    }
    auth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.body;
                const user = yield auth_service_1.AuthService.auth(email);
                res.status(200).json({
                    success: true,
                    message: "Authentication successful",
                    user: user,
                });
            }
            catch (error) {
                res.status(401).json({
                    success: false,
                    message: "Authentication failed",
                    error: error.message,
                });
            }
        });
    }
    logout(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.clearCookie("accessToken");
                res.status(200).json({
                    success: true,
                    message: "Logout successful",
                    data: null,
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Logout failed",
                    error: error.message,
                });
            }
        });
    }
}
exports.AuthController = new Controller();
