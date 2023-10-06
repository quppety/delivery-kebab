/* eslint-disable no-nested-ternary */
const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ user, offers }) {
  return (
    <Layout user={user}>
      <div
        className="flex flex-row flex-wrap justify-center mx-auto px-15 min-h-screen"
        id="container"
      >
        {user && user.address !== null ? (
          <div id="container-spinner" className="mt-56" />
        ) : offers.length > 0 ? (
          <div className="h-5/6 flex flex-row flex-wrap justify-center">
            {offers.map((offer) => (
              <div
                className="min-w-64 m-5 bg-white border border-gray-200 rounded-lg shadow"
                key={offer.id}
              >
                <div className="box rounded-t-lg">
                  <div className="ribbon ribbon-top-right">
                    <span>-50%</span>
                  </div>
                  <img
                    className="rounded-t-lg object-cover w-72"
                    src={offer.image}
                    alt=""
                  />

                  <div className="p-5 text-center">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {offer.name}
                    </h5>

                    <p className="mb-3 text-gray-700">
                      Изначальная цена: {offer.price} руб.
                    </p>
                    <p className="mb-3 font-normal font-semibold text-gray-700">
                      Цена со скидкой: {offer.price / 2} руб.
                    </p>
                    <div id={`distance-${offer.id}`} />
                    {user ? (
                      user.isCourier ? (
                        <div />
                      ) : (
                        <div className="flex justify-center">
                          <button
                            type="button"
                            id="get-offer-btn"
                            data-offer-id={offer.id}
                            className="inline-flex items-center mr-2 px-2 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"
                          >
                            Выкупить
                          </button>
                        </div>
                      )
                    ) : (
                      <a
                        href="/login"
                        className="inline-flex items-center mx-auto px-2 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"
                      >
                        Войдите, чтобы выкупить заказ
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h3 className="mt-24 text-center text-xl font-medium leading-6 text-gray-900 sm:mt-56">
            Сейчас нет актуальных предложений, зайдите позже
          </h3>
        )}
      </div>
      <div id="map-test" className="map" />
    </Layout>
  );
};
