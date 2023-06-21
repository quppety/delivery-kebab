const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ user, offers }) {
  return (
    <Layout user={user}>
      {offers.length > 0 ? (
        <div className="flex">
          {offers.map((offer) => (
            <div className="max-w-fit m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src=""
                  alt="здесь будет картинка"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {offer.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Изначальная цена: {offer.price} руб.
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Цена со скидкой: {offer.price / 2} руб.
                </p>
                {user ? (
                  <>
                    <button
                      id="get-offer-btn"
                      data-offer-id={offer.id}
                      className="inline-flex items-center mr-2 px-2 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      Выкупить
                    </button>

                    <a
                      href="#"
                      className="inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      Подробнее
                    </a>
                  </>
                ) : (
                  <a
                    href="#"
                    className="inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Подробнее
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3 className="flex justify-center m-auto text-m font-medium leading-6 mb-10 text-gray-900">
          Сейчас нет актуальных предложений, зайдите позже
        </h3>
      )}
    </Layout>
  );
};
