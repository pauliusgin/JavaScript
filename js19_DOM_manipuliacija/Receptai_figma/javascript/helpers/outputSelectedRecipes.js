import { recipes } from "../recipes.js";
import { outputList } from "../components/outputList.js";
import { outputClearList } from "./outputClearList.js";
import { outputDefaultMessage } from "./outputDefaultMessage.js";

// check which dishes are selected an print them to output
function outputSelectedRecipes() {
  const selectedRecipesIDs = Array.from(
    document.querySelectorAll(".selected")
  ).map((recipe) => recipe.id.slice(8));

  const matchingRecipes = recipes.filter((dish) =>
    selectedRecipesIDs.includes(dish.id)
  );

  matchingRecipes.forEach((dish) => outputList(dish));

  if (selectedRecipesIDs.length === 0) {
    outputClearList();
    outputDefaultMessage("Pasirinkite receptą.");
  }
}

export { outputSelectedRecipes };
