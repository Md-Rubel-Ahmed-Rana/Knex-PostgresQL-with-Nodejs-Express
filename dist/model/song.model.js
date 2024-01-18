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
exports.SongModel = void 0;
const knex_1 = require("../database/knex");
const knex_populate = require("knex-populate");
class SongModel {
    static findMany() {
        return __awaiter(this, void 0, void 0, function* () {
            const songs = yield knex_populate(knex_1.Model, this.tableName)
                .find()
                .populate("users", "user_id", "artist")
                .populate("albums", "album_id", "album")
                .exec();
            songs === null || songs === void 0 ? void 0 : songs.forEach((song) => {
                var _a;
                (_a = song === null || song === void 0 ? void 0 : song.artist[0]) === null || _a === void 0 ? true : delete _a.password;
            });
            return songs;
        });
    }
    static findSongsByAlbum(album_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const songs = yield knex_populate(knex_1.Model, this.tableName)
                .find({ album_id })
                .populate("users", "user_id", "artist")
                .populate("albums", "album_id", "album")
                .exec();
            songs === null || songs === void 0 ? void 0 : songs.forEach((song) => {
                var _a;
                (_a = song === null || song === void 0 ? void 0 : song.artist[0]) === null || _a === void 0 ? true : delete _a.password;
            });
            return songs;
        });
    }
    static findSongsByArtist(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const songs = yield knex_populate(knex_1.Model, this.tableName)
                .find({ user_id })
                .populate("users", "user_id", "artist")
                .populate("albums", "album_id", "album")
                .exec();
            songs === null || songs === void 0 ? void 0 : songs.forEach((song) => {
                var _a;
                (_a = song === null || song === void 0 ? void 0 : song.artist[0]) === null || _a === void 0 ? true : delete _a.password;
            });
            return songs;
        });
    }
    static insertOne(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, knex_1.Model)(this.tableName).insert(data).returning("*");
        });
    }
    static findById(id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const [song] = yield knex_populate(knex_1.Model, this.tableName)
                .findById(id)
                .populate("users", "user_id", "artist")
                .populate("albums", "album_id", "album")
                .exec();
            (_a = song === null || song === void 0 ? void 0 : song.artist) === null || _a === void 0 ? void 0 : _a.forEach((artist) => {
                artist === null || artist === void 0 ? true : delete artist.password;
            });
            return song;
        });
    }
    static updateOne(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, knex_1.Model)(this.tableName).where({ id }).update(data).returning("*");
        });
    }
    static deleteOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, knex_1.Model)(this.tableName).where({ id }).del().returning("*");
        });
    }
}
exports.SongModel = SongModel;
SongModel.tableName = "songs";
