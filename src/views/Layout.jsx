const React = require('react');

module.exports = function Layout(props) {
  const { children, user } = props;
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>
        <title>Delivery-kebab</title>
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
              <a className="nav-link" href="/client/logout/">
                Выход
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={`/${user.username ? 'client/lk' : 'courier/lk'}`}
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
              <a className="nav-link" href="/client/login/">
                Вход
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/client/register/">
                Регистрация
              </a>
            </li>
          </ul>
        )}
        {children}
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossorigin="anonymous"
        ></script>
      </body>
      <script defer src="/js/application.js" />
    </html>
  );
};
