import dotenv from "dotenv";
dotenv.config();

module.exports = {
  client: process.env.DB_CLIENT as string,
  connection: {
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER as string,
    password: process.env.DB_PASS as string,
    database: process.env.DB_NAME as string,
  },
  migrations: {
    directory: "../database/migrations",
  },
  seeds: {
    directory: "../database/seeds",
  },
};
