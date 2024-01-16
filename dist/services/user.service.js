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
exports.userService = void 0;
const knex_1 = require("../database/knex");
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield knex_1.Model.select("*").from("users");
    return users;
});
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield (0, knex_1.Model)("users").insert(data).returning("*");
    return newUser;
});
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield (0, knex_1.Model)("users")
        .where({ id })
        .update(data)
        .returning("*");
    return updatedUser;
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield (0, knex_1.Model)("users").where({ id }).del().returning("*");
    return updatedUser;
});
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield knex_1.Model.raw(`select * from users where id = ${id}`);
    return user;
});
exports.userService = {
    getAll,
    create,
    update,
    deleteUser,
    getUser,
};
