// Update with your config settings.

module.exports = {

    client: 'postgresql',
    connection: {
        url: process.env.DATABASE_URL
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
