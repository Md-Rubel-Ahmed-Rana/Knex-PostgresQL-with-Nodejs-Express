export const knexConfig = {
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
