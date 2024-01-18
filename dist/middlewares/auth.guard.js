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
const user_service_1 = require("../services/user.service");
const authGuard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.id;
    const user = yield user_service_1.UserService.findById(id);
    if (!user) {
        res.status(401).json({
            success: false,
            message: "Unauthenticated",
            error: "You are not authenticated user",
        });
    }
    next();
});
exports.default = authGuard;
