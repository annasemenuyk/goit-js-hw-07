"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Напиши скрипт, который выполнит следующие операции.
//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
var totalLiElem = document.querySelectorAll('.item'); //всі категорії

console.log("\u0412 \u0441\u043F\u0438\u0441\u043A\u0435 ".concat(totalLiElem.length, " \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438.")); //Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

var categoriesArray = _toConsumableArray(totalLiElem) //робимо масив з заголовкыв та лі
.map( //текст по категоріях
function (categories) {
  return "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F: ".concat(categories.children[0].textContent, "\n  \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432: ").concat(categories.children[1].children.length);
}) //кількість елементів у списку
.join("\n"); //об’єднуємо у нову стрічку puts a.join("\n")   # correct ;is not the same as puts a.join('\n')   # incorrect
//Например для первой категории получится: Категория: Животные Количество элементов: 4


console.log(categoriesArray);