const React = require('react');
const cabinetRoute = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');

const { Order, Client } = require('../../db/models');
const Cabinet = require('../views/cabinet/Cabinet');
const Purchased = require('../views/cabinet/Purchased');

module.exports = cabinetRoute
  .get('/:id/cabinet', (req, res) => {
    try {
      const username = req.session?.user;
      renderTemplate(Cabinet, { username }, res);
    } catch (error) {
      res.sendStatus(500).json(error);
    }
  })
  .post('/:id/cabinet', async (req, res) => {
    try {
      const { id } = req.params;
      const { phone, address } = req.body;
      // Save the form data to the database
      const user = await Client.findOne({ where: { id } });
      if (user) {

        await Client.update({ phone, address }, { where: { id: user.id } });
        res.sendStatus(200);

      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  });
