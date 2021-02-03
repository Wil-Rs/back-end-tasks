// Update with your config settings.

module.exports = {

    client: 'postgresql',
     connection: {
        host: process.env.HOST_DB,
        port: process.env.PORT_DB,
        user: process.env.USER_DB,
        password: process.env.PASS_DB,
        database: process.env.DATABASE_BASE,
        ssl: false,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
