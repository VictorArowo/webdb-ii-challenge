exports.seed = function(knex) {
  return knex('cars')
    .truncate()
    .then(function() {
      return knex('cars').insert([
        { VIN: '23434', make: 'Toyota', model: 'Avensis', mileage: 231 },
        { VIN: 'ewfwef', make: 'Toyota', model: 'Avensis', mileage: 231 },
        { VIN: 'fwefwefww', make: 'Toyota', model: 'Avensis', mileage: 231 }
      ]);
    });
};
