const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsEl = document.querySelector('#ingredients');
 const ingredientEl = ingredients.map(ingredients=>{
   const liElem = document.createElement('li');
   liElem.textContent = [ingredients]
  return liElem;
 });
 console.log(ingredientsEl);
 ingredientsEl.append(...ingredientEl);
