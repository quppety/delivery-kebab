const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Client, { foreignKey: 'client_id' });
      this.belongsTo(models.Offer, { foreignKey: 'offer_id' });
    }
  }
  Order.init(
    {
      client_id: DataTypes.INTEGER,
      offer_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Order',
    },
  );
  return Order;
};
