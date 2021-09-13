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
var refs = {
  nameInput: document.querySelector('#validation-input')
};

document.getElementById("validation-input").onblur = function () {
  console.log(refs.nameInput.value.length);

  if (refs.nameInput.getAttribute('data-length') > refs.nameInput.value.length) {
    refs.nameInput.classList.remove('valid');
    refs.nameInput.classList.add('invalid');
  } else {
    refs.nameInput.classList.remove('invalid');
    refs.nameInput.classList.add('valid');
  }
};