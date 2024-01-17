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
exports.AlbumService = void 0;
const album_artists_model_1 = require("../model/album.artists.model");
const album_model_1 = require("../model/album.model");
const findMany = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield album_model_1.AlbumModel.findMany();
    return data;
});
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield album_model_1.AlbumModel.findById(id);
    return data === null || data === void 0 ? void 0 : data.rows[0];
});
const insertOne = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const [newData] = yield album_model_1.AlbumModel.insertOne(data);
    // create album_artist
    if (newData) {
        const albumArtistData = {
            album_id: newData.id,
            artist_id: newData.user_id,
        };
        yield album_artists_model_1.AlbumArtistModel.insertOne(albumArtistData);
        return newData;
    }
    else {
        return "Album did't added";
    }
});
const updateOne = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedRow = yield album_model_1.AlbumModel.updateOne(id, data);
    return updatedRow[0];
});
const deleteOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield album_model_1.AlbumModel.deleteOne(id);
    return data;
});
exports.AlbumService = {
    findMany,
    insertOne,
    updateOne,
    findById,
    deleteOne,
};
