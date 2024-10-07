function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainer = document.querySelector('#boxes');
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  createBoxes(amount);
});

function createBoxes(amount) {
  const boxes = [];
  if (amount < 1 || amount > 100)
    return alert(
      'Incorrect amount of elements. Please enter number between "1" and "100"'
    );
  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesContainer.append(...boxes);
  input.value = '';
}

destroyBtn.addEventListener('click', () => {
  boxesContainer.innerHTML = '';
  input.value = '';
});
