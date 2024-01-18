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
exports.ArtistController = void 0;
const artist_service_1 = require("../services/artist.service");
class Controller {
    findMany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield artist_service_1.ArtistService.findMany();
                res.status(200).json({
                    success: true,
                    message: "Artists found",
                    data: data,
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Error finding artists",
                    error: error.message,
                });
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const data = yield artist_service_1.ArtistService.findById(id);
                res.status(200).json({
                    success: true,
                    message: "Artist found",
                    data: data,
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Error finding artist",
                    error: error.message,
                });
            }
        });
    }
    insertOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newData = yield artist_service_1.ArtistService.insertOne(req.body);
                res.status(201).json({
                    success: true,
                    message: "Artist created",
                    data: newData,
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Error creating artist",
                    error: error.message,
                });
            }
        });
    }
    updateOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const updatedRow = yield artist_service_1.ArtistService.updateOne(id, req.body);
                res.status(200).json({
                    success: true,
                    message: "Artist updated",
                    data: updatedRow,
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Error updating artist",
                    error: error.message,
                });
            }
        });
    }
    deleteOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield artist_service_1.ArtistService.deleteOne(id);
                res.status(200).json({
                    success: true,
                    message: "Artist deleted",
                    data: null,
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Error deleting artist",
                    error: error.message,
                });
            }
        });
    }
}
exports.ArtistController = new Controller();
