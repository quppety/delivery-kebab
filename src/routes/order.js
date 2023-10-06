const router = require('express').Router();
const { Op } = require('sequelize');

const isAuth = require('../middleware/isAuth');

const { Order, User, Offer } = require('../../db/models');

router.post('/offers', isAuth, async (req, res) => {
  const { name, price, address } = req.body;
  const username = req.session?.user?.username;
  let rusName;

  try {
    const courierData = await User.findOne({
      where: { username },
      raw: true,
    });

    let image;
    switch (name) {
      case 'burger-assort':
        rusName = 'Ассорти бургеров';
        image = '/img/img-deliver/assort_burg.jpeg';
        break;
      case 'black-burger':
        rusName = 'Черный бургер';
        image = '/img/img-deliver/black_burg.jpeg';
        break;
      case 'burger-fries':
        rusName = 'Бургер с картошкой';
        image = '/img/img-deliver/burg_chrisps.jpeg';
        break;
      case 'burger-nuggets':
        rusName = 'Бургер с нагетсами';
        image = '/img/img-deliver/burg_nugg.jpeg';
        break;
      case 'california-sushi':
        rusName = 'Калифорния суши';
        image = '/img/img-deliver/california_sushi.jpeg';
        break;
      case 'cheeseburger':
        rusName = 'Чизбургер';
        image = '/img/img-deliver/chees_burg.jpeg';
        break;
      case 'twister-chicken':
        rusName = 'Твистер куриный';
        image = '/img/img-deliver/chick_twist.jpeg';
        break;
      case 'lovers':
        rusName = 'Набор для влюбленных';
        image = '/img/img-deliver/first_night-sushi.jpeg';
        break;
      case 'classic-burger':
        rusName = 'Классический бургер';
        image = '/img/img-deliver/One_burg.jpeg';
        break;
      case 'team':
        rusName = 'Набор для компании';
        image = '/img/img-deliver/sushi_party.jpeg';
        break;
      case 'two':
        rusName = 'Набор для двоих';
        image = '/img/img-deliver/sushi_romance.jpeg';
        break;
      case 'dragon':
        rusName = 'Дракон';
        image = '/img/img-deliver/sushi-dragon.jpeg';
        break;
      default:
        image = 'Такого товара не существует';
        break;
    }

    const order = await Offer.create({
      name: rusName,
      price,
      image,
      user_id: courierData.id,
      curr_location: address,
      status: 'Размещен',
    });

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

router.post('/offers/:id', isAuth, async (req, res) => {
  const { id } = req.params;
  const username = req.session?.user?.username;
  try {
    const currClient = await User.findOne({ where: { username }, raw: true });
    if (currClient.phone && currClient.address) {
      const currOffer = await Offer.findOne({ where: { id }, raw: true });
      await Offer.update({ status: 'Заказан' }, { where: { id } });
      const newOrder = await Order.create({
        user_id: currClient.id,
        offer_id: currOffer.id,
      });
      if (newOrder) {
        res.sendStatus(200);
      } else {
        res.sendStatus(400);
      }
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.log(error);
  }
});

router.patch('/:id', isAuth, async (req, res) => {
  const { id } = req.params;
  try {
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

router.delete('/:id', isAuth, async (req, res) => {
  //   const username = req.session?.username;
  const { id } = req.params;
  try {
    const delOrder = await Offer.destroy({ where: { id } });
    if (delOrder) {
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
