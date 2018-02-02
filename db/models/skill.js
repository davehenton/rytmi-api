module.exports = (sequelize, DataTypes) => {
  let Skill = sequelize.define('Skill', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT
  })
  return Skill
}
