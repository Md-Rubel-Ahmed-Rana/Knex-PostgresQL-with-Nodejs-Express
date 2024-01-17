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
exports.ArtistModel = void 0;
const knex_1 = require("../database/knex");
class ArtistModel {
    static all() {
        return __awaiter(this, void 0, void 0, function* () {
            return knex_1.Model.select("*").from(this.tableName);
        });
    }
    static insert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, knex_1.Model)(this.tableName).insert(data).returning("*");
        });
    }
    static getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return knex_1.Model.raw(`select * from ${this.tableName} where id = ${id}`);
        });
    }
    static update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, knex_1.Model)(this.tableName).where({ id }).update(data).returning("*");
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, knex_1.Model)(this.tableName).where({ id }).del().returning("*");
        });
    }
}
exports.ArtistModel = ArtistModel;
ArtistModel.tableName = "artists";
