// Задание 7
// Определить массив let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
// Создать новый массив из элементов массива arr, но в новом должны содержаться только
// положительные элементы.
// Подсказка. Изначально нужно объявить пустой массив-хранилище (например, let newArr = []).
// Затем пройтись в цикле по массиву arr, и в каждой итерации,
// если элемент положительный, добавлять его в массив newArr.

let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
let newArr = arr.filter(function(number) {
    return number > 0;
})
console.log(newArr);

// Задание 8
// Определить массив, например let nums = [5, 4, 3, 8, 0] и переменную let limit = 5;
// Создать новый пустой массив. В цикле наполнить его элементами nums,
// но в новом должны содержаться элементы, больше и равные (>=) значению переменной limit.
let nums = [5, 4, 3, 8, 0];
let limit = 5;
let newNums = [];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] >= limit) {
    newNums.push(nums[i]);
  }
}
console.log(newNums);

// Задание 9
// Существует массив объектов, описывающих пользователей, например:
// const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}]
// Пройти в цикле по массиву и вывести имена всех пользователей, возраст которых больше 15.
const users = [
  { name: "Vasya", age: 23 },
  { name: "Olya", age: 12 },
  { name: "Anna", age: 22 },
  { name: "Alex", age: 18 },
  { name: "Valery", age: 8 },
];

users.forEach(function (item) {
  if (item.age > 15) {
    console.log(item.name);
  }
});

// Задание 10
// Задать массив слов. Например:
// let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
// 1) Создать новый массив. С помощью цикла наполнить его объектами с ключами word (само слово), length (длина слова):
// [{word:'морковь', length: 7}, {word:'баклажан', length: 8} и т.п.]
// Вывести этот массив в консоль.
// Подсказка: длину строки можно определить с помощью метода .length.
// Например, для переменной let string = 'text' это будет string.length (результат - 4, т.к. слово text состоит из 4 символов)
// 2) Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"

let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];

let vegetablesNew = [];

for (let i = 0; i < vegetables.length; i++) {
    let currentVeggie = vegetables[i];
    let veggieLength = currentVeggie.length;
    vegetablesNew.push({ name: currentVeggie, length: veggieLength });
}
console.log(vegetablesNew);

vegetablesNew.forEach(function(item) {
    console.log(`${item.name} - ${item.length}`);
});
