const categoriesList = document.querySelector(`#categories`);
const categoriesItems = categoriesList.querySelectorAll(`.item`);

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
  const categoryName = item.firstElementChild;
  const categoryItems = item.lastElementChild.children;

  console.log(`Category: ${categoryName.textContent}`);
  console.log(`Elements: ${categoryItems.length}`);
});
