import { selectionMark } from "../components/selectionMark.js";
import { recipeCard } from "../components/recipeCard.js";
import { toggleSelectionMark } from "../helpers/toggleSelectionMark.js";
import { markSelectedRecipe } from "./markSelectedRecipe.js";

function showRecipe(dish) {
  recipeCard(dish);
  selectionMark(dish);
  toggleSelectionMark(dish);
  markSelectedRecipe(dish);
}

export { showRecipe };
