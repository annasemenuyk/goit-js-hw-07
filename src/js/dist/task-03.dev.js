"use strict";

var images = [{
  url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'White and Black Long Fur Cat'
}, {
  url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Orange and White Koi Fish Near Yellow Koi Fish'
}, {
  url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Group of Horses Running'
}];

var galleryMarkup = function galleryMarkup(markup) {
  var url = markup.url,
      alt = markup.alt;
  return "<li><img src=\"".concat(url, "\" alt=\"").concat(alt, "\" width = 200 height = 150></li>");
};

console.log(galleryMarkup);
var galleryMarkupUl = document.querySelector('#gallery');
var galleryMarkupEl = images.map(galleryMarkup).join('');
console.log(galleryMarkupEl);
galleryMarkupUl.insertAdjacentHTML('afterbegin', galleryMarkupEl);
galleryMarkupUl.setAttribute("style", "list-style-type:none; display: flex;");
galleryMarkupUl.style.listStyle = 'none';
galleryMarkupUl.style.displey = 'flex';
galleryMarkupUl.style.justifyContent = 'space-around';
galleryMarkupUl.style.marginTop = '20 px';
galleryMarkupUl.style.padding = '0';