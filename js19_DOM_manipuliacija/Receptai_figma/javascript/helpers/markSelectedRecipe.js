// mark selected recipe card wrapper
function markSelectedRecipe(dish) {
  let wrapper = document.getElementById(`wrapper_${dish.id}`);
  wrapper.addEventListener("click", function () {
    wrapper.classList.toggle("selected");
  });
}

export { markSelectedRecipe };
