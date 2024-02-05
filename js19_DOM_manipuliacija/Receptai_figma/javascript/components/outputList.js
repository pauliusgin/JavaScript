import { calculateAmount } from "../helpers/calculateAmount.js";

function outputList(dish) {
  const output = document.getElementById("outputList");
  // reset current values

  for (const ingredient of dish.ingredients) {
    const totalAmount = calculateAmount(ingredient);
    //create
    const outputIngredientLine = document.createElement("div");
    outputIngredientLine.classList.add("output__ingredient_line");
    outputIngredientLine.id = `output_${ingredient.id}`;

    const ingredientName = document.createElement("p");
    ingredientName.innerText = `${ingredient.name}: `;

    const ingredientAmount = document.createElement("p");
    ingredientAmount.classList.add("output__ingredient_amount");
    ingredientAmount.innerText = ` ${totalAmount} ${ingredient.units}`;

    // append
    output.appendChild(outputIngredientLine);

    outputIngredientLine.appendChild(ingredientName);
    outputIngredientLine.appendChild(ingredientAmount);
  }
}

export { outputList };
