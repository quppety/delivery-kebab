require('@babel/register');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

function renderTemplate(reactComponent, props, res) {
  const reactEl = React.createElement(reactComponent, props);
  const html = ReactDOMServer.renderToStaticMarkup(reactEl);
  res.write('<!DOCTYPE html>');
  res.write(html);
  res.end();
}

module.exports = renderTemplate;
