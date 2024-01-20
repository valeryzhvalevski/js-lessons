Задание 8
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
Вам понадобятся методы строк.

function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst('п пп пsgsufgsuf fegfeogfgoef'))

Задание 9
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
Функция должна быть нечувствительна к регистру.

function checkSpam(str) {
  const strToLowerCase = str.toLowerCase()
  if(strToLowerCase.includes('badword') || strToLowerCase.includes('xxx')) {
    return true;
  } else {
    return false;
  }
}

console.log(checkSpam('Dword'))

Задание 10
Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). 
Пример: «привет, Женя» -> «янеЖ ,тевирп»
Обратите внимание: метод reverse существует только у массивов.

function toReverse(str) {
  const strToArr = str.split('');
  const arrToReverse = [...strToArr]; 
  const reverseStr = arrToReverse.reverse().join('');
  return reverseStr;
}

console.log(toReverse("kslvslv ksvlvnsv? jjjjj 900000"));

Задание 11
Массив содержит строки с информацией о железнодорожных станциях на севере Англии.
Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные,
за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком.

let stations = [
'MAN675847583748sjt567654;Manchester Piccadilly',
'GNF576746573fhdg4737dh4;Greenfield',
'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
'SYB4f65hf75f736463;Stalybridge',
'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
];

Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:
MAN: Manchester Piccadilly
Вывести эти строки в консоль
ПОДСКАЗКА:
1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
2. Найдите номер символьного номера точки с запятой.
3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.
4. Объедините две новые переменные и строк

let stations = [
  'MAN675847583748sjt567654;Manchester Piccadilly',
  'GNF576746573fhdg4737dh4;Greenfield',
  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
  'SYB4f65hf75f736463;Stalybridge',
  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
];

stations.forEach(station => {
  const parts = station.split(';');
  const stationCode = parts[0].slice(0, 3); // Берем только первые три символа
  const stationName = parts[1];
  const resultString = `${stationCode}: ${stationName}`;
  console.log(resultString);
});

Задание 12
Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
Пример:
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
console.log(unique(strings) ); должен вывести "кришна, харе, :-O"
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
let newString = [];

strings.forEach(element => {
  if (!newString.includes(element)) {
    newString.push(element);
  }
});
console.log(newString.join(', '));

Задание 13
Женя и Юля изучают кошек. Каждая из них узнала у 10 владельцев кошек о возрасте их кошки и
сохранила данные в массиве (по одному массиву для каждой девочки). На данный момент им просто интересно узнать,
является ли кошка взрослой или котёнком.
Кошка считается взрослой, если ей не менее 2 лет, и котёнком, если ей менее 2 лет.
Создайте функцию verifyCats, которая принимает 2 массива возрастов кошек (catsJane и catsJulia) и выполняет следующие действия:
1. Женя выяснила, что владельцы первой и последней кошки на самом деле имеют собак, а не кошек!
Поэтому удалите возраст собак из Жениного массива.
2. Создайте общий массив с данными Жени (исправленными) и Юли.
3. Для каждой кошки этого общего массива выведите в консоль текст:
- если кошка взрослая -  Кошка № 1 взрослая, ей 6 лет
- если котёнок - Кошка № 2 ещё котёнок
4. Вызовите функцию для двух наборов тестовых данных.
Тестовые данные:
1.  Данные Жени [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
Данные Юли [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]
2.  Данные Жени [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]
Данные Юли [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]
В задании необходимо использовать методы массивов: forEach, slice, concat

let catsJane = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
let catsJulia = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];

function verifyCats(catsJane, catsJulia) {
  let catsJaneCorrect = catsJane.slice(1, catsJane[catsJane.length - 1]);
  let allCats = [...catsJaneCorrect, ...catsJulia];
  allCats.forEach((age, i = 1) => {
    if (age >= 2) {
      console.log(`Кошка №${allCats[i]} взрослая`);
    } else {
      console.log(`Кошка №${allCats[i]} еще ребенок`);
    }
  });
  return;
}
verifyCats(catsJane, catsJulia)


///////// чтобы 2 введенных параметра были числами

function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("данные не явл числами");
  } else if (a === null || b === null || a === undefined || b === undefined) {
    console.log( "Необходимо ввести оба параметра");
} else {
    console.log(a + b);
  }
}

sum(9);


Задание 14
Решить 4 задание из прошлой темы, используя метод filter
Определить массив, например let arr = [5, 4, 3, 8, 0];
Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, 
но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
Например, запуск функции filterFor(arr, 5) дает результат [5,8]
запуск функции filterFor(arr, 10) дает результат []
запуск функции filterFor(arr, 3.11) дает результат [4,5,8]
let arr = [5, 4, 3, 8, 0];
function filterFor(arr, a) {
  return arr.filter((element) => element >= a)

}
console.log(filterFor(arr, 5))


const objWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}
// let sum = 0;
// for(let key in objWithNumbers) {
//   if(typeof objWithNumbers[key] ==='number') {
//     sum +=objWithNumbers[key];
//     console.log(sum)
//   }
// }
function sumObjValues(obj) {
  let count = 0;
  for (let key in obj) {
    if(typeof obj[key] === 'number') {
      count += obj[key];
    }
  }
  return count;
}
console.log(sumObjValues(objWithNumbers))

Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал.
Используйте подходящий метод массива - forEach или map.

Определить массив, например let arr = [5, 4, 3, 8, 0];
Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr,
но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
Например, запуск функции filterFor(arr, 5) дает результат [5,8]
запуск функции filterFor(arr, 10) дает результат []
запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

function filterFor(arr, a) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

filterFor(arr, 5);

console.log(filterFor(arr, 5));
console.log(filterFor(arr, 10));
console.log(filterFor(arr, 3.11));

let arr = [5, 4, 3, 8, 0];

function filterFor(arr, a) {
  return arr.filter(element => element >= a);
}

console.log(filterFor(arr, 5));   // Вывод: [5, 8]
console.log(filterFor(arr, 10));  // Вывод: []
console.log(filterFor(arr, 3.11)); // Вывод: [5, 4, 8]

Задание 13
Описать функцию, которая принимает массив строк и возвращает массив,
содержащий только строки более 3-х символов. Проверить работу функции на примере:  ['yes', 'hello', 'no', 'easycode', 'what'].

function bigArr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function bigArr(arr) {
  return arr.filter(element => element.length > 3);
}

const myArr = ['yes', 'hello', 'no', 'easycode', 'what'];
const resultArray = bigArr(myArr);

console.log(resultArray);
// Вывод: ['hello', 'easycode', 'what']

Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы
(размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
ПОДСКАЗКА.
Для правильной сортировки метод sort принимает функцию,
параметры которой a и b - это элементы массива. В данной задаче элементы массива, то есть параметры a и b,
сами являются массивами и обладают всеми свойствами массивов.

function sortByArrayLength(arr) {
  arr.sort((a, b) => a.length - b.length);
  return arr;
}

const arrayOfArrays = [[14, 45], [1], ['a', 'c', 'd']];
const sortedArray = sortByArrayLength(arrayOfArrays);

console.log(sortedArray);

Создайте функцию getAverageHumanAge, которая принимает массив возрастов кошек (catAges) и выполняет следующие действия по порядку:

1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года,
человеческий возраст = возраст кошки * 10. Если кошке больше 2 лет, человеческий возраст = возраст кошки * 7. (сделать через map)
2. Исключает всех кошек младше 18 человеческих лет. (сделать через filter)
3. Возвращает средний человеческий возраст для всех взрослых кошек. (сумму для среднего посчитать через reduce)
Вызовите функцию для обоих наборов тестовых данных.
Тестовые данные:
1: [7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]
2: [1, 16, 12, 4, 5, 1, 3, 11, 7, 2]

В задании необходимо использовать методы массивов: map, filter, reduce

function getAverageHumanAge(catAges) {
  const humanAges = catAges.map(catAges => (catAges <= 2) ? catAges * 10: catAges *7);
  const adult = humanAges.filter(element => element >=18);
  let sum = 0;
  const allSum = adult.forEach(function(number) {
    sum += number;
  });
  const averageAge = allSum / adult.lenght;
  return averageAge;
}

const catAges1 = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
const catAges2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];
console.log(getAverageHumanAge(catAges2))
function getAverageHumanAge(catAges) {
  const humanAges = catAges.map(catAge => (catAge <= 2) ? catAge * 10 : catAge * 7);
  const adults = humanAges.filter(element => element >= 18);

  let sum = 0;
  adults.forEach(function(number) {
    sum += number;
  });

  const averageAge = sum / adults.length;
  return averageAge;
}

const catAges1 = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
const catAges2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];

console.log(getAverageHumanAge(catAges1));
console.log(getAverageHumanAge(catAges2));

