export const knex = require("knex")({
    client: "pg",
    connection: {
      host: "containers-us-west-46.railway.app",
      port: 7335,
      database: "railway",
      user: "postgres",
      password: "Y42wGvpL1vnfwrTiL77t",
    },
  });