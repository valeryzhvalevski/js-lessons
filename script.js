Задание 2
Создать переменную и записать в нее число, например 10.
10 раз увеличить значение этой переменной на 1. Итоговый результат вывести в консоль.

let num = 10;
for (let i = 1; i < 11; i++) {
  console.log(num + i);
}

Задание 3
Увеличивая счетчик цикла на 2, нужно 5 раз выполнить след. действия:
- запросить у пользователя ввод числа
- проверить, равно ли это число 10. Если равно, вывести в консоль "Равно 10". Иначе вывести "Не равно 10"
В итоге должно получиться 5 запросов и 5 результатов в консоли.

for (let i = 0; i < 10; i+=2){
    const userInput = +prompt();
    if (userInput == 10) {
        console.log("Равно 10");
    } else {
        console.log("Не равно 10");
    }
}

Задание 4
Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
** Задавать количество чисел, которые нужно вывести, при помощи функции prompt.

const count = +prompt("введите кол-во чисел");
for (let i = 0; i <= count; i++) {
  console.log(i ** 2);
}

Задание 5
Напишите программу, которая выводит в консоль числа от 1 до 100.
При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz»,
а вместо чисел, кратных пяти, — слово «Buzz».
Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

Задание 6
Перепишите код, заменив цикл for на while, без изменения поведения цикла.

for (let i = 0; i < 3; i++) {
alert( `number ${i}!` );
}
let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i +=1;
}

Задание 7
Переписать задание 4 в виде функции. Т.е. описать функцию, которая выводит квадраты чисел
из заданного диапазона (диапазон будет попадать в функцию как аргументы - min и max).

function squareNumber(min, max) {
  for (let i = min; i <= max; i++) {
    console.log(i ** 2);
  }
}
squareNumber(2, 6);

Задание 8
Написать функцию, котрая возвращает строку - случайный цвет в формате rgb.
Это будет строка вида "rgb(10,55,250)"
Здесь у вас будет две функции: одна ваша - getRandomRGB,
а вторая - функция получения случайного числа в диапазоне min - max.
Вот эта функция (просто скопируйте, она уже готова):
function getRandomInteger(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}
Подсказки:
- Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255.
- Одна функция может вызывать другую функцию

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomRGB() {
  const red = getRandomInteger(0, 255);
  const green = getRandomInteger(0, 255);
  const blue = getRandomInteger(0, 255);
  return `rgb(${red},${green},${blue})`;
}

const color = getRandomRGB();
console.log(color);
