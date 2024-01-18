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
class Service {
    findMany() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield artist_model_1.ArtistModel.findMany();
            return data;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield artist_model_1.ArtistModel.findById(id);
            return data === null || data === void 0 ? void 0 : data.rows[0];
        });
    }
    insertOne(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newData = yield artist_model_1.ArtistModel.insertOne(data);
            return newData;
        });
    }
    updateOne(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedRow = yield artist_model_1.ArtistModel.updateOne(id, data);
            return updatedRow[0];
        });
    }
    deleteOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield artist_model_1.ArtistModel.deleteOne(id);
            return data;
        });
    }
}
exports.ArtistService = new Service();
