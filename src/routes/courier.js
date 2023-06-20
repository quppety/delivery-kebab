const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const CourierOrders = require('../views/courier/CourierOrders');
const Profile = require('../views/courier/Profile');

const { Order, User } = require('../../db/models');

router.post('/new-order', async (req, res) => {
  //   const username = req.session?.username;
  const { name, price, address, image } = req.body;
  try {
    const courierData = await User.findOne({
      // ! модель User заменить на Courier
      where: { username: 'john' }, // ! только для теста
      raw: true,
    });
    const order = await Order.create({
      name,
      price,
      image: 'none', //! type: 'string violation',
      client_id: courierData.id,
      courier_id: courierData.id,
      curr_location: address,
      status: 'Размещен',
    });
    if (order) {
      // ! посмотреть что возвращает order
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
  }
});

router.patch('/orders', async (req, res) => {
  //   const username = req.session?.username;
  try {
    const currOrder = await Order.findOne({
      where: { id: req.params.id }, // ?
      raw: true,
    });
    await Order.update(
      { status: 'Доставлен' },
      { where: { id: req.params.id } },
    );
    res.sendStatus(200); // ? else на случай ошибки
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
