const React = require('react');
const ReactDOMServer = require('react-dom');
const Layout = require('../Layout');

// const GetImages = require('../../apiUnsplash/GetImages');

module.exports = function Cabinet({ username, orders, currClient }) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(`/clients/${username.id}/cabinet`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
        credentials: 'include',
      });

      if (response.status === 200) {
        // ! не prepend'ит - просто выводит OK
        const approve = document.createElement('p');
        approve.innerText = 'Данные успешно добавлены';
        event.target.prepend(approve);
        // const data = await response.json();
        // console.log('Form data submitted successfully:', data);
      } else {
        const fail = document.createElement('p');
        fail.innerText = 'Не удалось обновить данные';
        event.target.prepend(fail);
        // const error = await response.json();
        // console.error('Failed to submit form data:', error);
      }
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
    }
  };

  return (
    <Layout user={username}>
      <div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <p className="block text-m font-medium leading-6 mb-10 text-gray-900">
            Заполните ваши данные, чтобы сделать заказ
          </p>
          <form
            id="client-info-form"
            method="POST"
            action={`/clients/${username.id}/cabinet`}
            onSubmit={handleSubmit}
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            <div>
              <label htmlFor="phone">Номер телефона</label>
              <div className="my-2">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  defaultValue={currClient.phone}
                  required
                  className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Адрес доставки
                </label>
              </div>
              <p className="block text-sm font-medium leading-6 text-gray-500">
                Введите адрес в формате <br />
                "Москва, улица Маросейка 3/13"
              </p>
              <div className="mt-2 mb-4">
                <input
                  type="text"
                  name="address"
                  id="address"
                  defaultValue={currClient.address}
                  required
                  className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Сохранить
              </button>
            </div>
          </form>
        </div>

        <div className="mx-auto grid justify-center my-10">
          <p className="block text-center text-m font-medium leading-6 mb-10 text-gray-900">
            Ваши заказы
          </p>
          {orders.length > 0 ? (
            <>
              {orders.map((order) => (
                <a
                  href="#"
                  className="flex flex-col my-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src=""
                    alt="здесь будет картинка"
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {order.Offer.name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Цена: {order.Offer.price}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Вы заплатили: {order.Offer.price / 2}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Статус:{' '}
                      {order.Offer.status === 'Заказан' ? (
                        <>В пути </>
                      ) : (
                        <>{order.Offer.status}</>
                      )}
                    </p>
                  </div>
                </a>
              ))}
            </>
          ) : (
            <h3 className="flex justify-center m-auto text-m font-medium leading-6 mb-10 text-gray-900">
              Пока что у вас нет заказов
            </h3>
          )}
        </div>
      </div>
    </Layout>
  );
};

// <form
//   id="myForm"
//   method="POST"
//   action={`/clients/${username.id}/cabinet`}
//   style={{ color: 'red' }}
//   onSubmit={handleSubmit}
// >
//   <label>
//     Name:
//     <input
//       id="name"
//       name="name"
//       type="text"
//       placeholder="как тебя зовут?"
//     />
//   </label>
//   <label>
//     Phone number:
//     <input
//       id="phone"
//       name="phone"
//       type="text"
//       placeholder="укажи номер своего телефона"
//     />
//   </label>
//   <label>
//     Address:
//     <input
//       id="address"
//       name="address"
//       type="text"
//       placeholder="по какому адресу везти подпитку?"
//     />
//   </label>
//   <button type="submit">Сохранить</button>

//   <div className="container" name="my_purchases">
//     <h3>Мои заказы</h3>
//     <div className="delivery_number">
//       <span>Status</span>
//       <button type="button">Отмена</button>
//     </div>
//   </div>

//   <button
//     id="purchased"
//     type="submit"
//     method="POST"
//     action={`/clients/${username.id}/valid`}
//   >
//     Оплатить
//   </button>
// </form>
