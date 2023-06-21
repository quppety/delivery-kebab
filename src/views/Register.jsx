const React = require('react');
const Loyout = require('./Layout');

module.exports = function Registr() {
  return (
    <Loyout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '300px',
          alignItems: 'center',
          margin: '0 auto',
        }}
      >
        <h1>Регистрация</h1>
        <form
          id="registerForm"
          method="post"
          action="/client/register"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '300px',
            alignItems: 'center',
          }}
        >
          <label htmlFor="email-input" className="block mar-b-1">
            Логин:
          </label>
          <input
            required
            id="login-input"
            name="login"
            type="text"
            tabIndex="1"
            className="block w-100 no-outline no-border pad-1 mar-b-2"
          />
          <label htmlFor="login-input" className="block mar-b-1">
            Email:
          </label>
          <input
            required
            id="email-input"
            name="email"
            type="email"
            tabIndex="2"
            className="block w-100 no-outline no-border pad-1 mar-b-2"
          />
          <label htmlFor="password-input" className="block mar-b-1">
            Пароль:
          </label>
          <input
            required
            id="password-input"
            name="password"
            type="password"
            tabIndex="3"
            className="block w-100 no-outline no-border pad-1 mar-b-2"
          />
          <div className="mar-t-2">
            <input type="checkbox" id="courier-input" name="courier" />
            <label htmlFor="courier-input">Я курьер</label>
          </div>
          <div
            id="error"
            style={{ color: 'red', fontSize: '16px', textAlign: 'center' }}
          />
          <input
            style={{ marginTop: '20px' }}
            type="submit"
            value="Зарегистрироваться"
            tabIndex="4"
            className="block button w-100 mar-t-4 mar-b-3 pad-2 round-1 text-c center no-border no-outline"
          />
        </form>
      </div>
      <script src="/js/register.js" />
    </Loyout>
  );
};
