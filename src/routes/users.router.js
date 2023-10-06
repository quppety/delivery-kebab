const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');

const { User } = require('../../db/models');
const isAuth = require('../middleware/isAuth');

router.post('/register', async (req, res) => {
  const { login, email, password, isCourier } = req.body;
  const hashPass = await bcrypt.hash(password, 10);
  const [user, created] = await User.findOrCreate({
    where: { [Op.or]: [{ username: login }, { email }] },
    defaults: {
      username: login,
      email,
      password: hashPass,
      isCourier,
    },
  });
  if (created) {
    req.session.user = {
      username: user.username,
      phone: user.phone,
      address: user.address,
      isCourier: user.isCourier,
    };
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const userData = await User.findOne({ where: { email } });

    const user = userData ? userData.get({ plain: true }) : null;

    if (user) {
      const hashPass = await bcrypt.compare(password, user.password);

      if (hashPass) {
        req.session.user = {
          username: user.username,
          phone: user.phone,
          address: user.address,
          isCourier: user.isCourier,
        };
        res.sendStatus(200);
      } else {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(400);
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

router.post('/profile/info', isAuth, async (req, res) => {
  try {
    const { user } = req.session;
    const { phone, address } = req.body;
    const currUser = await User.findOne({ where: { username: user.username } });
    if (currUser) {
      await User.update(
        { phone, address },
        { where: { username: user.username } },
      );
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

module.exports = router;
