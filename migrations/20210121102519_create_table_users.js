
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
      table.increments('id').primary() // campo auto incrementado de chave primaria
      table.string('name').notNull() // notNull nao pode ficar vazio
      table.string('email').notNull().unique() // unique seria que nao pode ter outro repetido
      table.string('password').notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
  // sempre ter o return senao da problema
};
