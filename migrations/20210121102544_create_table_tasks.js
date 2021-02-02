
exports.up = function(knex) {
  return knex.schema.createTable('tasks', table => {
      table.increments('id').primary()
      table.string('desc').notNull()
      table.datetime('estimateAt')
      table.datetime('doneAt')
      table.integer('userId').references('id')
        .inTable('users').notNull()
        // references => referencia a o nome da coluna que sera usada no caso o coluna id
        // inTable => o nome da table que sera referenciada no caso a tabela de usuarios 
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks')
};
