exports.up = function(knex) {
  return knex.schema.table('cars', table => {
    table.text('transmission_type', 128);
    table.text('status', 128);
  });
};

exports.down = function(knex) {
  return knex.schema.table('cars', table => {
    table.dropColumn('transmission_type');
    table.dropColumn('status');
  });
};
