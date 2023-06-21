const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const register = require('../views/Register');
const login = require('../views/Login');
const { Courier } = require('../../db/models');
router.get('/register', async (req, res) => {
  renderTemplate(register, {}, res);
});

router.post('/register', async (req, res) => {
  const { login, email, password } = req.body;

  const hashPass = await bcrypt.hash(password, 10);
  const [courier, created] = await Courier.findOrCreate({
    where: { [Op.or]: [{ couriername: login }, { email }] },
    defaults: { couriername: login, email, password: hashPass },
  });
  if (created) {
    req.session.user = courier;
    res.json({ ok: 'ok ' });
  } else {
    if (courier.couriername === login) {
      res.json({ login: 'login ' });
    } else if (courier.email === email) {
      res.json({ email: 'Email ' });
    } else {
      res.status(400).json({});
    }
  }
});

router.get('/login', async (req, res) => {
  renderTemplate(login, {}, res);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const userData = await Courier.findOne({ where: { email } });
    const courier = userData ? userData.get({ plain: true }) : null;

    if (courier) {
      const hashPass = await bcrypt.compare(password, courier.password);

      if (hashPass) {
        req.session.user = courier;

        res.json(courier);
      } else {
        res.redirect('/register');
      }
    } else {
      res.status(400).json({});
    }
  } catch (error) {
    res.json(error);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.redirect('/');
  });
});

module.exports = router;
