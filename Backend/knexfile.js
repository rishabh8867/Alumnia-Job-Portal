// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection:
      "postgresql://neondb_owner:3xPnkzgfE9KD@ep-late-term-a50evd21.us-east-2.aws.neon.tech/neondb?sslmode=require",
    pool: {
      min: 2,
      max: 10,
    },
    migrations: { directory: "./migrations" },
    seeds: { directory: "./seeds" },
  },
};
