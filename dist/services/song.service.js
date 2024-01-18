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
class Service {
    findMany() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield song_model_1.SongModel.findMany();
            return data;
        });
    }
    findSongsByAlbum(album_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield song_model_1.SongModel.findSongsByAlbum(album_id);
            return data;
        });
    }
    findSongsByArtist(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield song_model_1.SongModel.findSongsByArtist(user_id);
            return data;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield song_model_1.SongModel.findById(id);
            return data;
        });
    }
    insertOne(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const [newData] = yield song_model_1.SongModel.insertOne(data);
            return newData;
        });
    }
    updateOne(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedRow = yield song_model_1.SongModel.updateOne(id, data);
            return updatedRow[0];
        });
    }
    deleteOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield song_model_1.SongModel.deleteOne(id);
            return data;
        });
    }
}
exports.SongService = new Service();
