"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.songValidatorUpdateSchema = exports.songValidatorPostSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.songValidatorPostSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    duration: joi_1.default.number().required(),
    album_id: joi_1.default.number().integer().required(),
    user_id: joi_1.default.number().integer().required(),
});
exports.songValidatorUpdateSchema = joi_1.default.object({
    title: joi_1.default.string().optional(),
    duration: joi_1.default.number().optional(),
    album_id: joi_1.default.number().integer().optional(),
    user_id: joi_1.default.number().integer().optional(),
});
