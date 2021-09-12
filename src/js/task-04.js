const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const spanVal = document.querySelector("#value");
let counterValue = 0;
const increment = () => (spanVal.textContent = counterValue += 1);
const decrement = () => (spanVal.textContent = counterValue -= 1);
btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);
