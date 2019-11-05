exports.up = function(knex) {
  return knex.schema.createTable('sales', table => {
    table.increments('id');
    table
      .integer('car_id')
      .references('id')
      .inTable('cars');

    table.text('customer_name', 128).notNullable();
    table.decimal('price').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales');
};
