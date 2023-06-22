const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');

const { Offer, Client } = require('../../db/models');

router.get('/', async (req, res) => {
  const { user } = req.session;
  const offers = await Offer.findAll({
    order: [['id', 'ASC']],
    where: { status: 'Размещен' },
  });
  renderTemplate(Main, { user, offers }, res);
});

router.get('/map', async (req, res) => {
  const username = req.session?.user;
  // const couriername = req.session?.user?.couriername;
  if (username) {
    const addressClient = await Client.findOne({ where: { id: username.id } });
    const addressCourier = await Offer.findAll({
      order: [['id', 'ASC']],
      where: { status: 'Размещен' },
    });
    console.log(addressCourier);
    res.send([addressClient, addressCourier]);
  }

  // console.log(addressClient.address);
});

module.exports = router;
