const environment = process.env.NODE_ENV || "development";
import knex from "knex";
import { knexConfig } from "../config/knexfile";

// const config = require("../config/knexfile")[environment];

export const Model = knex(knexConfig.development);
