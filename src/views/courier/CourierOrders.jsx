const React = require('react');
const Layout = require('../Layout');

module.exports = function CourierOrders(props) {
  const { username, orders } = props;
  return (
    <Layout user={username}>
      <div className="my-24 relative overflow-x-auto sm:rounded-lg">
        <p className="flex justify-center font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2">
          Мои заказы
        </p>
        <div className="flex w-2/3 mx-auto my-9">
          <a
            className="justify-start text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
            href="/couriers/profile"
          >
            Назад
          </a>
        </div>
        <table className="w-8/12 mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                orders
              </th>
              <th scope="col" className="px-6 py-3">
                Телефон клиента
              </th>
              <th scope="col" className="px-6 py-3">
                Адрес клиента
              </th>
              <th scope="col" className="px-6 py-3">
                Статус
              </th>
              <th scope="col" className="px-6 py-3" />
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <div>
                <tr className="px-24 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-32 p-4">{order.id}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    телефон
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">адрес</div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {order.status}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      id="close-order"
                      //   data-order-id={order.id}
                      type="button"
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      Доставлен
                    </button>
                  </td>
                </tr>
              </div>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};
