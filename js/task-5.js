function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyHTML = document.body;
const cngColorBtn = document.querySelector('button.change-color');
const currentColorInfo = document.querySelector('span.color');

cngColorBtn.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  bodyHTML.style.backgroundColor = newColor;
  currentColorInfo.textContent = newColor;
});
