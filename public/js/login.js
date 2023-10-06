const loginForm = document.querySelector('#loginForm');
const error = document.querySelector('#error');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    email: e.target.email.value,
    password: e.target.password.value,
  };

  const response = await fetch('http://localhost:3000/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (response.status === 200) {
    window.location.href = 'http://localhost:3000/';
  } else {
    error.textContent = 'Неверный пароль или email';
  }
});
