function clearOutputList() {
  const outputList = document.getElementById("outputList");
  outputList.innerHTML = "";

  const outputPlaceholder = document.createElement("p");
  outputPlaceholder.classList.add("output__placeholder");

  outputList.appendChild(outputPlaceholder);
  outputPlaceholder.innerHTML = "Pasirinkite receptą.";
}

export { clearOutputList };
