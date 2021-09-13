"use strict";

/* Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
после чего рендерится коллекция.
 При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 
1 параметр amount - число. Функция создает столько div, 
сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, 
должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes. */
var refs = {
  render: document.querySelector('[data-action="render"]'),
  destroy: document.querySelector('[data-action="destroy"]'),
  boxes: document.querySelector("#boxes")
};
refs.render.addEventListener("click", getAmount);
refs.destroy.addEventListener("click", destroyBoxes);

function getAmount() {
  var amount = +document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  var basicSize = 30;
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < amount; i++) {
    var size = basicSize + i * 10;
    var div = document.createElement('div');
    div.style.cssText = "width: ".concat(size, "px; height: ").concat(size, "px; background-color: rgba( ").concat(random(), " , ").concat(random(), " , ").concat(random(), " )");
    fragment.appendChild(div);
  }

  refs.boxes.appendChild(fragment);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}

function random() {
  return Math.floor(Math.random() * 256);
}