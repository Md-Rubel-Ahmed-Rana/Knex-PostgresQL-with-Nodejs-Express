"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
const environment = process.env.NODE_ENV || "development";
const knex_1 = __importDefault(require("knex"));
const knexfile_1 = require("../config/knexfile");
// const config = require("../config/knexfile")[environment];
exports.Model = (0, knex_1.default)(knexfile_1.knexConfig.development);
