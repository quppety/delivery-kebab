const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');

const { Offer } = require('../../db/models');

router.get('/', async (req, res) => {
  const { user } = req.session;
  const offers = await Offer.findAll({ where: { status: 'Размещен' } });
  renderTemplate(Main, { user, offers }, res);
});

module.exports = router;
