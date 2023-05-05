const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


// Ідентифікуєм ul в нашому HTML:
const ingredientsList = document.querySelector('#ingredients');

// створюємо масив: 
const ingredientItems = ingredients.map((ingredient) => {
  const listEl = document.createElement('li');
  
  listEl.textContent = ingredient;
  listEl.classList.add('item');
  
  // console.log(listEl);

  return listEl;
});

ingredientsList.append(...ingredientItems);
console.log(ingredientsList);


