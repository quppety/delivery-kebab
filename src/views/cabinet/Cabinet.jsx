const React = require('react');
const ReactDOMServer = require('react-dom');
const Layout = require('../Layout');

const GetImages = require('../../apiUnsplash/GetImages');

module.exports = function Cabinet({ username }) {
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
            <div className="mt-2 mb-4">
              <input
                type="text"
                name="address"
                id="address"
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
