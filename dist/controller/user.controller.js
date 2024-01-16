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
exports.userController = void 0;
const user_service_1 = require("../services/user.service");
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_service_1.userService.getAll();
    res.send(users);
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield user_service_1.userService.create(req.body);
    res.send(newUser);
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedUser = yield user_service_1.userService.update(id, req.body);
    res.send(updatedUser);
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedUser = yield user_service_1.userService.deleteUser(id);
    res.send(updatedUser);
});
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const users = yield user_service_1.userService.getUser(id);
    res.send(users.rows);
});
exports.userController = {
    getAll,
    create,
    update,
    deleteUser,
    getUser,
};
