"use strict";
console.log("From knexfile");
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
