import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. Используй готовый код из первого задания.
const item =
`<a class="gallery__item" href="large-image.jpg">
<img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a> `
function createItemCards (arrey){
    return arrey.map((el)=>{
        const {description, original, preview} = el
        //console.log (el)
            return`
        <a class="gallery__item" href=${original}>
              <img class="gallery__image" src=${preview} alt=${description} />
        </a>`
  })
   .join('')
}
const markup = createItemCards (galleryItems);
// console.log (markup);
const list = document.querySelector('.gallery');
list.insertAdjacentHTML("afterbegin", markup);
const items = [...list.children];
// Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. 
// Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
// Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt.
// Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.

const captionOptions = {
    captions: true,//показать подписи, если они есть или нет
    captionSelector: 'img',//установить элемент, в котором находится заголовок. Установите для самого A-Tag значение «self» или используйте обратный вызов, который возвращает элемент.
    captionType: 'attr',//как получить подпись. Вы можете выбирать между attr, data или text
    captionsData: 'alt',//получить заголовок из данного атрибута
    captionPosition: 'bottom',//положение подписи. Возможны следующие варианты: верх, низ или снаружи
    captionDelay: 250,//добавляет задержку перед отображением заголовка (в мс)
    //enableKeyboard: true,//разрешить навигацию со стрелками на клавиатуре и закрыть клавишей ESC
   };//Создание объекта
   list.addEventListener(`click`, GalleryItemClick);
function GalleryItemClick(event) {
    event.preventDefault();
    console.log(`event`,event.target)
    if (event.target.nodeName === 'A' || event.target.nodeName === 'IMG') {
     return;   
  }
  captionOptionsElement = `${event.target.getAttribute('alt')}`
}
console.log(createItemCards(galleryItems));
list.addEventListener(`click`, elementCaptionOptions);
function elementCaptionOptions() {
    let captionOptionsElement = {};
    return captionOptionsElement;
};//Установите для самого A-Tag значение «self» или используйте обратный вызов, который возвращает элемент
// let gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', function () {
// 	// do something…
// });
let simpleLightboxGallery = new SimpleLightbox('.gallery a', captionOptions);
simpleLightboxGallery.on('show.simplelightbox', function () {
    open// do something…
    });
