// import { recipes } from "../recipes.js";
import { outputClearList } from "./outputClearList.js";
import { outputSelectedRecipes } from "./outputSelectedRecipes.js";

// enable selection mark toggle
function toggleSelectionMark(dish) {
  const wrapper = document.getElementById(`wrapper_${dish.id}`);
  const mark = document.getElementById(`mark_${dish.id}`);
  wrapper.addEventListener("click", function () {
    mark.classList.toggle("visible");
  });
}

// mark selected recipe card wrapper
function markSelectedRecipe(dish) {
  const wrapper = document.getElementById(`wrapper_${dish.id}`);
  wrapper.addEventListener("click", function () {
    wrapper.classList.toggle("selected");
  });
}

// calculate total amounts based on slider position
function showTotalAmount() {
  const slider = document.getElementById("slider");
  slider.addEventListener("input", () => {
    outputClearList();
    outputSelectedRecipes();
  });
}

// show only selected dishes in output
function showSelectedDish() {
  const wrappers = document.querySelectorAll(".recipes__wrapper");
  wrappers.forEach((wrapper) => {
    wrapper.addEventListener("click", () => {
      outputClearList();
      outputSelectedRecipes();
    });
  });
}

export {
  toggleSelectionMark,
  markSelectedRecipe,
  showTotalAmount,
  showSelectedDish,
};
