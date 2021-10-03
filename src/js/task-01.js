
// Напиши скрипт, который выполнит следующие операции.
//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

const totalLiElem = document.querySelectorAll('.item');//всі категорії
console.log(`В списке ${totalLiElem.length} категории.`);

//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
const categoriesArray = [...totalLiElem]//робимо масив з заголовкыв та лі
.map(
  //текст по категоріях
  categories => `Категория: ${categories.children[0].textContent}
  Количество элементов: ${categories.children[1].children.length}`
    )//кількість елементів у списку
    .join("\n"); //об’єднуємо у нову стрічку puts a.join("\n")   # correct ;is not the same as puts a.join('\n')   # incorrect

//Например для первой категории получится: Категория: Животные Количество элементов: 4
console.log(categoriesArray);