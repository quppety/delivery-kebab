const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const CourierOrders = require('../views/courier/CourierOrders');
const Profile = require('../views/courier/Profile');

const { Order, Courier } = require('../../db/models');

router.get('/couriers/profile', async (req, res) => {
  const username = req.session?.user;
  renderTemplate(Profile, { username }, res);
});

router.get('/couriers/orders', async (req, res) => {
  const username = req.session?.user;
  const couriername = req.session?.user?.couriername;
  const courier = Courier.findOne({ where: { couriername }, raw: true });
  const orders = await Order.findAll({
    where: { courier_id: courier.id },
    raw: true,
  });
  console.log(orders);
  renderTemplate(CourierOrders, { username, orders }, res);
});

module.exports = router;
