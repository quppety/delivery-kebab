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
          <div class="login-box">
            <form id="loginForm" method="post" action="/client/login">
              <div class="user-box">
                <input type="email" name="email" required=""></input>
                <label>Email</label>
              </div>
              <div class="user-box">
                <input type="password" name="password" required=""></input>
                <label>Password</label>
              </div>
              <div
                id="error"
                style={{ color: 'red', fontSize: '16px', textAlign: 'center' }}
              ></div>
              <button class="btnlog" type="submit">
                Войти
                <span></span>
              </button>

              <div class="span">
                Нет учетной записи?
                <a href="/client/register/"> Регистрация</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <script src="/js/login.js"></script>
    </Layout>
  );
}

module.exports = Login;
