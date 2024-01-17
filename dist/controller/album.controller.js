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
exports.AlbumController = void 0;
const album_service_1 = require("../services/album.service");
const findMany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield album_service_1.AlbumService.findMany();
    res.send(data);
});
const insertOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newData = yield album_service_1.AlbumService.insertOne(req.body);
    res.send(newData);
});
const updateOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedRow = yield album_service_1.AlbumService.updateOne(id, req.body);
    res.send(updatedRow);
});
const deleteOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = yield album_service_1.AlbumService.deleteOne(id);
    res.send(data);
});
const findById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = yield album_service_1.AlbumService.findById(id);
    res.send(data);
});
exports.AlbumController = {
    findMany,
    insertOne,
    updateOne,
    deleteOne,
    findById,
};
