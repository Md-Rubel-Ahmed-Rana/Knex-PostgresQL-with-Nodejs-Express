import knex from "knex";
const knexConfig = require("./knexfile");

export const Model = knex(knexConfig);
