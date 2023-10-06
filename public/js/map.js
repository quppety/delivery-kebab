const center = [48.8866527839977, 2.34310679732974];

async function init() {
  const response = await fetch('http://localhost:3000/map', {});
  const [userData, offerData] = await response.json();
  const clientAddress = userData.address;

  const map = new ymaps.Map('map-test', {
    center,
    zoom: 17,
  });

  let pointA;

  const container = document.querySelector('#container');
  if (clientAddress !== null) {
    const geocodePromises = offerData.map(
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

    const resultA = await ymaps.geocode(clientAddress);
    pointA = resultA.geoObjects.get(0).geometry.getCoordinates();

    await Promise.all(geocodePromises);

    offerData.sort((a, b) => a.distance - b.distance);

    if (offerData.length > 0) {
      container.innerHTML = `<div class="h-5/6 flex flex-row flex-wrap justify-center"> ${offerData
        .map(
          (el) => `
          <div key=${
            el.id
          } class="m-5 bg-white border border-gray-200 rounded-lg shadow" style="width: 298px; height: 442px" >
              <div class="box rounded-t-lg h-full" >
                <div class="ribbon ribbon-top-right">
                  <span>-50%</span>
                </div>
                <img
                class="rounded-t-lg object-cover w-full"
                style="height: 50%;"
                src=${el.image}
                alt=""
              />
            <div class="p-5 text-center" style="height: 50%;">
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
                class="inline-flex items-center my-4 mr-2 px-2 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"
              >
                Выкупить
              </button>
              </div>
            </div>
          </div>
        </div>`,
        )
        .join('')} </div>`;
    } else {
      container.innerHTML = `
      <h3 class="mt-24 text-center text-xl font-medium leading-6 text-gray-900 sm:mt-56">
          Сейчас нет актуальных предложений, зайдите позже
        </h3>`;
    }
  }
}

ymaps.ready(init);
