// create the selection mark
function selectionMark(dish) {
  const wrapper = document.getElementById(`wrapper_${dish.id}`);
  wrapper.innerHTML += `<div id="mark_${dish.id}"
  class="recipes__mark position-absolute top-0 start-100 translate-middle"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    >
    <circle cx="12.5" cy="12.5" r="12.5" fill="#0FC261" />
    <line
    x1="6.35355"
    y1="9.64645"
    x2="12.3536"
    y2="15.6464"
    stroke="white"
    />
    <line
    x1="11.6464"
    y1="15.6464"
    x2="19.6464"
    y2="7.64645"
    stroke="white"
    />
    </svg>
    </div>`;
}

export { selectionMark };
