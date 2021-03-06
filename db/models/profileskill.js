module.exports = (sequelize, DataTypes) => {
  let ProfileSkill = sequelize.define('ProfileSkill', {
    knows: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 5
      }
    },
    wantsTo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 5
      }
    },
    visibleInCV: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    description: DataTypes.TEXT
  })

  ProfileSkill.associate = (models) => {
    models.ProfileSkill.belongsTo(models.Profile, {foreignKey: 'profileId'})
    models.ProfileSkill.belongsTo(models.Skill, {foreignKey: 'skillId'})
  }

  return ProfileSkill
}
