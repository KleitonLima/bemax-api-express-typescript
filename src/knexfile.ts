import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      host: "containers-us-west-46.railway.app",
      port: 7335,
      database: "railway",
      user: "postgres",
      password: "Y42wGvpL1vnfwrTiL77t",
    },
  },
};

export default config;
