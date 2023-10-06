const registerForm = document.querySelector('#registerForm');
const error = document.querySelector('#error');

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    login: e.target.login.value,
    email: e.target.email.value,
    password: e.target.password.value,
    isCourier: e.target.courier.checked,
  };
  const response = await fetch('http://localhost:3000/users/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (response.status === 200) {
    window.location.href = 'http://localhost:3000/';
  } else {
    error.textContent = 'Логин или Email уже используется';
  }
});
