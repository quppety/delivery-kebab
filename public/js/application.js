const addOrderForm = document.querySelector('#add-order-form');
const closeOrderBtns = document.querySelectorAll('#close-order');
const delOfferBtns = document.querySelectorAll('#delete-offer');
const getOfferBtns = document.querySelectorAll('#get-offer-btn');

addOrderForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  console.log(Object.fromEntries(data));
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
    try {
      const response = await fetch(`/couriers/orders/${offerId}`, {
        method: 'PATCH',
        credentials: 'include',
      });
      if (response.status === 200) {
        const currStatus = document.getElementById(`${offerId}-offer-status`);
        currStatus.innerText = 'Доставлен';
      } else {
        const warning = document.createElement('p');
        warning.innerText = 'Something went wrong, try again later';
        closeOrderBtn.parentNode.parentNode.prepend(warning);
        setTimeout(() => {
          warning.remove();
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  });
});

getOfferBtns?.forEach((getOfferBtn) => {
  getOfferBtn?.addEventListener('click', async (e) => {
    e.preventDefault();
    const { offerId } = getOfferBtn.dataset;
    console.log(offerId);
    try {
      const response = await fetch(`/get-offer/${offerId}`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        credentials: 'include',
      });
      if (response.status === 200) {
        getOfferBtn.innerText = 'Выкуплен!';
      } else {
        const warning = document.createElement('p');
        warning.innerText = 'Что-то пошло не так, попробуйте заказать позже';
        getOfferBtn.parentNode.parentNode.prepend(warning);
        setTimeout(() => {
          warning.remove();
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  });
});

delOfferBtns?.forEach((delOfferBtn) => {
  delOfferBtn?.addEventListener('click', async (e) => {
    e.preventDefault();

    const { offerId } = delOfferBtn.dataset;
    try {
      const response = await fetch(`/couriers/orders/${offerId}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (response.status === 200) {
        delOfferBtn.parentNode.parentNode.remove();
      } else {
        const warning = document.createElement('p');
        warning.innerText = 'Something went wrong, try again later';
        delOfferBtn.parentNode.parentNode.prepend(warning);
        setTimeout(() => {
          warning.remove();
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  });
});

const clientInfoForm = document.querySelector('#client-info-form');

clientInfoForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = String(window.location.href).split('/')[4];
  const formData = new FormData(e.target);
  try {
    const response = await fetch(`/clients/${id}/cabinet`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData)),
      credentials: 'include',
    });

    if (response.status === 200) {
      const approve = document.createElement('p');
      approve.innerText = 'Данные успешно добавлены';
      approve.classList =
        'block text-sm mb-4 font-medium leading-6 text-gray-900';
      e.target.prepend(approve);
    } else {
      const fail = document.createElement('p');
      fail.classList = 'block text-sm font-medium leading-6 text-gray-900';
      fail.innerText = 'Не удалось обновить данные';
      e.target.prepend(fail);
    }
  } catch (error) {
    console.error('An error occurred while submitting the form:', error);
  }
});
