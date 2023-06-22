const React = require('react');
const Loyout = require('./Layout');

module.exports = function Registr() {
  return (
    <Loyout>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Создайте учетную запись
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            id="registerForm"
            method="post"
            action="/client/register"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="username-reg"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Логин
              </label>
              <div className="mt-2">
                <input
                  id="username-reg"
                  name="login"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email-reg"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Адрес email
              </label>
              <div className="mt-2">
                <input
                  id="email-reg"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password-reg"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Пароль
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password-reg"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="block">
              <input id="courier-input" name="courier" type="checkbox" />
              <label
                htmlFor="courier-input"
                className="ml-3 text-sm font-medium leading-6 text-gray-900"
              >
                Я курьер
              </label>
            </div>
            <div
              id="error"
              className="block my-2 text-sm font-medium leading-6 text-red-500"
            />
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Зарегистрироваться
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Уже зарегистрированы?{' '}
            <a
              href="/login"
              className="font-semibold leading-6 text-green-600 hover:text-green-500"
            >
              Войдите в вашу учетную запись
            </a>
          </p>
        </div>
      </div>
      <script defer src="/js/register.js" />
    </Loyout>
  );
};
