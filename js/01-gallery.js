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
const listItem = document.querySelector('.gallery__image');
listItem.addEventListener('click', onGoLink)
function onGoLink (event) {
   event.preventDefault()
  };
const itemList = document.querySelector('.gallery');
//  //import basicLightbox from '../node_modules/basiclightbox';
//import * as basicLightbox from 'basiclightbox'
const instance = basicLightbox.create(`
<img src="assets/images/image.png" width="800" height="600">
`)
instance.show()
// itemList.addEventListener ('click', onClickModal)
// function  onClickModal (event){
//   event.target;
//    instance = basicLightbox.create(`
//    <img src="assets/images/image.png" width="800" height="600">
// `)}

listItem.addEventListener('click', onOpenModal)
function onOpenModal(event) {
  if ( event.target.nodeName === 'IMG') {
  event.preventDefault();// відміна переходу по ссилці
  instance// відкриття модалки
  listItem.src = event.target.dataset.source //заміна значення картинки
  listItem.alt = event.target.alt
   }
} ;
// listItem.addEventListener('click', onModalCloseClick)
// function onModalCloseClick (){
//   {      
//     basicLightbox.remove() //закриття модального вікна
//     listItem.src = '' // очищення значення картинки
//     listItem.alt = ''
//   }
// }
console.log(onOpenModal)