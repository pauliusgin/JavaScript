function recipeCard(dish) {
  const recipesZone = document.getElementById("recipes_zone");
  recipesZone.innerHTML += `<div class="recipes__wrapper" id="wrapper_${dish.id}" >
            <div class="recipes__recipe ${dish.imageId}">
              <div class="recipes__recipe_image recipe_image">
                <img
                  class="recipe_image"
                  src="${dish.imageSrc}"
                  alt="${dish.id}"
                />
              </div>
              <div class="recipes__recipe_text" id="${dish.id}">
                <h3 class="text_title">${dish.title}</h3>
                <div class="text_ingredients" id="ingredients_${dish.id}">
                </div>
              </div>
            </div>
      </div>`;
  const ingredientList = document.getElementById(`ingredients_${dish.id}`);
  for (let ingredient of dish.ingredients) {
    ingredientList.innerHTML += `<div class="ingredient" id="${ingredient.id}"><p>${ingredient.name}</p> <p>${ingredient.amount} ${ingredient.units}</p> </div>`;
  }
}

export { recipeCard };
