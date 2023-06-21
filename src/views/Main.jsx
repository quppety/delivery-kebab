const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ user, offers }) {
  return (
    <Layout user={user}>
      {offers.length > 0 ? (
        <div className="flex" id="container">
          {offers.map((product) => (
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
                    {product.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Цена со скидкой: {product.price / 2}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Изначальная цена: {product.price}
                </p>
                {user ? (
                  <>
                    <a
                      href="#"
                      className="inline-flex items-center mr-2 px-2 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      В корзину
                    </a>

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
        <h3>Сейчас нет актуальных предложений, зайдите позже</h3>
      )}
      <div id="map-test" class="map"></div>
      <script src="https://api-maps.yandex.ru/2.1/?apikey=58e5bb3b-f8a7-4723-a88e-42c298ec42e6&lang=ru_RU"></script>
      <script src="/js/map.js" />
    </Layout>
  );
};
