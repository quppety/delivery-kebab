const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Courier, { foreignKey: 'courier_id' });
      this.belongsTo(models.Client, { foreignKey: 'client_id' });
    }
  }
  Order.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      image: DataTypes.STRING,
      courier_id: DataTypes.INTEGER,
      client_id: DataTypes.INTEGER,
      curr_location: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Order',
    },
  );
  return Order;
};
