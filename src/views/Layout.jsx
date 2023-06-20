const React = require('react');

module.exports = function Layout(props) {
  const { children, userName } = props;
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>{children}</body>
      <script defer src="/js/application.js" />
    </html>
  );
};
