const React = require('react');
const Layout = require('../Layout');

module.exports = function Profile(props) {
  const { username, userData } = props;
  return (
    <Layout user={username}>
      <div className="flex justify-evenly w-2/3 mx-auto my-9">
        <a
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
          href="/couriers/orders"
        >
          История заказов
        </a>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form id="add-order-form" className="space-y-6">
          <div>
            <label
              htmlFor="order-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Название *
            </label>
            <div className="mt-2">
              <input
                id="order-name"
                name="name"
                type="text"
                placeholder="Суши 24шт."
                required
                className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="order-price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Изначальная цена, руб. *
              </label>
            </div>
            <div className="mt-2">
              <input
                id="order-price"
                name="price"
                type="text"
                placeholder="200"
                required
                className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="order-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Локация *
              </label>
            </div>
            <div className="mt-2">
              <input
                id="order-address"
                name="address"
                type="text"
                placeholder="Метро Войковская"
                required
                className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="prod-img"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Изображение
              </label>
            </div>
            <div className="mt-2">
              <input
                id="prod-img"
                name="image"
                type="file"
                className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div> */}

          <div className="flex justify-center">
            <button
              id="add-order-btn"
              type="submit"
              className="flex w-1/3 justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Добавить
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
