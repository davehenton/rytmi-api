module.exports = (sequelize, DataTypes) => {
  let Profile = sequelize.define('Profile', {
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    links: DataTypes.JSON,
    photoPath: DataTypes.STRING,
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  })

  Profile.associate = (models) => {
    models.Profile.belongsTo(models.User, {foreignKey: 'userId'})
    models.Profile.hasMany(models.ProfileSkill, {foreignKey: 'profileId'})
  }

  return Profile
}
