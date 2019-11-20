
exports.up = function(knex) {
  return knex.schema.createTable("games", games => {
    games.increments()
    games
      .string("title", 128)
      .notNullable()
      .unique()
    games.string("release_date", 128)
      .notNullable()
    games.string("genre", 128)
    games.string("developer", 128)
    games.string("publisher", 128)
    games.boolean("favorite").default(false)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('games')
};
