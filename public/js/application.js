const addOrderForm = document.querySelector('#add-order-form');
const closeOrderBtns = document.querySelectorAll('#close-order');
const delOfferBtns = document.querySelectorAll('#delete-offer');
const getOfferBtns = document.querySelectorAll('#get-offer-btn');

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
