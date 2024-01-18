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
exports.postService = void 0;
const knex_1 = require("../database/knex");
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield knex_1.Model.select("*").from("posts");
    return posts;
});
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield (0, knex_1.Model)("posts").insert(data).returning("*");
    return post;
});
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield (0, knex_1.Model)("posts")
        .where({ id })
        .update(data)
        .returning("*");
    return updatedUser;
});
const deletePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield (0, knex_1.Model)("posts").where({ id }).del().returning("*");
    return post;
});
const getPost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield knex_1.Model.raw(`select * from posts where id = ${id}`);
    return post;
});
exports.postService = {
    getAll,
    create,
    update,
    deletePost,
    getPost,
};
