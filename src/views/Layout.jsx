const React = require('react');

module.exports = function Layout(props) {
  const { children, user } = props;
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/img/logo.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/spiner.css" />
        <link rel="stylesheet" href="/css/media.css" />

        <title>Delivery Kebab</title>
      </head>
      <body className="min-h-screen flex flex-col">
        <nav className="mb-0 bg-white border-gray-200 sm:mb-5">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center">
              <img
                id="logo-img"
                src="/img/logo.svg"
                className="max-w-16 max-h-16 mr-1"
                alt="delivery-kebab-logo"
              />
              <span
                id="logo-span"
                className="self-center text-2xl font-semibold whitespace-nowrap"
              >
                Delivery-Kebab
              </span>
            </a>
            {user ? (
              <div className="flex justify-end">
                <button
                  data-collapse-toggle="navbar-default"
                  type="button"
                  className="inline-flex p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <a href="/profile">
                    <img
                      src="/img/profile-icon.png"
                      alt=""
                      className="max-w-10 max-h-10 mr-1"
                    />
                  </a>
                </button>
                <button
                  data-collapse-toggle="navbar-default"
                  type="button"
                  className="inline-flex p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <a href="/users/logout">
                    <img
                      src="/img/logout.png"
                      alt=""
                      className="max-w-10 max-h-10"
                    />
                  </a>
                </button>
              </div>
            ) : (
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <a href="/login/">
                  <img
                    src="/img/profile-icon.png"
                    alt=""
                    className="max-w-12 max-h-12"
                  />
                </a>
              </button>
            )}
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                <li>
                  <a
                    href="/"
                    className="block py-2 pl-3 pr-4 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0"
                    aria-current="page"
                  >
                    На главную
                  </a>
                </li>
                {user ? (
                  <>
                    <li>
                      <a
                        href="/profile"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0"
                      >
                        {user.username}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/users/logout/"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0"
                      >
                        Выход
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <a
                        href="/login/"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0"
                      >
                        Вход
                      </a>
                    </li>
                    <li>
                      <a
                        href="/register/"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0"
                      >
                        Регистрация
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <p id="err-msg" className="text-center text-base" />
        {children}
        <footer className="bg-white sm:my-5 dark:bg-gray-800">
          <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-wrap justify-end">
            <span className="mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <a href="/" className="mr-4 hover:underline md:mr-6 ">
                Zero Waste - All The Taste
              </a>
            </span>
            <span className="text-sm text-gray-500 sm:text-center">
              ©️ 2023{' '}
              <a href="http://localhost:3000/" className="hover:underline">
                Delivery Kebab™️
              </a>
            </span>
          </div>
        </footer>
      </body>

      <script src="https://api-maps.yandex.ru/2.1/?apikey=58e5bb3b-f8a7-4723-a88e-42c298ec42e6&lang=ru_RU" />
      <script src="/js/map.js" />
      <script src="/js/application.js" />
    </html>
  );
};
