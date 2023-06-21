const React = require('react');
const Layout = require('./Layout');

function Login() {
  return (
    <Layout>
      <div id="main">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '300px',
            alignItems: 'center',
            margin: '0 auto',
            paddingTop: '40px',
          }}
        >
          <h1>Вход</h1>
          <div className="login-box">
            <form id="loginForm" method="post" action="/client/login">
              <div className="user-box">
                <input type="email" name="email" required />
                <label>Email</label>
              </div>
              <div className="user-box">
                <input type="password" name="password" required />
                <label>Password</label>
              </div>
              <div
                id="error"
                style={{ color: 'red', fontSize: '16px', textAlign: 'center' }}
              />
              <button className="btnlog" type="submit">
                Войти
                <span />
              </button>

              <div className="span">
                Нет учетной записи?
                <a href="/client/register/"> Регистрация</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <script src="/js/login.js" />
    </Layout>
  );
}

module.exports = Login;
