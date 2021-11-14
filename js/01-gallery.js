import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// const basicLightbox = require('basiclightbox');
// import * as basicLightbox from 'basiclightbox';// 
//Создание и рендер разметки по массиву данных galleryItems и 
//предоставленному шаблону элемента галереи.
// description: 
// original: big
// preview: small
const item =
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
function createItemCards (arrey){
    return arrey.map((el)=>{
        const {description, original, preview} = el
        //console.log (el)
            return`
            <div class="gallery__item">
            <a class="gallery__link" href=${original}>
              <img
                class="gallery__image"
                src=${preview}
                data-source=${original}
                alt=${description}
              />
            </a>
          </div>`
  })
   .join('')
}
const markup = createItemCards (galleryItems);
// console.log (markup);
const list = document.querySelector('.gallery');
list.insertAdjacentHTML("afterbegin", markup);
const items = [...list.children];
list.addEventListener('click', onGoLink)
function onGoLink (event) {
   event.preventDefault()
  };

    const basicLightbox = require('/basiclightbox');
    const instance = basicLightbox.create(`
  <div class="modal">
      <p>
     {description}
      </p>
  </div>
`)
instance.show()

