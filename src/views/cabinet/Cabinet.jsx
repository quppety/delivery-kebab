const React = require('react');
const Layout = require('../Layout');

module.exports = function Cabinet() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('/users/:id/cabinet', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Form data submitted successfully:', data);
      } else {
        const error = await response.json();
        console.error('Failed to submit form data:', error);
      }
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
    }
  };

  return (
    <Layout>
      <form
        id="myForm"
        method="POST"
        action="/users/:id/cabinet"
        style={{ color: 'red' }}
        onSubmit={handleSubmit}
      >
        <label>
          Name:
          <input
            id="name"
            name="name"
            type="text"
            placeholder="как тебя зовут?"
          />
        </label>
        <label>
          Phone number:
          <input
            id="phone"
            name="phoneNumber"
            type="text"
            placeholder="укажи номер своего телефона"
          />
        </label>
        <label>
          Address:
          <input
            id="address"
            name="address"
            type="text"
            placeholder="по какому адресу везти подпитку?"
          />
        </label>
        <button type="submit">Сохранить</button>

        <div className="container" name="my_purchases">
          <h3>Мои заказы</h3>
          <div className="delivery_number">
            <span>Status</span>
            <button type="button">Отмена</button>
          </div>
        </div>

        <button
          id="purchased"
          type="submit"
          method="POST"
          action="/users/:id/cabinet/valid"
        >
          Оплатить
        </button>
      </form>
    </Layout>
  );
};
