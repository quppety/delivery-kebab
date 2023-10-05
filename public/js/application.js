const addOrderForm = document.querySelector('#add-order-form');
const mainOffersContainer = document.getElementById('container');
const errMsg = document.querySelector('#err-msg');
const clientInfoForm = document.querySelector('#client-info-form');

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

mainOffersContainer?.addEventListener('click', async (e) => {
  const getOfferBtn = e.target.closest('.btn-get-offer');

  if (getOfferBtn) {
    e.preventDefault();
    const { offerId } = getOfferBtn.dataset;
    try {
      const response = await fetch(`/get-offer/${offerId}`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        credentials: 'include',
      });

      if (response.status === 200) {
        getOfferBtn.innerText = 'Выкуплен!';
      } else if (response.status === 401) {
        errMsg.innerText = 'Добавьте ваш номер телефона и адрес в профиле';
        setTimeout(() => {
          errMsg.innerText = '';
        }, 2000);
      } else {
        errMsg.innerText = 'Что-то пошло не так, попробуйте заказать позже';
        setTimeout(() => {
          errMsg.innerText = '';
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  }
});

const courierOffersContainer = document.getElementById(
  'courier-offer-container',
);
courierOffersContainer?.addEventListener('click', async (e) => {
  const delOfferBtn = e.target.closest('#delete-offer');
  const closeOrderBtn = e.target.closest('#close-order');

  if (delOfferBtn) {
    e.preventDefault();
    const { offerId } = delOfferBtn.dataset;

    try {
      const response = await fetch(`/couriers/orders/${offerId}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (response.status === 200) {
        delOfferBtn.closest('tr').remove(); // Remove the entire table row
      } else {
        errMsg.innerText = 'Что-то пошло не так, попробуйте позже';
        setTimeout(() => {
          errMsg.remove();
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (closeOrderBtn) {
    e.preventDefault();
    const { offerId } = closeOrderBtn.dataset;

    try {
      const response = await fetch(`/couriers/orders/${offerId}`, {
        method: 'PATCH',
        credentials: 'include',
      });

      if (response.status === 200) {
        const currStatus = document.getElementById(`${offerId}-offer-status`);
        if (currStatus) {
          currStatus.innerText = 'Доставлен';
        }
      } else {
        errMsg.innerText = 'Что-то пошло не так, попробуйте позже';
        setTimeout(() => {
          errMsg.innerText = '';
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  }
});

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
