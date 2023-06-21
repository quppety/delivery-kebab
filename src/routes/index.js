const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const main = require('../views/Main');

const { Order } = require('../../db/models');

router.get('/', async (req, res) => {
  const { user } = req.session;
  const read = await Order.findAll();

  console.log(read);

  renderTemplate(main, { user, read }, res);
});

module.exports = router;
