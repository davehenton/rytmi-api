const rosie = require('rosie')
const factory = rosie.Factory
const faker = require('faker')

factory.define('skill')
  .sequence('id')
  .attr('name')
  .attr('description', () => { return faker.lorem.paragraph() })

factory.define('user')
  .sequence('id')
  .attr('username', () => { return faker.internet.userName() })
  .attr('last_name', () => { return faker.name.lastName() })
  .attr('first_name', () => { return faker.name.firstName() })
  .attr('email', () => { return faker.internet.email() })
  .attr('phone', () => { return faker.phone.phoneNumber() })
  .attr('birthday', () => { return faker.date.past(20, '1997-12-31') })
  .attr('phone', () => { return faker.phone.phoneNumber() })
  .attr('admin', () => { return faker.random.boolean() })
  .attr('active', () => { return faker.random.boolean() })
  .attr('password', () => { return faker.internet.password(24) })

factory.define('profile')
  .sequence('id')
  .attr('user_id')
  .attr('title', () => { return faker.name.findName() })
  .attr('description', () => { return faker.lorem.paragraphs() })
  .attr('links')
  .attr('photo_path', () => { return faker.internet.avatar() })
  .attr('active', () => { return faker.random.boolean() })

factory.define('profileSkill')
  .sequence('id')
  .attr('profile_id')
  .attr('skill_id')
  .attr('knows', () => { return faker.random.number(5) })
  .attr('wants_to', () => { return faker.random.number(5) })
  .attr('visible_in_cv', () => { return faker.random.boolean() })
  .attr('description', () => { return faker.lorem.paragraphs() })

const skillNames = ['Vue.js', 'Node.js', 'JavaScript', 'Java', 'Python', 'React.js', 'PHP', 'Linux', 'Kubernetes', 'Docker']
const items = 50
const db = {
  users: [],
  profiles: [],
  skills: [],
  profileSkills: []
}

skillNames.forEach((name) => {
  db.skills.push(factory.build('skill', { name: name }))
})

for (let i = 0; i < items; i++) {
  let user = factory.build('user')
  db.users.push(user)

  let links = []
  for (let j = 0; j < faker.random.number(5); j++) {
    links.push(faker.internet.url())
  }
  let profile = factory.build('profile', {
    user_id: user.id,
    links: JSON.stringify(links) // http://knexjs.org/#Schema-json
  })
  db.profiles.push(profile)

  let randomSkills = []
  let amount = faker.random.number(5)
  while (randomSkills.length < amount) {
    let skill = db.skills[Math.floor(Math.random() * db.skills.length)]
    if (randomSkills.indexOf(skill) > -1) continue
    else randomSkills.push(skill)
  }
  randomSkills.forEach((skill) => {
    db.profileSkills.push(factory.build('profileSkill', {
      profile_id: profile.id,
      skill_id: skill.id
    }))
  })
}

exports.seed = function (knex, Promise) {
  return knex('profiles_skills').del()
    .then(() => { return knex('skills').del() })
    .then(() => { return knex('profiles').del() })
    .then(() => { return knex('users').del() })
    .then(() => {
      return knex('users').insert(db.users)
        .then(() => { return knex('profiles').insert(db.profiles) })
        .then(() => { return knex('skills').insert(db.skills) })
        .then(() => { return knex('profiles_skills').insert(db.profileSkills) })
    })
}
