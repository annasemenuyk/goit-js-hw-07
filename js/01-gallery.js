import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';
//Создание и рендер разметки по массиву данных galleryItems и 
//предоставленному шаблону элемента галереи.
const itemCards =
` <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> `