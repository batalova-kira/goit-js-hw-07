import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');

function createMarkup(arr) {
    return arr.map(({preview, original, description}) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('')
}
container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
container.addEventListener('click', handlerGalleryClick);

function handlerGalleryClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    const imgLagre = evt.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${imgLagre}"/>
`)
    instance.show();
}

document.addEventListener('keydown', function (evt) {
  if (evt.code === "Escape") {
      evt.preventDefault();
    instance.close();
}
});

console.log(galleryItems);
