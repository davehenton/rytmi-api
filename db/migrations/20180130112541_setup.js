exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', (table) => {
      table.increments('id')
      table.string('username', 64).notNullable()
      table.string('last_name').notNullable()
      table.string('first_name').notNullable()
      table.string('email').notNullable()
      table.string('phone')
      table.date('birthday')
      table.boolean('active').notNullable()
      table.boolean('admin').notNullable()
      table.string('password', 64).notNullable()
    }),
    knex.schema.createTable('profiles', (table) => {
      table.increments('id')
      table.integer('user_id').references('users.id')
      table.string('title', 64)
      table.text('description')
      table.json('links')
      table.string('photo_path')
      table.boolean('active').notNullable()
    }),
    knex.schema.createTable('skills', (table) => {
      table.increments('id')
      table.string('name', 64).notNullable().unique()
      table.text('description')
    }),
    knex.schema.createTable('profiles_skills', (table) => {
      table.increments('id')
      table.integer('profile_id').references('profiles.id')
      table.integer('skill_id').references('skills.id')
      table.integer('knows').notNullable()
      table.integer('wants_to').notNullable()
      table.boolean('visible_in_cv').notNullable()
      table.text('description')
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('profiles_skills'),
    knex.schema.dropTable('skills'),
    knex.schema.dropTable('profiles'),
    knex.schema.dropTable('users')
  ])
}
