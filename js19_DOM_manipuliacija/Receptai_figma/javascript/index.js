import { recipes } from "./recipes.js";
import { showRecipe } from "./helpers/showRecipe.js";
import { showSliderValue } from "./components/sliderValueField.js";
import { showSelectedDish, showTotalAmount } from "./helpers/eventListeners.js";

// initial recipe cards
recipes.forEach((dish) => showRecipe(dish));

// show the value of the slider element
showSliderValue();

// show selected dish and total amounts
showSelectedDish();
showTotalAmount();
