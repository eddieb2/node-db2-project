exports.up = function (knex) {
  return knex.schema.createTable('cars', (table) => {
    table.increments('id');
    table.integer('VIN').notNullable().unique().index();
    table.string('Make').notNullable();
    table.string('Model').notNullable();
    table.integer('Mileage').notNullable();

    table.string('TransmissionType');
    table.string('Title');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars');
};

/*
- The critical information for each car is the VIN, make, model, and mileage.
- They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.
*/
