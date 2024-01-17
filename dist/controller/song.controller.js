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
class Controller {
    findMany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield song_service_1.SongService.findMany();
                res.status(200).json({
                    success: true,
                    message: "Songs found",
                    data: data,
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Error finding songs",
                    error: error.message,
                });
            }
        });
    }
    findSongsByAlbum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const album_id = Number(req.params.album_id);
                const data = yield song_service_1.SongService.findSongsByAlbum(album_id);
                res.status(200).json({
                    success: true,
                    message: "Songs found",
                    data: data,
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Error finding songs",
                    error: error.message,
                });
            }
        });
    }
    findSongsByArtist(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user_id = Number(req.params.user_id);
                const data = yield song_service_1.SongService.findSongsByArtist(user_id);
                res.status(200).json({
                    success: true,
                    message: "Songs found",
                    data: data,
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Error finding songs",
                    error: error.message,
                });
            }
        });
    }
    insertOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newData = yield song_service_1.SongService.insertOne(req.body);
                res.status(201).json({
                    success: true,
                    message: "Song created",
                    data: newData,
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Error creating song",
                    error: error.message,
                });
            }
        });
    }
    updateOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const updatedRow = yield song_service_1.SongService.updateOne(id, req.body);
                res.status(200).json({
                    success: true,
                    message: "Song updated",
                    data: updatedRow,
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Error updating song",
                    error: error.message,
                });
            }
        });
    }
    deleteOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const data = yield song_service_1.SongService.deleteOne(id);
                res.status(200).json({
                    success: true,
                    message: "Song deleted",
                    data: data,
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Error deleting song",
                    error: error.message,
                });
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const data = yield song_service_1.SongService.findById(id);
                res.status(200).json({
                    success: true,
                    message: "Song found",
                    data: data,
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Error finding song",
                    error: error.message,
                });
            }
        });
    }
}
exports.SongController = new Controller();
