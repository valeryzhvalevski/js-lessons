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
//   const tag = document.createElement(name);
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
  
//////////////

// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'hello world';
// newParagraph.id = 'paragraph';
// document.body.appendChild(newParagraph);
// const paragraph = document.getElementById('paragraph')

// const newBtn = document.createElement('button');
// newBtn.textContent = 'click';
// document.body.appendChild(newBtn);
// const btn = document.getElementsByTagName('button')

// newBtn.addEventListener ('click', makeOne)

// function makeOne () {
// paragraph.textContent = 'Привет';
// }



/////////////
// const div = getElementById('qwerty');
// const button = getElementById('btn');
// button.addEventListener ('click', addInvisible)

// function addBlack () {
//         div.style.color = '#bbb';
// } 

// const div = document.getElementById('qwerty');
//   const button = document.getElementById('btn');

//   button.addEventListener('click', function() {
//     div.classList.toggle('red');
//   });         // менять цвет туда-назад

////////////////
// const image = document.getElementById('myImage');
// const infoParagraph = document.getElementById('infoParagraph');
// const imageUrl = image.getAttribute('src');
// infoParagraph.textContent = imageUrl;


///////////////
//курсор наведен на элемент
// const myDiv = document.getElementById('myDiv');
// const bodyElement = document.body;
// function start() {
//     console.log('курсор наведен на элемент');
// }
// myDiv.addEventListener('mouseover', start)




//////////////////////////////////////////////////////////////////////////



// Задание 8
// Есть массив ссылок:
// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

// const newDiv = document.createElement('div');
// newDiv.style.backgroundColor = 'lightgray';
// newDiv.style.padding = '20px';

// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

// linksArr.forEach(el => {
//     const link = document.createElement('a');
//     link.href = el;
//     link.textContent = el;
//     link.target = '_blank';
//     newDiv.appendChild(link);
//     const br = document.createElement('br');
//     newDiv.appendChild(br);
// });

// document.body.appendChild(newDiv);

//////////////////////////////////////////////////////////////////////////

// Задание 9*
// Есть массив объектов с полями name, age. Например:
// const users = [
// {name: 'Mark', age: 12},
// {name: 'Olga', age: 30},
// {name:'Tom', age: 25},
// {name:'Den', age: 43}
// ]
// Создать в html таблицу (table).
// C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. 
// Имена должны быть красного цвета, age - синего.
// ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. 
// Строк должно создаваться столько, сколько объектов внутри массива, и их количество может быть любым.

// const users = [
//     {name: 'Mark', age: 12},
//     {name: 'Olga', age: 30},
//     {name:'Tom', age: 25},
//     {name:'Den', age: 43}
//     ];

// const userTable = document.getElementById('userTable');

// users.forEach(user => {
//   const row = document.createElement('tr');

//   const nameCell = document.createElement('td');
//   nameCell.textContent = user.name;
//   nameCell.classList.add('name'); 
//   row.appendChild(nameCell);

//   const ageCell = document.createElement('td');
//   ageCell.textContent = user.age;
//   ageCell.classList.add('age'); 
//   row.appendChild(ageCell);

//   userTable.appendChild(row);
// });
    
//////////////////////////////////////////////////////////////////////////

// Задание 10
// Есть верстка: https://teenscool1.notion.site...
// С помощью JavaScript:
// 1) Найти в коде список ul и добавить ему класс “list”.
// 2) На li через один (начиная с самого первого) установить класс “item”
// 3) На все ссылки в примере установить класс “custom-link”

// const ul = document.querySelector('ul');
// ul.classList.add('list');

// const li = document.querySelectorAll('li');
// li.forEach((li, i) => {
//     if(i % 2 === 0) {
//         li.classList.add('item')
//     }
// })

// const link = document.querySelectorAll('a');
// link.forEach(link => {
//     link.classList.add('custom-link');
// })
