const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Offer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
      });
      this.hasMany(models.Order, {
        foreignKey: 'offer_id',
        onDelete: 'CASCADE',
      });
    }
  }
  Offer.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      image: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      curr_location: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Offer',
    },
  );
  return Offer;
};
