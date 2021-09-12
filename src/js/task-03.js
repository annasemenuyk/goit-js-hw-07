const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

    const galleryMarkup = markup => {
      const { url, alt } = markup;
      return`<li><img src="${url}" alt="${alt}" width = 200 height = 150></li>`
 };
 console.log(galleryMarkup);
 const galleryMarkupUl = document.querySelector('#gallery');
 const galleryMarkupEl= images.map(galleryMarkup).join('');
 console.log(galleryMarkupEl);
 galleryMarkupUl.insertAdjacentHTML('afterbegin',galleryMarkupEl);

galleryMarkupUl.setAttribute("style", "list-style-type:none; display: flex;");
galleryMarkupUl.style.listStyle ='none';
galleryMarkupUl.style.displey ='flex';
galleryMarkupUl.style.justifyContent ='space-around'; 
galleryMarkupUl.style.marginTop ='20 px';
galleryMarkupUl.style.padding ='0';