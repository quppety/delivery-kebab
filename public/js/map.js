const center = [48.8866527839977, 2.34310679732974];

async function init() {
  const response = await fetch('http://localhost:3000/map', {});
  const adress = await response.json();

  const adressClient = adress[0].address;
  const map = new ymaps.Map('map-test', {
    center,
    zoom: 17,
  });

  if (adressClient !== null) {
    const addressProduct = adress[1];

    const geocodePromises = addressProduct.map(
      (el) =>
        new Promise((resolve) => {
          setTimeout(async () => {
            try {
              const resultB = await ymaps.geocode(el.curr_location);
              const pointB = resultB.geoObjects
                .get(0)
                .geometry.getCoordinates();
              const distance = ymaps.coordSystem.geo.getDistance(
                pointA,
                pointB,
              );
              el.distance = distance;
              console.log('Расстояние между точками:', distance, 'м');
            } catch (error) {
              console.error(
                'Произошла ошибка при вычислении расстояния:',
                error,
              );
            }
            resolve();
          }, 100);
        }),
    );
    console.log('!!!!!!!!!!!!!!!!!!!!', adress[1]);
    const resultA = await ymaps.geocode(adressClient);
    var pointA = resultA.geoObjects.get(0).geometry.getCoordinates();

    await Promise.all(geocodePromises);

    const adressProduct = adress[1];

    adressProduct.sort((a, b) => a.distance - b.distance);

    // const container = await document.getElementById(`page-${el.id}`);
    const container = document.querySelector('#page');
    container.classList = 'flex flex-wrap justify-center mx-auto px-15';
    if (adressProduct.length > 0) {
      container.innerHTML = adressProduct
        .map(
          (el) => `
          <div class="max-w-64 m-5 bg-white border border-gray-200 rounded-lg shadow">
              <div class="box">
                <div class="ribbon ribbon-top-right">
                  <span>-50%</span>
                </div>
                <img
                class="rounded-t-lg w-full"
                src=${el.image}
                alt=""
              />
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  ${el.name}
                </h5>
              <p class="mb-3 font-normal text-gray-700">
                Цена со скидкой: ${el.price / 2}
              </p>
              <p class="mb-3 font-normal text-gray-700">
                Изначальная цена: ${el.price}
              </p>
              <p>Расстояние: ${Math.round(el.distance)} метров</p>
              <div class="flex justify-center mx-auto">
              <button
                id="get-offer-btn"
                data-offer-id=${el.id}
                class="inline-flex items-center mt-4 mr-2 px-2 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"
              >
                Выкупить
              </button>
              </div>
            </div>
          </div>
        </div>`,
        )
        .join('');
    } else {
      container.innerHTML = `
        <h3 class="flex justify-center m-auto text-m font-medium leading-6 mb-10 text-gray-900">
          Сейчас нет актуальных предложений, зайдите позже
        </h3>`;
    }
  }

  const errMsg = document.querySelector('#err-msg');
  const getOfferBtns = document.querySelectorAll('#get-offer-btn');
  getOfferBtns?.forEach((getOfferBtn) => {
    getOfferBtn?.addEventListener('click', async (e) => {
      e.preventDefault();
      const { offerId } = getOfferBtn.dataset;
      try {
        const resp = await fetch(`/get-offer/${offerId}`, {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          credentials: 'include',
        });
        if (resp.status === 200) {
          getOfferBtn.innerText = 'Выкуплен!';
        } else if (resp.status === 401) {
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
    });
  });
}

ymaps.ready(init);
