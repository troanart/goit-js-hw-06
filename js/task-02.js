const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.getElementById("ingredients")


// Вариант 1 

// const elements = [];

// for (let i = 0; i < ingredients.length; i++) {
//     const liElementInIngredients = document.createElement("li")
//     liElementInIngredients.classList.add("item")
//     liElementInIngredients.textContent = ingredients[i];
//     elements.push(liElementInIngredients)

// }

// ulIngredients.append(...elements)


// Вариант 2

const elements = ingredients.map(el => {
  const liElementInIngredients = document.createElement("li")
  liElementInIngredients.classList.add("item")
  liElementInIngredients.textContent = el;
  console.log(liElementInIngredients)
  return liElementInIngredients
  
})

 
ulIngredients.append(...elements)



