// Update with your config settings.

module.exports = {

    client: 'postgresql',
    connection: `postgres://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.HOST_DB}:${process.env.PORT_DB}/${process.env.DATABASE_BASE}?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory`,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
