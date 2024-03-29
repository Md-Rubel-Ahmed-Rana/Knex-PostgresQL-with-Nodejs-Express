"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.artistValidatorUpdateSchema = exports.artistValidatorPostSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.artistValidatorPostSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
});
exports.artistValidatorUpdateSchema = joi_1.default.object({
    id: joi_1.default.number().optional(),
    name: joi_1.default.string().optional(),
    created_at: joi_1.default.date().optional(),
    updated_at: joi_1.default.date().optional(),
});
