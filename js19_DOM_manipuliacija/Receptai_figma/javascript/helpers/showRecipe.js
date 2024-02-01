import { selectionMark } from "../components/selectionMark.js";
import { toggleSelectionMark } from "../helpers/toggleSelectionMark.js";
import { recipeCard } from "../components/recipeCard.js";

function showRecipe(dish) {
  recipeCard(dish);
  selectionMark(dish);
  toggleSelectionMark(dish);
}

export { showRecipe };
