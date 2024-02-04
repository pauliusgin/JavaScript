// enable selection mark toggle
function toggleSelectionMark(dish) {
  let wrapper = document.getElementById(`wrapper_${dish.id}`);
  let mark = document.getElementById(`mark_${dish.id}`);
  wrapper.addEventListener("click", function () {
    mark.classList.toggle("visible");
  });
}

export { toggleSelectionMark };
