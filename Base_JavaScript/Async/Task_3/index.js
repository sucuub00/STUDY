const ol = document.querySelector('.data-container');

function createListItem(title) {
  const li = document.createElement('li');
  li.textContent = title;
  ol.prepend(li);
}

function createError() {
  const spanError = document.createElement('span');
  spanError.textContent = 'Произошла ошибка в получении данных об альбомах...';
  ol.prepend(spanError);
}

const renderAlbums = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const result = await response.json();
    result.forEach?.((element) => {
      createListItem(element.title);
    });
  } catch (error) {
    console.error(error);
    createError();
  } finally {
    const loader = document.querySelector('#loader');
    loader.style.display = 'none';
  }
};
renderAlbums();
