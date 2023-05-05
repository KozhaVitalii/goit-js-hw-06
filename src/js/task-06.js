const inputElement = document.getElementById("validation-input");
const dataLength = Number(inputElement.getAttribute("data-length"));
console.log(dataLength);

inputElement.addEventListener('blur', onInputChange);
    

function onInputChange(event) {
    const inputLength = inputElement.value.length;
    console.log(inputLength);

    inputLength === dataLength ? styleValid(event) : styleInvalid(event);
};

function styleValid(event) {
    inputElement.classList.add('valid');
    inputElement.classList.remove('invalid');
}

function styleInvalid(event) {
    inputElement.classList.add('invalid');
    inputElement.classList.remove('valid');
}

// або так:

// function onInputChange(event) {
//     const inputLength = inputElement.value.length;
//     console.log(inputLength);

//     if (inputLength === dataLength) {
//     inputElement.classList.add('valid');
//     inputElement.classList.remove('invalid');
//   } else {
//     inputElement.classList.add('invalid');
//     inputElement.classList.remove('valid');
//   }
// };




// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо
// правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна
// кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні
// файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }