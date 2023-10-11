const counterValue = document.getElementById('value');

const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);

const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

let currentValue = 0;

const decrement = () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
};
const increment = () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
};
decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);
