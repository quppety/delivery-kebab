const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const CourierOrders = require('../views/courier/CourierOrders');
const Profile = require('../views/courier/Profile');

const { Order } = require('../../db/models');

router.get('/profile', async (req, res) => {
  const username = req.session?.username;
  renderTemplate(Profile, { username }, res);
});

router.get('/orders', async (req, res) => {
  const username = req.session?.username;
  // const courier = Courier.findOne({where: {username}}, raw:true )
  // const orders = Order.findAll({ where: {courier_id: courier.id }, raw: true})
  // и прокинуть orders в пропс
  const orders = Order.findAll({
    where: { courier_id: 1 },
    raw: true,
  });
  renderTemplate(CourierOrders, { username, orders }, res);
});

module.exports = router;
