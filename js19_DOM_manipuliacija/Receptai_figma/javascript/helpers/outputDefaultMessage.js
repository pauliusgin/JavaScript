// default message for when the output list is empty
function outputDefaultMessage(message) {
  const outputList = document.getElementById("outputList");
  const outputPlaceholder = document.createElement("p");
  outputPlaceholder.classList.add("output__placeholder");

  outputList.appendChild(outputPlaceholder);
  outputPlaceholder.innerHTML = message;
}

export { outputDefaultMessage };
