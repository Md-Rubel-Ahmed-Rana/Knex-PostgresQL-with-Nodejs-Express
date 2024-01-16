"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.knexConfig = void 0;
exports.knexConfig = {
    development: {
        client: "postgresql",
        connection: {
            host: "localhost",
            user: "postgres",
            password: "admin",
            database: "postgres",
        },
        migrations: {
            directory: "../db/migrations",
        },
        seeds: {
            directory: __dirname + "../db/seeds",
        },
    },
};
