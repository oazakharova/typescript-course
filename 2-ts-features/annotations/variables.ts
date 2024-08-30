// : number - аннотация типа number
// в переменную oranges можно присваивать только значения этого типа
let oranges: number = 5;
// oranges = false; - ошибка
oranges = 10;

let title: string = "";
// speed = 5;
title = "hello world";

let hasDog: boolean = false;
hasDog = true;
// hasDog = 5;

let nothing: null = null;
let nothing1: undefined = undefined;

// build-in objects - встроенные типы
let now: Date = new Date();

// array
let colors: string[] = ["orange", "green", "white"]; // массив только строк
let numbers: number[] = [1, 2, 3];
let results: boolean[] = [false, true, true];

// classes
class Car {}
let car:Car = new Car();

// объектные литералы
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
}

// аннотация для функций
const logNumberFunction: (n:number) => void = (n: number) => {
  console.log(n);
}

// когда использовать аннотацию типов:

// 1 - когда функция возвращает тип any и нужно уточнить тип
const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json); // тип any у переменной coordinates, тк JSON.parse возвращает тип any
const coordinates: {x: number, y: number} = JSON.parse(json);

// 2 - переменная объявляется и инициализируется в разных местах
let words = ['one', 'two', 'three'];
// let isTwo; // any
let isTwo: boolean; // или изначально присвоить false

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'two') {
    isTwo = true;
  }
}

// 3 - переменные, тип которых TS не может определить автоматически
let myNumbers = [-10, -1, 12];
// let positiveNumber = null; // TS решил, что здесь будет храниться null
// for (let i = 0; i < myNumbers.length; i++) {
//   if (myNumbers[i]>0) positiveNumber = myNumbers[i]; // здесь ошибка, тк присваиваем число, а не boolean
// }
let positiveNumber: null | number = null; // TS решил, что здесь будет храниться null
for (let i = 0; i < myNumbers.length; i++) {
  if (myNumbers[i]>0) positiveNumber = myNumbers[i]; // здесь ошибка, тк присваиваем число, а не boolean
}