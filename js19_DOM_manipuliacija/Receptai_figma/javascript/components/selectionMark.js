// create the selection mark
function selectionMark(dish) {
  const wrapper = document.getElementById(`wrapper_${dish.id}`);

  // create containing div for the svg
  const recipesMark = document.createElement("div");
  recipesMark.classList.add(
    "recipes__mark",
    "position-absolute",
    "top-0",
    "start-100",
    "translate-middle"
  );
  recipesMark.id = `mark_${dish.id}`;

  // create svg element
  const svgMark = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgMark.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgMark.setAttribute("width", "25");
  svgMark.setAttribute("height", "25");
  svgMark.setAttribute("viewBox", "0 0 25 25");
  svgMark.setAttribute("fill", "none");

  const svgMarkCircle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  svgMarkCircle.setAttribute("cx", "12.5");
  svgMarkCircle.setAttribute("cy", "12.5");
  svgMarkCircle.setAttribute("r", "12.5");
  svgMarkCircle.setAttribute("fill", "#0FC261");

  const svgMarkLine1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );
  svgMarkLine1.setAttribute("x1", "6.35355");
  svgMarkLine1.setAttribute("y1", "9.64645");
  svgMarkLine1.setAttribute("x2", "12.3536");
  svgMarkLine1.setAttribute("y2", "15.6464");
  svgMarkLine1.setAttribute("stroke", "white");

  const svgMarkLine2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );
  svgMarkLine2.setAttribute("x1", "11.6464");
  svgMarkLine2.setAttribute("y1", "15.6464");
  svgMarkLine2.setAttribute("x2", "19.6464");
  svgMarkLine2.setAttribute("y2", "7.64645");
  svgMarkLine2.setAttribute("stroke", "white");

  // append
  wrapper.appendChild(recipesMark);

  recipesMark.appendChild(svgMark);

  svgMark.appendChild(svgMarkCircle);
  svgMark.appendChild(svgMarkLine1);
  svgMark.appendChild(svgMarkLine2);
}

export { selectionMark };
