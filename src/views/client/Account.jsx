const React = require('react');
const Layout = require('../Layout');

module.exports = function Account({ orders, currClient }) {
  return (
    <Layout user={currClient}>
      <div className="mx-5">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          {!currClient.phone || !currClient.address ? (
            <p className="block text-m font-medium text-center leading-6 mb-10 text-gray-900">
              Заполните ваши данные, чтобы сделать заказ
            </p>
          ) : (
            <p className="block text-xl font-semibold text-center leading-6 mb-10 text-gray-900">
              Ваши данные
            </p>
          )}
          <form
            id="client-info-form"
            method="POST"
            action="/users/profile/info"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            <div className="my-4">
              <label htmlFor="phone">Номер телефона</label>
              <div className="my-2">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  defaultValue={currClient.phone}
                  required
                  className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="my-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Адрес доставки
                </label>
              </div>
              <p className="block text-sm font-medium leading-6 text-gray-500">
                Введите адрес в формате <br />
                "Москва, улица Маросейка 3/13"
              </p>
              <div className="mt-2 mb-4">
                <input
                  type="text"
                  name="address"
                  id="address"
                  defaultValue={currClient.address}
                  required
                  className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="my-6">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Сохранить
              </button>
            </div>
          </form>
        </div>

        <div className="mx-auto grid justify-center my-10">
          <p className="block text-center text-xl font-semibold leading-6 mb-8 text-gray-900">
            Ваши заказы
          </p>
          {orders.length > 0 ? (
            <div className="flex flex-row flex-wrap gap-5 justify-center sm:mx-5 lg:mx-16">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="flex flex-col my-5 items-center w-80 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-48"
                    src={order.Offer.image}
                    alt={order.Offer.name}
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal w-5/6">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {order.Offer.name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700">
                      <span className="font-semibold">Цена: </span>
                      {order.Offer.price} руб.
                    </p>
                    <p className="mb-3 font-normal text-gray-700">
                      <span className="font-semibold">Вы заплатили: </span>
                      {order.Offer.price / 2} руб.
                    </p>
                    <p className="mb-3 font-normal text-gray-700">
                      <span className="font-semibold">Статус: </span>
                      {order.Offer.status === 'Заказан' ? (
                        <>В пути </>
                      ) : (
                        <>{order.Offer.status}</>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h3 className="flex justify-center m-auto text-m font-medium leading-6 mb-10 text-gray-900">
              Пока что у вас нет заказов
            </h3>
          )}
        </div>
      </div>
    </Layout>
  );
};
