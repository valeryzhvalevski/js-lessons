// // Задание 1
// // Задайте в коде переменную n с числовым значением.
// // С помощью логического И в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.

const n = 300;
const result = (n >= 0 && n <= 100) ? "Переменная n находится в диапазоне от 0 до 100 включительно." :
"Переменная n не находится в диапазоне от 0 до 100 включительно.";

console.log(result);

// // Задание 2
// // Дан объект с именами и заработными платами:
// // const engineers = {
// // Den: 1000,
// // Matt: 5000,
// // Steve: 2000
// // }
// // Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:
// // Заработная плата ххх составляет ххх рублей.
// // ВНИМАНИЕ. Ваша программа должна работать для любого количества имён и зарплат!

const engineers = {
Den: 1000,
Matt: 5000,
Steve: 2000
}
for (let key in engineers) {
   console.log(`Заработная плата ${[key]} составляет ${engineers[key]} рублей.`);
}

// // Задание 3
// // Создать массив из 5 элементов.
// // Используя цикл for, вывести каждый второй элемент массива в консоль.

const arr = [2, 4, 'r', 9, 'l'];
for (let i = 1; i < arr.length; i += 2) {
  console.log(arr[i]);
}

// // Задание 4
// // Есть массив произвольных чисел:
// // let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// // Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:
// // Индексу 0 соответствует число 42
// // Индексу 1 соответствует число 65
// // и т.д.

let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
for (let i = 0; i < numbers.length; i++) {
    console.log(`Индексу ${i} соответствует число ${numbers[i]}`);
}


// // Задание 5
// // Дан массив объектов, например:
// // let questions = [{
// //     question: "What's the currency of the USA?",
// //     choices: ["US dollar", "Ruble", "Horses", "Gold"],
// //     corAnswer: 0
// // }, {
// //     question: "Where was the American Declaration of Independence signed?",
// //     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
// //     corAnswer: 0
// // }];
// // Добавить в каждый объект дополнительное поле usersAnswer со значением null.
// // Решение должно работать для массива любой длины.

let questions = [
  {
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
  },
  {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0,
  },
];

for (let i = 0; i < questions.length; i++) {
  questions[i].usersAnswer = null;
}
console.log(questions);

// // Задание 6
// // Есть массив произвольных чисел:
// // let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// // 1) Вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком
// // 2) Посчитать и вывести в консоль сумму элементов в массиве.
// // Подсказка: в задачах такого типа нужно заранее предусмотреть переменную (например, sum) и записать в нее начальное значение (в случае с суммой - ноль).
// // Затем уже описать цикл, в котором эта сумма будет считаться (в каждой итерации цикла к ней будет прибавляться следующий элемент массива).
// // 3) Посчитать и вывести в консоль сумму только четных чисел в массиве.
// // 4) Найти и вывести в консоль максимальное число массива.
// // Подсказка: как и в случае с суммой, здесь сначала нужно объявить переменную (например, max), записать в нее первый элемент массива,
// // а затем уже в цикле искать максимальное значение.
// // 5) Определить и вывести в консоль индекс максимального числа массива (или индексы, если число встречается более одного раза).
// // Само максимальное число мы уже нашли в прошлой части задачи, повторно его искать не нужно.

let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];

for (let element of numbers) {
   console.log(element);
}

for (let i = 0; i < numbers.length; i++) {
   console.log(numbers[i]);
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
sum = sum + numbers[i];
}
console.log(sum);

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sum = sum + numbers[i];
  }
}
console.log(sum);

let max = numbers[0];
for (let element of numbers) {
  if (element > max) {
    max = element;
  }
}
console.log(max);

let max = numbers[0]; 
let indexesOfMax = [0]; 

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
        indexesOfMax = [i]; 
    } else if (numbers[i] === max) {
        indexesOfMax.push(i); 
    }
}

console.log(indexesOfMax);
