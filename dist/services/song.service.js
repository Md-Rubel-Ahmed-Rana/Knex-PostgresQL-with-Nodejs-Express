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
exports.SongService = void 0;
const song_model_1 = require("../model/song.model");
const findMany = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield song_model_1.SongModel.findMany();
    return data;
});
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield song_model_1.SongModel.findById(id);
    return data === null || data === void 0 ? void 0 : data.rows[0];
});
const insertOne = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const [newData] = yield song_model_1.SongModel.insertOne(data);
    return newData;
});
const updateOne = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedRow = yield song_model_1.SongModel.updateOne(id, data);
    return updatedRow[0];
});
const deleteOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield song_model_1.SongModel.deleteOne(id);
    return data;
});
exports.SongService = {
    findMany,
    insertOne,
    updateOne,
    findById,
    deleteOne,
};
