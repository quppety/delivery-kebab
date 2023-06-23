const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const isAuth = require('../middleware/isAuth');

const CourierOrders = require('../views/courier/CourierOrders');
const Profile = require('../views/courier/Profile');

const { Offer, Courier, Order, Client } = require('../../db/models');

router.get('/couriers/profile', isAuth, async (req, res) => {
  const username = req.session?.user;
  renderTemplate(Profile, { username }, res);
});

router.get('/couriers/orders', isAuth, async (req, res) => {
  const username = req.session?.user;
  const couriername = req.session?.user?.couriername;
  try {
    const courier = await Courier.findOne({
      where: { couriername },
      raw: true,
    });
    const offers = await Offer.findAll({
      order: [['id', 'ASC']],
      where: { courier_id: courier.id },
      include: [{ model: Order, include: [Client] }],
      raw: true,
      nest: true,
    });
    // console.log(offers);
    renderTemplate(CourierOrders, { username, offers }, res);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
