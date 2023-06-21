const addOrderForm = document.querySelector('#add-order-form');
const closeOrderBtns = document.querySelectorAll('#close-order');

addOrderForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  try {
    const response = await fetch('/couriers/new-order', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(data)),
      credentials: 'include',
    });
    if (response.status === 200) {
      window.location.href = '/couriers/orders';
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

closeOrderBtns?.forEach((closeOrderBtn) => {
  closeOrderBtn?.addEventListener('click', async (e) => {
    e.preventDefault();
    const { offerId } = closeOrderBtn.dataset;
    const data = {
      id: offerId,
    };
    try {
      const response = await fetch('/couriers/orders', {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data),
        credentials: 'include',
      });
      if (response.status === 200) {
        // window.location.href = '/couriers/orders';
        const currStatus = document.getElementById(`${offerId}-offer-status`);
        currStatus.innerText = 'Доставлен';
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
});
