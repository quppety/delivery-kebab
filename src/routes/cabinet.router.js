const cabinetRoute = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const isAuth = require('../middleware/isAuth');

const { Order, Client, Offer } = require('../../db/models');
const Cabinet = require('../views/cabinet/Cabinet');

module.exports = cabinetRoute
  .get('/:id/cabinet', isAuth, async (req, res) => {
    try {
      const username = req.session?.user;
      const currClient = await Client.findOne({
        where: { username: username.username },
        raw: true,
      });
      const orders = await Order.findAll({
        where: { client_id: currClient.id },
        include: [Offer],
        raw: true,
        nest: true,
      });
      renderTemplate(Cabinet, { username, orders, currClient }, res);
    } catch (error) {
      res.sendStatus(500).json(error);
    }
  })
  .post('/:id/cabinet', isAuth, async (req, res) => {
    try {
      const { id } = req.params;
      const { phone, address } = req.body;
      // Save the form data to the database
      const user = await Client.findOne({ where: { id } });
      if (user) {
        await Client.update({ phone, address }, { where: { id: user.id } });
        req.session.user.phone = phone;
        req.session.user.address = address;

        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  });
