import { recipes } from "./recipes.js";
import { showRecipe } from "./helpers/showRecipe.js";
import { outputSelected } from "./helpers/outputSelectedRecipes.js";
import { showSliderValue } from "./components/sliderValueField.js";

// initial recipe cards
recipes.forEach((dish) => showRecipe(dish));

// show the value of the slider element
showSliderValue();

// ==================================
function listeners() {
  const slider = document.getElementById("slider");
  slider.addEventListener("input", () => {
    recipes.forEach((dish) => outputSelected(dish));
  });

  const wrappers = document.querySelectorAll(".recipes__wrapper");
  wrappers.forEach((wrapper) => {
    wrapper.addEventListener("click", () => {
      recipes.forEach((dish) => outputSelected(dish));
    });
  });
}

listeners();
