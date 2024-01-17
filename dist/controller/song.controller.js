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
exports.SongController = void 0;
const song_service_1 = require("../services/song.service");
const findMany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield song_service_1.SongService.findMany();
    res.send(data);
});
const insertOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newData = yield song_service_1.SongService.insertOne(req.body);
    res.send(newData);
});
const updateOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedRow = yield song_service_1.SongService.updateOne(id, req.body);
    res.send(updatedRow);
});
const deleteOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = yield song_service_1.SongService.deleteOne(id);
    res.send(data);
});
const findById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = yield song_service_1.SongService.findById(id);
    res.send(data);
});
exports.SongController = {
    findMany,
    insertOne,
    updateOne,
    deleteOne,
    findById,
};
