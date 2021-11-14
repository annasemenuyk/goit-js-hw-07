import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// const basicLightbox = require('basiclightbox')
// import * as basicLightbox from 'basiclightbox'
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
list.addEventListener('click', onOpenModal)
function onOpenModal(event) {
  if (event.target.nodeName === 'LI' || event.target.nodeName === 'A' || event.target.nodeName === 'IMG') {
  event.preventDefault();// відміна переходу по ссилці

  modal.classList.add('is-open') //присвоєння класу відкриття модалки
  modalImage.src = event.target.dataset.source //заміна значення картинки
  modalImage.alt = event.target.alt
  window.addEventListener('keydown', onEscKeyPress);
  window.addEventListener('keydown', onArrowLeftPress);
  window.addEventListener('keydown', onArrowRightPress);
  }
} 
//Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
modalClose.addEventListener('click', onModalCloseClick) 
function onModalCloseClick (event){      
  modal.classList.remove('is-open') //закриття модального вікна
  modalImage.src = '' // очищення значення картинки
  modalImage.alt = ''
  window.removeEventListener('keydown', onEscKeyPress);
  window.removeEventListener('keydown', onArrowLeftPress);
  window.removeEventListener('keydown', onArrowRightPress);
}
//Закрытие модального окна по клику на div.lightbox__overlay.
modal.addEventListener('click', onModalCloseClick)

//Закрытие модального окна по нажатию клавиши ESC
function onEscKeyPress(evt) {
  const ESC_KEY_CODE = 'Escape';
  const pressEscKey = evt.code === ESC_KEY_CODE;
  if (pressEscKey) {
    onModalCloseClick();
  }
}