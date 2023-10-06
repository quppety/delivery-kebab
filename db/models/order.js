const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(
        models.User,
        { foreignKey: 'user_id' },
        { onDelete: 'CASCADE' },
      );
      this.belongsTo(
        models.Offer,
        { foreignKey: 'offer_id' },
        { onDelete: 'CASCADE' },
      );
    }
  }
  Order.init(
    {
      user_id: DataTypes.INTEGER,
      offer_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Order',
    },
  );
  return Order;
};
