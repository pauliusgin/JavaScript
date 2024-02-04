function recipeCard(dish) {
  const recipesZone = document.getElementById("recipes_zone");

  //create the card structure
  const recipesWrapper = document.createElement("div");
  recipesWrapper.classList.add("recipes__wrapper");
  recipesWrapper.id = `wrapper_${dish.id}`;

  const recipesRecipe = document.createElement("div");
  recipesRecipe.classList.add("recipes__recipe");

  const recipesRecipeImage = document.createElement("div");
  recipesRecipeImage.classList.add("recipes__recipe_image", "recipe_image");

  const recipeImage = document.createElement("img");
  recipeImage.classList.add("recipe_image");
  recipeImage.src = `${dish.imageSrc}`;
  recipeImage.alt = `${dish.id}`;

  const recipesRecipeText = document.createElement("div");
  recipesRecipeText.classList.add("recipes__recipe_text");
  recipesRecipeText.id = `${dish.id}`;

  const textTitle = document.createElement("h3");
  textTitle.classList.add("text_title");
  textTitle.innerText = `${dish.title}`;

  const textIngredients = document.createElement("div");
  textIngredients.classList.add("text_ingredients");
  textIngredients.id = `ingredients_${dish.id}`;

  // append
  recipesZone.appendChild(recipesWrapper);

  recipesWrapper.appendChild(recipesRecipe);

  recipesRecipe.appendChild(recipesRecipeImage);
  recipesRecipe.appendChild(recipesRecipeText);

  recipesRecipeImage.appendChild(recipeImage);

  recipesRecipeText.appendChild(textTitle);
  recipesRecipeText.appendChild(textIngredients);

  // create the ingredient list
  const ingredientList = document.getElementById(`ingredients_${dish.id}`);
  for (let ingredient of dish.ingredients) {
    //create
    const ingredientLine = document.createElement("div");
    ingredientLine.classList.add("ingredient_line");
    ingredientLine.id = `${ingredient.id}`;

    const ingredientName = document.createElement("p");
    ingredientName.innerText = `${ingredient.name}`;

    const ingredientAmount = document.createElement("p");
    ingredientAmount.innerText = `${ingredient.amount} ${ingredient.units}`;

    // append
    ingredientList.appendChild(ingredientLine);

    ingredientLine.appendChild(ingredientName);
    ingredientLine.appendChild(ingredientAmount);
  }
}

export { recipeCard };
