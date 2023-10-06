const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const isAuth = require('../middleware/isAuth');

const CourierOrders = require('../views/courier/Orders');
const Profile = require('../views/courier/Profile');

const { Offer, Order, User } = require('../../db/models');
const Account = require('../views/client/Account');
const Register = require('../views/Register');
const Login = require('../views/Login');
const isCourier = require('../middleware/isCourier');

router.get('/register', async (req, res) => {
  renderTemplate(Register, {}, res);
});

router.get('/login', async (req, res) => {
  renderTemplate(Login, {}, res);
});

router.get('/profile', isAuth, async (req, res) => {
  const { user } = req.session;
  if (user?.isCourier) {
    renderTemplate(Profile, { user }, res);
  } else {
    const currClient = await User.findOne({
      where: { username: user.username },
      raw: true,
    });
    const orders = await Order.findAll({
      where: { user_id: currClient.id },
      include: [Offer],
      raw: true,
      nest: true,
    });
    renderTemplate(Account, { orders, currClient }, res);
  }
});

router.get('/orders', isAuth, isCourier, async (req, res) => {
  const { user } = req.session;
  try {
    const currUser = await User.findOne({
      where: { username: user.username },
      raw: true,
    });
    const offers = await Offer.findAll({
      order: [['createdAt', 'DESC']],
      where: { user_id: currUser.id },
      include: [{ model: Order, include: [User] }],
      raw: true,
      nest: true,
    });
    renderTemplate(CourierOrders, { user, offers }, res);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
