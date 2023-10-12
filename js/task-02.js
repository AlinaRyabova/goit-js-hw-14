const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector(`#ingredients`);

const elements = ingredients.map(ingredient => {
  const liElement = document.createElement(`li`);
  liElement.classList.add(`item`);
  liElement.textContent = ingredient;
  return liElement;
});
ingredientList.append(...elements);
