// enable selection mark toggle
function toggleSelectionMark(dish) {
  console.log(dish);
  let wrapper = document.getElementById(`wrapper_${dish.id}`);
  console.log(wrapper);
  let mark = document.getElementById(`mark_${dish.id}`);
  console.log(mark);
  wrapper.addEventListener("click", function () {
    mark.classList.toggle("visible");
    console.log("mark enabled:", dish.id);
  });
}

export { toggleSelectionMark };
