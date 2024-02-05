import { selectionMark } from "../components/selectionMark.js";
import { recipeCard } from "../components/recipeCard.js";
import { toggleSelectionMark } from "./eventListeners.js";
import { markSelectedRecipe } from "./eventListeners.js";

function showRecipe(dish) {
  recipeCard(dish);
  selectionMark(dish);
  toggleSelectionMark(dish);
  markSelectedRecipe(dish);
}

export { showRecipe };
