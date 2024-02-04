function showSliderValue() {
  const slider = document.getElementById("slider");
  const sliderValueField = document.getElementById("slider__value");
  slider.addEventListener(
    "input",
    () => (sliderValueField.innerText = `${slider.value}`)
  );
}

export { showSliderValue };
