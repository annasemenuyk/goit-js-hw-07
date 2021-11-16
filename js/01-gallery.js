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

const itemList = document.querySelector('.gallery__item');
itemList.addEventListener('click', onGoLink)
function onGoLink (event) {
   event.preventDefault()
  };
  console.log(itemList)
//  //import basicLightbox from '../node_modules/basiclightbox';
//import * as basicLightbox from 'basiclightbox'
const listItem = document.querySelector('.gallery__image');
console.log(listItem);
const instance = basicLightbox.create(`
<div class="modal">
  <img src="assets/images/image.png" width="800" height="600">
</div>
`); 

// itemList.addEventListener ('click', onClickModal)
// function  onClickModal (event){
//   event.target;
//    instance = basicLightbox.create(`
//    <img src="assets/images/image.png" width="800" height="600">
// `)}

listItem.addEventListener('click', onOpenModal)
function onOpenModal(event) {
  event.preventDefault()
  if ( event.target.nodeName === 'IMG') {
  event.preventDefault();// відміна переходу по ссилці
  instance.show()// відкриття модалки
//   instance = basicLightbox.create(`
// <img src="assets/images/image.png" width="800" height="600">
// `)//заміна значення картинки
  
   }
} ;
// modal=document.querySelector('.modal')
// modal.addEventListener('click', onModalCloseClick)

listItem.addEventListener('click', ModalCloseClick)
function ModalCloseClick (event){
  { event.preventDefault();// відміна переходу по ссилці     
    instance.close() //закриття модального вікна
    listItem.src = '' // очищення значення картинки
    listItem.alt = ''
  }
}
console.log(onOpenModal)