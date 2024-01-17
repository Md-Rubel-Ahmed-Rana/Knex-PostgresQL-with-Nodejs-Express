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
exports.ArtistService = void 0;
const artist_model_1 = require("../model/artist.model");
const findMany = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield artist_model_1.ArtistModel.all();
    return data;
});
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield artist_model_1.ArtistModel.getUserById(id);
    return data === null || data === void 0 ? void 0 : data.rows[0];
});
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newData = yield artist_model_1.ArtistModel.insert(data);
    return newData;
});
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedRow = yield artist_model_1.ArtistModel.update(id, data);
    return updatedRow[0];
});
const deleteOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield artist_model_1.ArtistModel.delete(id);
    return data;
});
exports.ArtistService = {
    findMany,
    create,
    update,
    findById,
    deleteOne,
};
