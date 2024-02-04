function calculateAmount(ingredient) {
  const slider = document.getElementById("slider");
  const portions = slider.value;

  return portions * ingredient.amount;
}

export { calculateAmount };
