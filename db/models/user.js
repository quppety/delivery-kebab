const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(
        models.Order,
        { foreignKey: 'user_id' },
        { onDelete: 'CASCADE' },
      );
      this.hasMany(
        models.Offer,
        { foreignKey: 'user_id' },
        { onDelete: 'CASCADE' },
      );

      // define association here
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      isCourier: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
