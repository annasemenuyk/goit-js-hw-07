"use strict";

/* Напиши скрипт, который бы при потере фокуса на инпуте, 
проверял его содержимое на правильное количество символов.
<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, 
если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
} */
var nameInput = document.querySelector('#validation-input'); //доступ до поля введення

var inValidInputLenght = nameInput.getAttribute("data-length"); //максимальне число введення

var inputLength = nameInput.getAttribute(nameInput.value.length); // довжина значення

/* console.log(inValidInputLenght)
console.log(inputLength) */
//ф-ція яка перевіряє к-сть символів введених в поле

nameInput.addEventListener('blur', function (el) {
  //валідна кількість =6
  if (el.target.value.length == inValidInputLenght) {
    nameInput.classList.add('valid');
    nameInput.classList.remove("invalid"); //console.log( nameInput.classList)
  } //не валідна кількість 
  else {
      if (el.target.value.length !== inValidInputLenght && el.target.value.length !== 0) {
        nameInput.classList.remove('valid');
        nameInput.classList.add("invalid"); //console.log( nameInput.classList)
      } // не введені данні без класу
      else {
          nameInput.classList.remove('valid');
          nameInput.classList.remove('invalid');
        }
    }

  ;
});