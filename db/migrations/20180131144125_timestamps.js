const tables = ['users', 'profiles', 'skills', 'profiles_skills']

exports.up = function (knex, Promise) {
  return Promise.all(
    tables.map(tableName => {
      return knex.schema.table(tableName, (table) => {
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      })
    }))
}

exports.down = function (knex, Promise) {
  return Promise.all(
    tables.map(tableName => {
      return knex.schema.table(tableName, (table) => {
        table.dropColumn('created_at')
        table.dropColumn('updated_at')
      })
    }))
}
