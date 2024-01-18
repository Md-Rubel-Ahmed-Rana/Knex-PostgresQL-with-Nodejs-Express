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
exports.down = exports.up = void 0;
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        yield knex.schema.createTable("albums", (table) => {
            table.increments("id").primary();
            table.string("title").notNullable();
            table.integer("release_year");
            table.string("genre");
            table
                .integer("user_id")
                .unsigned()
                .references("id")
                .inTable("users")
                .onDelete("CASCADE");
            table.timestamps(true, true);
        });
        yield knex.schema.createTable("album_artists", (table) => {
            table.increments("id").primary();
            table
                .integer("album_id")
                .unsigned()
                .references("id")
                .inTable("albums")
                .onDelete("CASCADE");
            table
                .integer("artist_id")
                .unsigned()
                .references("id")
                .inTable("artists")
                .onDelete("CASCADE");
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        yield knex.schema.dropTableIfExists("album_artists");
        yield knex.schema.dropTableIfExists("albums");
    });
}
exports.down = down;
