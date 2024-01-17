"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.albumValidatorUpdateSchema = exports.albumValidatorPostSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.albumValidatorPostSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    release_year: joi_1.default.number().integer().required(),
    user_id: joi_1.default.number().integer().required(),
    genre: joi_1.default.string().required(),
});
exports.albumValidatorUpdateSchema = joi_1.default.object({
    title: joi_1.default.string().optional(),
    release_year: joi_1.default.number().integer().optional(),
    user_id: joi_1.default.number().integer().optional(),
    genre: joi_1.default.string().optional(),
});
