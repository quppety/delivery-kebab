const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');

const renderTemplate = require('../lib/renderTemplate');

const Register = require('../views/Register');
const Login = require('../views/Login');

const { Order, Courier, Offer } = require('../../db/models');

router.get('/register', async (req, res) => {
  renderTemplate(Register, {}, res);
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
  } else if (courier.couriername === login) {
    res.json({ login: 'login ' });
  } else if (courier.email === email) {
    res.json({ email: 'Email ' });
  } else {
    res.status(400).json({});
  }
});

router.get('/login', async (req, res) => {
  renderTemplate(Login, {}, res);
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

router.post('/new-order', async (req, res) => {
  const { name, price, address, image } = req.body;
  const username = req.session?.user?.couriername;
  try {
    const courierData = await Courier.findOne({
      where: { couriername: username },
      raw: true,
    });
    const order = await Offer.create({
      name,
      price,
      image: 'none', //! type: 'string violation',
      courier_id: courierData.id,
      curr_location: address,
      status: 'Размещен',
    });
    console.log('новый заказ---------------', order);
    if (order) {
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
    res.end();
  } catch (error) {
    console.log(error);
  }
});

router.patch('/orders', async (req, res) => {
  //   const username = req.session?.username;
  const id = Number(req.body.id);
  console.log('-----------------', id);
  try {
    const currOffer = await Offer.findOne({
      where: { id }, // ?
      raw: true,
    });
    console.log('что возвращает поиск', currOffer);
    const updOrder = await Offer.update(
      { status: 'Доставлен' },
      { where: { id } },
    );
    if (updOrder) {
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
