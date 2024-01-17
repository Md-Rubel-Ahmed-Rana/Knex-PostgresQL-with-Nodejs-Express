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
class Controller {
    findMany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield album_service_1.AlbumService.findMany();
                res.status(200).json({
                    success: true,
                    message: "Albums found",
                    data: data,
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Error finding albums",
                    error: error.message,
                });
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const data = yield album_service_1.AlbumService.findById(id);
                res.status(200).json({
                    success: true,
                    message: "Album found",
                    data: data,
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Error finding album",
                    error: error.message,
                });
            }
        });
    }
    insertOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newData = yield album_service_1.AlbumService.insertOne(req.body);
                res.status(201).json({
                    success: true,
                    message: "Album created successfully",
                    data: newData,
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Error inserting album",
                    error: error.message,
                });
            }
        });
    }
    updateOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const updatedRow = yield album_service_1.AlbumService.updateOne(id, req.body);
                res.status(200).json({
                    success: true,
                    message: "Album updated successfully",
                    data: updatedRow,
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Error updating album",
                    error: error.message,
                });
            }
        });
    }
    deleteOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield album_service_1.AlbumService.deleteOne(id);
                res.status(200).json({
                    success: true,
                    message: "Album updated successfully",
                    data: null,
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Error deleting album",
                    error: error.message,
                });
            }
        });
    }
}
exports.AlbumController = new Controller();
