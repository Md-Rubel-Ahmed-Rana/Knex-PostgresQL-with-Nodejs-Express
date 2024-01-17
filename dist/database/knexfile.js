"use strict";
module.exports = {
    client: "postgresql",
    connection: {
        host: "localhost",
        user: "postgres",
        password: "admin",
        database: "postgres",
    },
    migrations: {
        directory: "../database/migrations",
    },
    seeds: {
        directory: "../database/seeds",
    },
};
