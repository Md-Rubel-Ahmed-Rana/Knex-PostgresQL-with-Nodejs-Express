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
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
class Controller {
    findMany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield user_service_1.UserService.findMany();
                res.status(200).json({
                    success: true,
                    message: "Users found",
                    data: users,
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Error finding users",
                    error: error.message,
                });
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const user = yield user_service_1.UserService.findById(id);
                res.status(200).json({
                    success: true,
                    message: "User found",
                    data: user === null || user === void 0 ? void 0 : user.rows,
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Error finding user",
                    error: error.message,
                });
            }
        });
    }
    insertOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = yield user_service_1.UserService.insertOne(req.body);
                res.status(201).json({
                    success: true,
                    message: "User registered successfully",
                    data: newUser,
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Error inserting user",
                    error: error.message,
                });
            }
        });
    }
    updateOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const updatedUser = yield user_service_1.UserService.updateOne(id, req.body);
                res.status(200).json({
                    success: true,
                    message: "User updated successfully",
                    data: updatedUser,
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Error updating user",
                    error: error.message,
                });
            }
        });
    }
    deleteOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                yield user_service_1.UserService.deleteOne(id);
                res.status(200).json({
                    success: true,
                    message: "User deleted successfully",
                    data: null,
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Error deleting user",
                    error: error.message,
                });
            }
        });
    }
}
exports.UserController = new Controller();
