const inputElem = document.getElementById('name-input');
const outputElem = document.getElementById('name-output');

inputElem.addEventListener('input', () => {
  const inputElemValue = inputElem.value.trim();

  if (inputElemValue === '') {
    outputElem.textContent = 'Anonymous';
  } else {
    outputElem.textContent = inputElemValue;
  }
});
