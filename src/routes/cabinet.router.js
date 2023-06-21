const React = require('react');
const { ReactDOMServer } = require('react-dom-server');
const cabinetRoute = require('express').Router();
const Purchased = require('../views/cabinet/Purchased');
const renderTemplate = require('../lib/renderTemplate');

const { Order } = require('../../db/models');
const { User } = require('../../db/models');
const Cabinet = require('../views/cabinet/Cabinet');

module.exports = cabinetRoute
  .post('/users/:id/cabinet', async (req, res) => {
    try {
      const { id } = req.params;
      const { username, phone, address } = req.body;

      // Save the form data to the database
      const user = await User.findOne({ where: { id } });
      if (user) {
        const order = await Order.create({ username, phone, address });
        res.status(200).json(order); // поменять нв то чтобы высвеячивадллось окошкаом
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  })
  .get('/users/:id/cabinet/valid', (res, req) => {
    try {
      renderTemplate(Purchased, { orderId }, res);
    } catch (error) {
      res.sendStatus(500).json(error);
    }
  });
