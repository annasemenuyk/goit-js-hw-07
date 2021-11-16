import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

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
list.addEventListener('click', onGoLink)
function onGoLink (event) {
   event.preventDefault()
  };