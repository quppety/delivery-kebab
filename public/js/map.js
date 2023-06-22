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

    adressProduct.map(async (el) => {
      const container = await document.getElementById(`distance-${el.id}`);
      container.innerHTML = `<p>Расстояние: ${Math.round(
        el.distance,
      )} метров</p>`;
      return container;
    });
  }
}

ymaps.ready(init);

//  <div class="max-w-fit m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//           <a href="#">
//             <img
//               class="rounded-t-lg"
//               src=""
//               alt="здесь будет картинка"
//             />
//           </a>
//           <div class="p-5">
//             <a href="#">
//               <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                 ${el.name}
//               </h5>
//             </a>
//             <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
//               Цена со скидкой: ${el.price / 2}
//             </p>
//             <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
//               Изначальная цена: ${el.price}
//             </p>
//             <p>Расстояние: ${Math.round(el.distance)} метров</p>
//             <button
//             id="get-offer-btn"
//             data-offer-id=${el.id}
//             class="inline-flex items-center mr-2 px-2 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
//             >
//               Выкупить
//             </button>
//             <a
//               href="#"
//               class="inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
//             >
//               Подробнее
//             </a>
//           </div>
//         </div>
