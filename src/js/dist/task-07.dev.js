"use strict";

/* Напиши скрипт, который реагирует на изменение значения 
input#font-size-control (событие input)
 и изменяет инлайн-стиль span#text обновляя свойство font-size.
  В результате при перетаскивании ползунка будет меняться размер текста. */
var refs = {
  inputRangeControl: document.querySelector("#font-size-control"),
  inputText: document.querySelector("#text")
};

var inputFontSizeControl = function inputFontSizeControl(event) {
  refs.inputText.style.fontSize = "".concat(refs.inputRangeControl.value, "px");
};

refs.inputRangeControl.addEventListener("input", inputFontSizeControl);