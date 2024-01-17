import knex from "knex";
const knexConfig = require("./knexfile");

console.log(knexConfig.client);
export const Model = knex(knexConfig);
