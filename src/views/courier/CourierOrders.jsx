const React = require('react');
const Layout = require('../Layout');

module.exports = function CourierOrders(props) {
  const { username, offers } = props;
  return (
    <Layout user={username}>
      <div className="my-24 relative overflow-x-auto sm:rounded-lg">
        <p className="flex justify-center font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2">
          Мои заказы
        </p>
        <div className="flex w-2/3 mx-auto my-9">
          <a
            id="back-btn"
            className="justify-start text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            href="/couriers/profile"
          >
            Назад
          </a>
        </div>
        <table
          id="responsive-table"
          className="w-8/12 mx-auto text-sm text-left text-gray-500"
        >
          <thead className="text-xs text-gray-700 uppercase rounded-lg bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Номер заказа
              </th>
              <th scope="col" className="px-6 py-3">
                Название заказа
              </th>
              <th scope="col" className="px-6 py-3">
                Статус
              </th>
              <th scope="col" className="px-6 py-3">
                Телефон клиента
              </th>
              <th scope="col" className="px-6 py-3">
                Адрес клиента
              </th>
              <th scope="col" className="px-6 py-3" />
            </tr>
          </thead>
          <tbody id="courier-offer-container">
            {offers.map((offer) => (
              <tr key={offer.id} className="px-24 bg-white border-b">
                <td className="w-32 p-4">{offer.id}</td>
                <td className="w-32 p-4">{offer.name}</td>
                <td
                  id={`${offer.id}-offer-status`}
                  className="px-6 py-4 font-semibold text-gray-900"
                >
                  {offer.status}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900">
                  {offer.Orders.Client.phone}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    {offer.Orders.Client.address}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button
                    id="close-order"
                    data-offer-id={offer.id}
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                  >
                    Доставлен
                  </button>
                  <button
                    id="delete-offer"
                    data-offer-id={offer.id}
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};
