// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const listOfGallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
  `
  )
  .join('');
listOfGallery.insertAdjacentHTML('beforeend', markup);

const listOfBigImg = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
listOfBigImg.on('shown.simplelightbox', function (event) {
  const a = event.target.firstElementChild.alt;
  console.log(a);
  captionType = a;
});
