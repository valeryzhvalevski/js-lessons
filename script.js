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
