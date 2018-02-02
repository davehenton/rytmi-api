// https://github.com/tgriesser/knex/issues/46

exports.up = function (knex, Promise) {
  return Promise.all([
    knex.raw('alter table profiles alter column user_id set not null'),
    knex.raw('alter table profiles_skills alter column profile_id set not null'),
    knex.raw('alter table profiles_skills alter column skill_id set not null')
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.raw('alter table profiles alter column user_id drop not null'),
    knex.raw('alter table profiles_skills alter column profile_id drop not null'),
    knex.raw('alter table profiles_skills alter column skill_id drop not null')
  ])
}
