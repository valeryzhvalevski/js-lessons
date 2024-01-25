// Задание 1
// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.
// Выведите в консоль строку:

// На компьютере с ОС ... с помощью браузера ... я открыл страничку ...
// (необходимые значения добавьте с помощью BOM)

// console.log(`На компьютере с ОС ${navigator.platform} с помощью браузера ${navigator.userAgent} я открыл страничку ${location.href} `)

//////////////////////////////////////////////////////////////////////////
// Задание 2
// В файле html есть разметка (добавьте ее в свой файл html):

// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>

// 2.1. Вывести в консоль каждое из имен (содержимое каждого li).
// 2.2. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)

// const li = document.querySelectorAll('li');
// li.forEach(element => {
//     console.log(element.textContent);
// });

// li.forEach((element, i) => {
//     console.log(element.textContent = i);
// });

//////////////////////////////////////////////////////////////////////////

// Задание 3
// Добавить к нескольким тегам на странице класс "forRemove".
// Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.

// const li = document.querySelectorAll('li');
// li.forEach((element, i) => {
// if (i % 2 === 0) {
//     element.classList.add('forRemove')
// }
// });

// const forRemove = document.querySelectorAll('.forRemove');
// forRemove.forEach (element => {
//     element.remove();
// });

//////////////////////////////////////////////////////////////////////////

// Задание 4

// Создать с помощью js абзац (тег p). Добавить в него контент.
// Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.
// const p = `
// <p style="font-size: 36px; font-weight: bold;">Hey</p>
// `
// document.body.insertAdjacentHTML("afterbegin", p)

//////////////////////////////////////////////////////////////////////////

// Задание 5
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое.
// Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое.
// Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

// function addTag(name, color, body) {
//   const tag = document.createElement("name");
//   tag.style.color = color;
//   tag.textContent = body;
//   document.body.appendChild(tag);
//   const newLine = document.createElement('br');
//   document.body.appendChild(newLine);
// }

// addTag('p', 'blue', 'синий параграф');
// addTag('h1', 'yellow', 'желтый заголовок');

//////////////////////////////////////////////////////////////////////////


// Задание 6
// Вставить в страницу (в html документ) тег <select>.
// С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.

// const selectElement = document.createElement('select');
// document.body.appendChild(selectElement);

// for (let year = 1960; year <= 2020; year++) {
//   const optionElement = document.createElement('option');
//   optionElement.value = year;
//   optionElement.textContent = year;
//   selectElement.appendChild(optionElement);
// }

//////////////////////////////////////////////////////////////////////////


// Задание 7
// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:

// const clients = [
// {name: "Женя", order: true},
// {name: "Кристина", order: true},
// {name: "Павел", order: false},
// {name: "Виолетта", order: false},
// {name: "Костя", order: true}
// ]

// Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом

// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта
// (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.

// const clients = [
//     { name: "Женя", order: true },
//     { name: "Кристина", order: true },
//     { name: "Павел", order: false },
//     { name: "Виолетта", order: false },
//     { name: "Костя", order: true }
//   ];
  
//   const ulElement = document.createElement('ul');
//   document.body.appendChild(ulElement);
  
//   clients.forEach(client => {
//     const liElement = document.createElement('li');
//     const statusText = client.order ? 'оплатил' : 'отменил';
//     liElement.textContent = `Клиент ${client.name} ${statusText} заказ`;
//     ulElement.appendChild(liElement);
//   });
  
