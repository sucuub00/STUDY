const container = document.querySelector('#data-container');
function getFastestLoadedPhoto(ids) {
  const requests = ids.map((el) => {
    return fetch(`https://jsonplaceholder.typicode.com/photos/${el}`);
  });
  Promise.race(requests)
    .then((response) => {
      return response.json();
    })
    .then((photo) => {
      createPhotoItem(photo.url, photo.title);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      const loader = document.querySelector('#loader');
      loader.style.display = 'none';
    });
}

function createPhotoItem(url, title) {
  const li = document.createElement('li');
  li.className = 'photo-item';
  const img = document.createElement('img');
  img.className = 'photo-item__image';
  img.src = url;
  const h3 = document.createElement('h3');
  h3.className = 'photo-item__title';
  h3.textContent = title;
  li.prepend(img);
  li.prepend(h3);
  container.prepend(li);
}

getFastestLoadedPhoto([60, 12, 55]);
