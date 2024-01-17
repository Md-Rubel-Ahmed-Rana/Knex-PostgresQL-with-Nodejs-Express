"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
const knex_1 = __importDefault(require("knex"));
const knexConfig = require("./knexfile");
console.log(knexConfig.client);
exports.Model = (0, knex_1.default)(knexConfig);
