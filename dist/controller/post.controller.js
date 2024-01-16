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
exports.postControllers = void 0;
const post_service_1 = require("../services/post.service");
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield post_service_1.postService.getAll();
    res.send(posts);
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield post_service_1.postService.create(req.body);
    res.send(post);
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const post = yield post_service_1.postService.update(id, req.body);
    res.send(post);
});
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const post = yield post_service_1.postService.deletePost(id);
    res.send(post);
});
const getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const posts = yield post_service_1.postService.getPost(id);
    res.send(posts.rows);
});
exports.postControllers = {
    getAll,
    create,
    update,
    deletePost,
    getPost,
};
