const React = require('react');
const Layout = require('../Layout');
const { Order } = require('../../../db/models');

module.exports = function Purchased({ orderId }) {
  return (
    <Layout>
      <form
        id="payed"
        method="GET"
        action="/users/:id/cabinet"
        style={{ color: 'blue' }}
      >
        <div>
          <p>
            Ваш заказ {orderId} в пути. Отследить статус или посмотреть
            рандомных котиков. (можно вставить ссылку на API)
          </p>
        </div>
      </form>
    </Layout>
  );
};
