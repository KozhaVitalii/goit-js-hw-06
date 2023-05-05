// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і змінює
// інлайн - стиль span#text, оновлюючи властивість font - size.В результаті, перетягуючи повзунок,
// буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>


// v1:
  const fontSizeControl = document.querySelector('#font-size-control');
  const textSpan = document.querySelector('#text');

  fontSizeControl.addEventListener('input', () => {
    textSpan.style.fontSize = `${fontSizeControl.value}px`; 
  });

// textSpan.style.fontSize = `${fontSizeControl.value}px`; // у даному записі ми отримуємо 
// поточне значення з єлементу input.Яке в свою чергу використовується як значення для
// встановлення розміру шрифта для нашого контенту який розташований в спані.Значення контексту
// знаходимо через #text


// Цей скрипт встановлює обробник події input для елемента input#font - size - control, який викликає функцію,
// яка змінює розмір тексту в елементі span#text.Значення розміру шрифту береться з елемента input#font - size - control 
// та оновлюється в інлайн - стилі span#text, встановлюючи властивість fontSize у відповідне значення.

// // textSpan.style.fontSize = `${fontSizeControl.value}px` - цей запис встановлює розмір шрифту тексту в 
// елементі span#text через інлайн - стиль. Розберемо її детальніше:

// textSpan - це змінна, що містить посилання на елемент span#text.

// style - це властивість, яка представляє об'єкт, що містить всі CSS-стилі, що застосовуються до елементу.

// fontSize - це властивість, що визначає розмір шрифту тексту.За замовчуванням вона має значення medium.Якщо встановити
// значення цієї властивості у відповідне число та додати одиниці виміру(у нашому випадку, px), то це встановить розмір 
// шрифту для елементу span#text.

// ${ fontSizeControl.value } px - це рядок - шаблон, який містить значення, що ми витягуємо з елемента input#font - size - control,
// тобто fontSizeControl.value, та додає до нього одиниці виміру px.Результат цього рядка - шаблону буде встановлено як значення 
// властивості fontSize.

// Отже, якщо повзунок input#font - size - control зміщується, значення властивості fontSize змінюється відповідно до нового
// значення повзунка, і розмір шрифту тексту в елементі span#text змінюється відповідно до нового значення властивості fontSize

// В даному випадку зміна розміру шрифту відбувається за допомогою відслідковування події input, яка виникає, коли користувач 
// переміщує повзунок input#font - size - control.
// Кожен раз, коли виникає подія input, скрипт отримує значення повзунка з властивості value і встановлює його як розмір шрифту 
// для елементу span#text.
// Таким чином, розташування повзунка на сторінці не відслідковується напряму.Замість цього, зміна значення властивості value 
// повзунка input#font - size - control відображається в розмірі шрифту елементу span#text через використання події input.
// Таким чином, відслідковування координат повзунка не є необхідним у цьому випадку.

// Значення value повзунка має числове значення в діапазоні від min до max, які задаються в атрибутах min та max елементу <input>.
// В даному випадку, значення min встановлене в 16, а значення max - в 96. Отже, коли користувач переміщує повзунок, значення 
// value змінюється від 16 до 96.

// Значення value потім використовується як розмір шрифту за допомогою шаблонних рядків в інлайн - стилі елемента span#text, який 
// змінюється на кожній ітерації циклу обробки подій input.

// Отже, зміна розміру шрифту елементу span#text залежить від поточного значення value, яке визначається положенням повзунка на 
// діапазоні від 16 до 96.


