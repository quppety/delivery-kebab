const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');

const { Offer, User } = require('../../db/models');

router.get('/', async (req, res) => {
  const { user } = req.session;
  const offers = await Offer.findAll({
    order: [['id', 'ASC']],
    where: { status: 'Размещен' },
  });
  renderTemplate(Main, { user, offers }, res);
});

router.get('/map', async (req, res) => {
  const { user } = req.session;
  if (user) {
    const addressClient = await User.findOne({
      where: { username: user.username },
    });
    const addressCourier = await Offer.findAll({
      order: [['id', 'ASC']],
      where: { status: 'Размещен' },
    });
    res.send([addressClient, addressCourier]);
  }
});

module.exports = router;
