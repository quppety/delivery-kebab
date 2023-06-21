const React = require('react');
const Layout = require('../Layout');

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
      <div className="w-3/5 mx-auto mt-5">
        <form
          id="client-info-form"
          method="POST"
          action={`/clients/${username.id}/cabinet`}
          onSubmit={handleSubmit}
        >
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="phone"
              id="phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Номер телефона
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="address"
              id="address"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="address"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Адрес доставки
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Сохранить
          </button>
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
