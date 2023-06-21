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
        <title>Document</title>
      </head>
      <body>
        {user ? (
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link" href="/">
                На главную
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/clients/logout/">
                Выход
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={`/${
                  user.username
                    ? `clients/${user.id}/cabinet`
                    : 'couriers/profile'
                }`}
              >
                {user.username || user.couriername}
              </a>
            </li>
          </ul>
        ) : (
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link" href="/">
                На главную
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/clients/login/">
                Вход
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/clients/register/">
                Регистрация
              </a>
            </li>
          </ul>
        )}
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
      <script defer src="/js/application.js" />
    </html>
  );
};
