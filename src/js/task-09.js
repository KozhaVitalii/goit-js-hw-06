// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на
// button.change - color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.


const btnEl = document.querySelector('.change-color');
const nameColorEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

console.log(btnEl);
console.log(nameColorEl);
console.log(bodyEl);

btnEl.addEventListener('click', onSetColor);

function onSetColor (event) {
  nameColorEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = nameColorEl.textContent;
}

function getRandomHexColor(event) {
  console.log('Клик по кнопке');
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
