import fs from 'fs'
import path from 'path'
import models from '../db/models'

const migrations = requireModules('../db/migrations')
const seeders = requireModules('../db/seeders')
const sequelize = models.sequelize

function requireModules (relativePath) {
  let fullPath = path.join(__dirname, relativePath)
  return fs.readdirSync(fullPath)
    .filter(file => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js'))
    .map(file => require(path.join(fullPath, file)))
}

function run (modules) {
  return modules.reduce((chain, migration) => {
    return chain.then(() => {
      return migration.up(sequelize.queryInterface, sequelize.Sequelize)
    })
  }, Promise.resolve())
}

function rollback (modules) {
  return [...modules].reverse().reduce((chain, migration) => {
    return chain.then(() => {
      return migration.down(sequelize.queryInterface, sequelize.Sequelize)
    })
  }, Promise.resolve())
}

export default {
  runMigrations: () => {
    return run(migrations)
  },
  rollbackMigrations: () => {
    return rollback(migrations)
  },
  runSeeders: () => {
    return run(seeders)
  },
  rollbackSeeders: () => {
    return rollback(seeders)
  }
}
