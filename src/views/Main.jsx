const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ user, offers }) {
  return (
    <Layout user={user}>
      {user && user.address !== null ? (
        <div id="page">
          <div id="container">
            <div id="ring" />
            <div id="ring" />
            <div id="ring" />
            <div id="ring" />
            <div id="h3">loading</div>
          </div>
        </div>
      ) : offers.length > 0 ? (
        <div
          className="flex flex-wrap justify-center mx-auto w-3/5 px-15"
          id="container"
        >
          {offers.map((offer) => (
            <div
              className="max-w-64 max-h-80 m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={offer.id}
            >
              <img
                className="rounded-t-lg w-full"
                src={offer.image}
                alt="здесь будет картинка"
              />

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
                <div id={`distance-${offer.id}`} />
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
      <div id="map-test" className="map" />
      <script
        defer
        src="https://api-maps.yandex.ru/2.1/?apikey=58e5bb3b-f8a7-4723-a88e-42c298ec42e6&lang=ru_RU"
      />
      <script defer src="/js/map.js" />
    </Layout>
  );
};
