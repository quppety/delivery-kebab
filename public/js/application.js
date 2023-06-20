const addOrderForm = document.querySelector('#add-order-form');

addOrderForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  try {
    const response = await fetch('/new-order', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(data)),
      credentials: 'include',
    });
    if (response.status === 200) {
      window.location.href = '/orders';
    } else {
      const warning = document.createElement('p');
      warning.innerText = 'Something went wrong, try again later';
      addOrderForm.prepend(warning);
      setTimeout(() => {
        warning.remove();
      }, 2000);
    }
  } catch (error) {
    console.log(error);
  }
});
