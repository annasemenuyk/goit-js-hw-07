"use strict";

//Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item. Получится 'В списке 3 категории.'.
var totalLiElem = document.querySelectorAll('.item'); //всі категорії

console.log("\u0412 \u0441\u043F\u0438\u0441\u043A\u0435 ".concat(totalLiElem, " \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438."));
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