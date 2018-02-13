import fs from 'fs'
import path from 'path'
import models from '../db/models'

const migrations = requireModules('../db/migrations')
const sequelize = models.sequelize

function requireModules (relativePath) {
  let fullPath = path.join(__dirname, relativePath)
  return fs.readdirSync(fullPath)
    .filter(file => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js'))
    .map(file => require(path.join(fullPath, file)))
}

function runMigrations (modules) {
  return modules.reduce((chain, migration) => {
    return chain.then(() => {
      return migration.up(sequelize.queryInterface, sequelize.Sequelize)
    })
  }, Promise.resolve())
}

export default {
  runMigrations: () => {
    return runMigrations(migrations)
  },
  sequelize
}
