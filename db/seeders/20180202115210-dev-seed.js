const rosie = require('rosie')
const factory = rosie.Factory
const faker = require('faker')

factory.define('skill')
  .sequence('id')
  .attr('name')
  .attr('description', () => { return faker.lorem.paragraph() })
  .attr('createdAt', () => new Date())
  .attr('updatedAt', () => new Date())

factory.define('user')
  .sequence('id')
  .attr('username', () => { return faker.internet.userName() })
  .attr('admin', () => { return faker.random.boolean() })
  .attr('active', () => { return faker.random.boolean() })
  .attr('password', () => { return faker.internet.password(24) })
  .attr('createdAt', () => new Date())
  .attr('updatedAt', () => new Date())

factory.define('profile')
  .sequence('id')
  .attr('userId')
  .attr('lastName', () => { return faker.name.lastName() })
  .attr('firstName', () => { return faker.name.firstName() })
  .attr('email', () => { return faker.internet.email() })
  .attr('phone', () => { return faker.phone.phoneNumber() })
  .attr('birthday', () => { return faker.date.past(20, '1997-12-31') })
  .attr('title', () => { return faker.name.findName() })
  .attr('description', () => { return faker.lorem.paragraphs() })
  .attr('links')
  .attr('photoPath', () => { return faker.internet.avatar() })
  .attr('active', () => { return faker.random.boolean() })
  .attr('createdAt', () => new Date())
  .attr('updatedAt', () => new Date())

factory.define('profileSkill')
  .sequence('id')
  .attr('profileId')
  .attr('skillId')
  .attr('knows', () => { return faker.random.number(5) })
  .attr('wantsTo', () => { return faker.random.number(5) })
  .attr('visibleInCV', () => { return faker.random.boolean() })
  .attr('description', () => { return faker.lorem.paragraphs() })
  .attr('createdAt', () => new Date())
  .attr('updatedAt', () => new Date())

function generateDevSeed () {
  const usersToGenerate = 10
  const skillNames = ['Vue.js', 'Node.js', 'JavaScript', 'Java', 'Python', 'React.js', 'PHP', 'Linux', 'Kubernetes', 'Docker']
  const seed = {
    users: [],
    profiles: [],
    skills: [],
    profileSkills: []
  }

  skillNames.forEach((name) => {
    seed.skills.push(factory.build('skill', { name: name }))
  })

  for (let i = 0; i < usersToGenerate; i++) {
    let user = factory.build('user')
    seed.users.push(user)

    let links = []
    for (let j = 0; j < faker.random.number(5); j++) {
      links.push(faker.internet.url())
    }
    let profile = factory.build('profile', {
      userId: user.id,
      links: JSON.stringify(links)
    })
    seed.profiles.push(profile)

    let randomSkills = []
    let amount = faker.random.number(5)
    while (randomSkills.length < amount) {
      let skill = seed.skills[Math.floor(Math.random() * seed.skills.length)]
      if (randomSkills.indexOf(skill) > -1) continue
      else randomSkills.push(skill)
    }
    randomSkills.forEach((skill) => {
      seed.profileSkills.push(factory.build('profileSkill', {
        profileId: profile.id,
        skillId: skill.id
      }))
    })
  }
  return seed
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    let seed = generateDevSeed()
    return queryInterface.bulkInsert('Users', seed.users)
      .then(() => queryInterface.bulkInsert('Profiles', seed.profiles))
      .then(() => queryInterface.bulkInsert('Skills', seed.skills))
      .then(() => queryInterface.bulkInsert('ProfileSkills', seed.profileSkills))
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProfileSkills')
      .then(() => queryInterface.bulkDelete('Skills'))
      .then(() => queryInterface.bulkDelete('Profiles'))
      .then(() => queryInterface.bulkDelete('Users'))
  }
}
