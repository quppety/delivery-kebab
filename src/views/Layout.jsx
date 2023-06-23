const React = require('react');

module.exports = function Layout(props) {
  const { children, user } = props;
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/spiner.css" />
        <link rel="stylesheet" href="/css/media.css" />

        <title>Document</title>
      </head>
      <body className="mx-5">
        <nav className="mb-10 bg-white border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center">
              <img
                id="logo-img"
                src="/img/img-deliver/logo.svg"
                className="max-w-16 max-h-16 mr-1"
                alt="deliver-kebub-logo"
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
                  <a
                    href={`/${
                      user.username
                        ? `clients/${user.id}/cabinet`
                        : 'couriers/profile'
                    }`}
                  >
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
                  <a href="/clients/logout">
                    <img
                      src="/img/logout.svg"
                      alt=""
                      className="max-w-9 max-h-9 pt-1"
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
                <a href="/clients/login/">
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
                        href={`/${
                          user.username
                            ? `clients/${user.id}/cabinet`
                            : 'couriers/profile'
                        }`}
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0"
                      >
                        {user.username || user.couriername}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/clients/logout/"
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
                        href="/clients/login/"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0"
                      >
                        Вход
                      </a>
                    </li>
                    <li>
                      <a
                        href="/clients/register/"
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

        {children}
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossOrigin="anonymous"
        />
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossOrigin="anonymous"
        />
      </body>
      <script src="/js/application.js" />
    </html>
  );
};
