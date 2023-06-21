const loginForm = document.querySelector('#loginForm');
const error = document.querySelector('#error');
const registerForm = document.querySelector('#registerForm');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    email: e.target.email.value,
    password: e.target.password.value,
  };
  console.log(data);

  const response = await fetch('http://localhost:3000/clients/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const courierResponse = await fetch(
      'http://localhost:3000/couriers/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      },
    );
    console.log('courier', courierResponse);
    if (courierResponse.ok) {
      window.location.href = 'http://localhost:3000/';
    } else {
      error.textContent = 'Неверный пароль или email';
    }
  } else if (response.ok) {
    window.location.href = 'http://localhost:3000/'; // ! редирект на форму заполнения тлф/адреса
  } else {
    error.textContent = 'Неверный пароль или email';
  }
});
