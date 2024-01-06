//1
const userName = prompt ('Как Вас зовут?');
alert (`Привет, ${userName}!`);

//2
// const userNumber = prompt ('Введите число');
// const raiseTo = prompt ('Введите степень числа');
// console.log (userNumber ** raiseTo);

// //4
// let myVariable = "my text";
// if (myVariable === "some text") {
//   myVariable = "another text";
// } else {
//   myVariable = "some text";
// }
// console.log(myVariable);

// //5
// let myNumber = 100;
// if (myNumber === 0) {
// myNumber = 1;
// } else if (myNumber < 0) {
//     myNumber= 'less then zero';
// } else if (myNumber > 0) {
// myNumber *= 10;
// }
// console.log(myNumber);

// //6
// let userInput = prompt("введите число");
// let userInputToNumber = Number(userInput);
// let result;
// if (userInputToNumber < 5) {
//   result = "0";
// } else if (userInputToNumber > 5) {
//   result = "1";
// }
// console.log(result);

// //7
// const firstInput = prompt ('введите первое число');
// const secondInput = prompt ('введите второе число');
// const firstInputNumber = Number(firstInput);
// const secondInputNumber = Number(secondInput);
// if (firstInputNumber > secondInputNumber) {
//     console.log (`Большее число: ${firstInputNumber}`);
// } else if (firstInputNumber<secondInputNumber) {
//     console.log (`Большее число: ${secondInputNumber}`);
// } else {
//     console.log ('введены одинаковые числа');
// }

// //8
// const firstInput = prompt("введите первое число");
// const secondInput = prompt("введите второе число");
// const firstInputNumber = Number(firstInput);
// const secondInputNumber = Number(secondInput);
// if (firstInputNumber % secondInputNumber === 0) {
//   console.log("числа кратные");
// } else {
//   console.log("числа некратные");
// }

// //9
// const input = prompt("введти свой средний балл");
// const inputNumber = Number(input);
// if (inputNumber >= 1 && inputNumber <= 4) {
//   console.log("Двоечник, иди учись!");
// } else if (inputNumber >= 5 && inputNumber <= 8) {
//   console.log("Неплохо, но давай еще поднажмем!");
// } else if (inputNumber === 9 || inputNumber ===10) {
//     console.log("Ого, да ты настоящий отличник!");
// }

// //10
// const examScore = prompt("введи балл за экзамен");
// const numberOfProjects = prompt("введи количество выполненных проектов");
// if (examScore > 90 || numberOfProjects > 10) {
//   console.log(10);
// } else if (examScore > 75 && numberOfProjects >= 5) {
//   console.log(90);
// } else if (examScore > 50 && numberOfProjects <= 2) {
//   console.log(75);
// } else {
//   console.log(0);
// }

// //11
// const rentalDay = 40;
// const numberOfDays = prompt("введи кол-во дней");
// if (numberOfDays >= 7) {
//   alert(numberOfDays * rentalDay - 50 + '$');
// }
// if (numberOfDays >= 3) {
//     alert(numberOfDays * rentalDay - 20 + '$');
//   } else {
//     alert('скидки нет, общая стоимость: ' + numberOfDays * rentalDay + '$');
//   }
  