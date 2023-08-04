import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');
let lightbox;

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `).join('')
}
container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

container.addEventListener('click', handlerGalleryClick);

function handlerGalleryClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
}

lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionDelay: 250,
});
        lightbox.open();