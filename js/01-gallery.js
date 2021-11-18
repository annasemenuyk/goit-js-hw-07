import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
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
 console.log (markup);
const list = document.querySelector('.gallery');
list.insertAdjacentHTML("afterbegin", markup);
const items = [...list.children];
console.log(items)
 //Реализация делегирования на div.gallery и получение url большого изображения
//  Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.

list.addEventListener(`click`, onGalleryItemClick)
const instance = basicLightbox.create(`
   <img src="assets/images/image.png" width="800" height="600">
 `);
function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  galleryItems.map((item) => {
    if (item.original === event.target.dataset.source) {
      const instance = basicLightbox.create(` 
        <img src=${item.original} width="800" height="600">
    `);
    instance.show();
    }
   }
   )   
 }
// .addEventListener(`click`, onEscKeyPress)
//   function onEscKeyPress(event) {
//     const visible = instance.visible()
//     const ESC_KEY_CODE = 'Escape';
//     const pressEscKey = event.code === ESC_KEY_CODE;
//     if (pressEscKey||) {
//     instance.close()// close modal here;
//     }
//   }
const imageEsc = document.querySelector('.gallery__image')
imageEsc.addEventListener('keydown', onEscKeyPress)
  function onEscKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';
    const pressEscKey = event.code === ESC_KEY_CODE;
    if (pressEscKey) {
      instance.close()
    }
  }