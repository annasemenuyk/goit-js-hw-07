//Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item. Получится 'В списке 3 категории.'.
const totalLiElem = document.querySelectorAll('.item');//всі категорії
console.log(`В списке ${totalLiElem.length} категории.`);
//Для каждого элемента li.item в списке ul#categories, найдет и 
//выведет в консоль текст заголовка элемента (тега h2) и 
//количество элементов в категории (всех вложенных в него элементов li).
const categoriesFirstLi = Array.from(
    document.querySelectorAll(".categories > li")
  );
  const categoriesUl = Array.from(
    document.querySelectorAll(".categories  li ul")
  );
  
  const categoriesList = [];
  
  categoriesFirstLi.forEach(element => {
    categoriesList.push(
      `Категория: ${element.firstChild.textContent.trim()} / Количество: ${
        element.firstElementChild.children.length
      }`
    );
  });
  
  console.log(categoriesList);
 /*  const categoriesArray = [...totalCategories]
  .map(
    categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray); */
  
/* Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4
const ulEL = document.querySelector('#categories');
console.log (ulEL);
const liemEL = document.querySelectorAll('.item');
const itemhEL = document.querySelector('.item');
const allEL = itemhEL.firstElementChild;
console.log(allEL);
const lastEL = itemhEL.lastElementChild;
console.log(liemEL);
 */