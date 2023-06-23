const router = require('express').Router();
const { Op } = require('sequelize');

const isAuth = require('../middleware/isAuth');

const { Order, Client, Offer } = require('../../db/models');

router.post('/get-offer/:id', isAuth, async (req, res) => {
  const { id } = req.params;
  const username = req.session?.user?.username;
  try {
    const currClient = await Client.findOne({ where: { username }, raw: true });
    const currOffer = await Offer.findOne({ where: { id }, raw: true });
    await Offer.update({ status: 'Заказан' }, { where: { id } });
    const newOrder = await Order.create({
      client_id: currClient.id,
      offer_id: currOffer.id,
    });
    if (newOrder) {
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
