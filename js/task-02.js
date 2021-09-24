const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const ulRef = document.querySelector('ul');


const ingredientsElems = ingredients.map(item => {
  const newLi = document.createElement('li');
  newLi.textContent = item;
  return newLi;
});

ulRef.append(...ingredientsElems);
