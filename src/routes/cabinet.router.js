const React = require('react');
const cabinetRoute = require('express').Router();
const Purchased = require('../views/cabinet/Purchased');
const renderTemplate = require('../lib/renderTemplate');

const { Order } = require('../../db/models');
const { Client } = require('../../db/models');
const Cabinet = require('../views/cabinet/Cabinet');

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
      const { username, phone, address } = req.body;

      // Save the form data to the database
      const user = await Client.findOne({ where: { id } });
      if (user) {
        const updClient = await Client.update(
          { username, phone, address },
          { where: { id: user.id } },
        );
        res.status(200).json(updClient);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  });
