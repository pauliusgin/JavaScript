import { outputList } from "../components/outputList.js";
import { clearOutputList } from "./clearOutputList.js";

// check which dishes are selected an print them to output
function outputSelected(dish) {
  const recipes = document.querySelectorAll(".recipes__wrapper");
  const selectedRecipes = [];
  recipes.forEach((recipe) => {
    if (recipe.classList.contains("selected")) {
      selectedRecipes.push(recipe);
      outputList(dish);
    } else if (selectedRecipes.length === 0) {
      clearOutputList();
    }
  });
}

export { outputSelected };
