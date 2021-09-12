"use strict";

var btnDecrement = document.querySelector('[data-action="decrement"]');
var btnIncrement = document.querySelector('[data-action="increment"]');
var spanVal = document.querySelector("#value");
var counterValue = 0;

var increment = function increment() {
  return spanVal.textContent = counterValue += 1;
};

var decrement = function decrement() {
  return spanVal.textContent = counterValue -= 1;
};

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);