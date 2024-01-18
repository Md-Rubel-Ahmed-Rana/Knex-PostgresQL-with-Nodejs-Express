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
exports.AuthService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = require("../model/user.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Service {
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_model_1.UserModel.findByEmail(email);
            if (!user) {
                throw new Error("User not found");
            }
            // match password
            const isMatchedPassword = yield bcrypt_1.default.compare(password, user.password);
            if (!isMatchedPassword) {
                throw new Error("Incorrect password");
            }
            const jwtPayload = {
                id: user.id,
                email: user.email,
            };
            // generate access token
            const token = jsonwebtoken_1.default.sign(jwtPayload, process.env.JWT_SECRET, {
                expiresIn: "360d",
            });
            return `Bearer ${token}`;
        });
    }
    auth(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_model_1.UserModel.findByEmail(email);
            if (!user) {
                throw new Error("User not found");
            }
            return user;
        });
    }
}
exports.AuthService = new Service();
