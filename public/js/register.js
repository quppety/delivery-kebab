const registerForm = document.querySelector('#registerForm');
const error = document.querySelector('#error');
const checkbox = document.querySelector('#courier-input');

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    login: e.target.login.value,
    email: e.target.email.value,
    password: e.target.password.value,
  };
  let response = null;

  if (checkbox.checked) {
    response = await fetch('http://localhost:3000/couriers/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } else {
    response = await fetch('http://localhost:3000/clients/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  const result = await response.json();
  if (result.login) {
    console.log(result.login);
    error.textContent = 'Логин уже используется';
  } else if (result.email) {
    error.textContent = 'Email уже используется';
  } else if (result.ok) {
    window.location.href = 'http://localhost:3000/';
  }
  console.log(result);
});
