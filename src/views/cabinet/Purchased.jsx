const React = require('react');
const Layout = require('../Layout');
const { Order } = require('../../../db/models');

module.exports = function Purchased({}) {
  return (
    <Layout>
      <form
        id="payed"
        method="GET"
        action="/clients/:id/cabinet"
        style={{ color: 'blue' }}
      >
        <div>
          <p>
            Ваш заказ `order` в пути. Отследить статус или посмотреть рандомных
            котиков. (можно вставить ссылку на API)
          </p>
        </div>
      </form>
    </Layout>
  );
};
