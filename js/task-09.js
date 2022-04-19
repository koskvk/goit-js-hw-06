function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');

btnEl.addEventListener('click', onBodyChangeColor);

function onBodyChangeColor() {
  const randomHexColor = getRandomHexColor();

  document.body.style.backgroundColor = randomHexColor;

  onTextElChangeText(randomHexColor);
};

function onTextElChangeText(value) {
  textEl.textContent = value
};
