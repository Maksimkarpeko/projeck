'use strict';

// let number = 10;

// while (number++,number>500){
//     console.log(number)
// }
// урок 2 Типы данных
// let number = 4.6;// тип данных число
// console.log(4/0)// => infinity
// console.log(-4/0)// => -infinity
// console.log("string" *9) // Nan

// const persone = "Alex";// тип данных string

// const bool = true;// тип данных boole true/false

// console.log(something); // тип данных null

// let und;
// console.log(und) // тип данных undefined

// const obj = {
//   name: "Jonh",
//   age: 25,
//   isMarried: false
// };

// console.log(obj.age);
// console.log(obj["name"]);


// let arr = ["plum.png", "oreng.jpg",'apple.bmp'];
// console.log(arr[0]);

// const arr = [1,"b",3];

// arr[10]="3456"

// console.log(arr[5])

// const arrObj = {
//   0:"a",
//   1:"b",
//   2:'c',
//   abc: {
//     df:[{},{}],
//     def: {

//     }
//   }
// };
// const b = "b"


// arrObj.b="1234";
// arrObj['b']="1234";

// console.log(arrObj['b'])
// console.log(arrObj.b)

// const obj = {a:1,b:2};

// const obj = {
//   Anna: 500,
//   "Alice": 800
// };

// Урок 3 Простое общение с пользовотелем

// alert("Hello");

// const result = confirm("Are you here")
// console.log(result)

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше Фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));

// Урок 4 Интерполяция (ES6)

// const category = 'toys'

// console.log(`https://www.google.by/${category}`);

// const user = "Ivan"

// alert(`Привет, ${user}`)

//Урок 5  Операторы Js
// console.log("arr"+ "-object");
// console.log(4 + +"5")

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// ++incr;
// --decr


// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log (2*4 !== '8');

// const isChecked = false,
//       isClose = false;
// console.log(isChecked || !isClose);

// Уроки 6 Git and Github
 
// Урок 7 Условие

// if(0){
//     console.log("ok");
// } else {
//     console.log("Error");
// }



// if(num < 49){
//     console.log("error");
// } else if (num>100){
//     console.log("Много");
// } else{
//     console.log("ok!")
// }

// (num === 50) ? console.log("ok!") : console.log("error");

// const num = 50;

// switch (num){
//     case 49:
//         console.log("Неверно");
//         break;
//     case 100:
//         console.log("Неверно");
//     break;
//     case 50:
//         console.log("Правильно");
//     break
//     default:
//         console.log("не в этот раз");
//         break;
// }
// 8.1 Логические операторы

// const hamburger = 5;
// const fries = null;
// if(hamburger && fries){
//     console.log('я сыт');
// } else {
//     console.log("Я не сыт")
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "ifjjwfahsjfa");

// if(hamburger === 3 && cola === 1 && fries ){
//     console.log('Все сыты');
// } else {
//     console.log("Мы уходим");
// }


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if(hamburger === 3 && cola ===2 || fries === 3 && nuggets){
//     console.log('Все Довольны');
// } else {
//     console.log("Мы уходим");
// }

// console.log(hamburger === 3 && cola ===2 || fries === 3 && nuggets);

// let JonhReport, AlexReport, samReport, mariaReport = "done";

// console.log(JonhReport || AlexReport || samReport || mariaReport);

// Задание №1
// console.log(NaN && 2 && undefined); // => nan
// console.log(1 && 2 && 3); // => 3
// console.log(!1 && 2 || !3); // => False
// console.log(25 || null && !3); // => 25
// console.log(NaN || null || !3 || undefined || 5); // => 5
// console.log( NaN || null && !3 && undefined || 5); // => 5
// console.log(5 === 5 && 3 > 1 || 5); // => true


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }



// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// 9 Циклы

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// for (let i = 1; i < 10; i++){
//     if (i === 6) {
//         break;
//         continue;
//     }
//     console.log(i);
// }
// 9.1 Циклы в цикле и метки

// for (let i = 0; i < 3; i++){
//     console.log(i);
//     for (let j = 0; j < 3; j++){
//         console.log(j);
//     }
// }

// let result = '';
// const length = 10;

// for (let i = 1; i < length; i++){
    
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += '\n';
// }

// console.log(result);


// first: for (let i = 0; i < 3; i++){
//     console.log(`First level : ${i}`);
//     for (let j = 0; j < 3; j++){
//         console.log(`Second level : ${j}`);
//         for (let k = 0; k < 5; k++){
//             if (k === 2) break first;
//             console.log(`Third level : ${k}`);
//         }
//     }
// }
// 10 Функции
// let  num = 20

// function showFirstMessage(text) {
//    console.log(text);
//    console.log(num);
// }

// showFirstMessage("Hello World");
// console.log(num);

// function calc(a, b) {
//    return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 3));
// console.log(calc(20, 18));

// function ret() {
//    let num = 50;

      //
   
//    return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {
//    console.log("hello")
// };

// logger();

// const calc = (a, b) => a + b ;

// const mout = 500
// const usdCurr = 50;
// const eurCurr = 32;
// const discount = 0.9;

// function convert(amout, curr) {
//    return curr * amout;
// }

// function promoption(result) {
//    console.log(result * discount)
// }

// const res = convert(500, usdCurr);
// promoption(res);


// function test() {
//    for (let i = 0; i < 5; i++){
//       console.log(i);
//       if( i === 3) return
//    }
//    console.log("Done");
// }

// test();

// function doNothing() { };
// console.log(doNothing() === undefined);

// 11 методы и свойства строк и чисел
// const str = 'teSt';

// console.log(str[2]);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// const fruit = "Some fruit";

// console.log(fruit.indexOf("m"));

// const logg = "hello world";

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

// 12 Callback функция

// function first() {
//       do something
//       setTimeout(function () {
//             console.log(1);
//       }, 500);
// }

// function seconds() {
//       console.log(2)
// }


// first();
// seconds();

// function learnJs(lang, callback) {
//       console.log(`Я учу: ${lang}`);
//       callback();
// }

// function done() {
//       console.log("Я прошел этот урок");
// }

// learnJs("javaScript", done);


// 13 Объекты, диструктиризация объектов (ES6)

// const options = {
//    name: 'test',
//    width: 1024,
//    height: 1024,
//    colors: {
//       border: "black",
//       bg: 'red'
//    },
//    makeTest: function () {
//       console.log("Test");
//    }
// };

// options.makeTest();

// const { border, bg } = options.colors;
// console.log(border)

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//    if(typeof (options[key]) === "object"){
//       for (let i in options[key]) {
//          console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//       }
//    } else {
//       console.log(`Свойство ${key} имеет значение ${options[key]}`);
//       counter++;
//    }
// }
// console.log(counter);


// 14 Массивы псевдомассивы

// const arr = [10, 130, 54, 2, 8];
// arr.sort(compareNum);
// console.log(arr);


// function compareNum(a, b) {
// 	return a - b;
// }
// arr[99] = 0;
// console.log(arr.length);

// console.log(arr)

// arr.forEach(function (item, i, arr) {
// 	console.log(`${i}: ${item} внутри массива [${arr}]`)
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let value of arr) {
// 	console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));


//15 Передача данных

// let a = 5,
//    b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//    a: 5,
//    b: 1
// };

// const copy = obj; //obj === Ссылка

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//    let objCopy = {};

//    let key;
//    for (key in mainObj) {
//       objCopy[key] = mainObj[key];
//    }

//    return objCopy;
// }

// const numbers = {
//    a: 2,
//    b: 5,
//    c: {
//       x: 7,
//       y: 4,
//    }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);

// console.log(numbers);

// const add = {
//    d: 17,
//    e: 20,
// }


// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ["a", 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1]= "Lorem "
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'rutube', 'vine'],
//       blogs = ['word', 'ww', 'wsf'];
//       internet = [...video, ...blogs, 'vk'];

// console.log(internet);

// function log(a, b, c) {
//    console.log(a+b);
//    console.log(b+c);
//    console.log(c+a+b);
// }

// const num = [2, 5, 6];

// log(...num)

// const array = ['a', 'v'];

// const newAarray = [...array];

// console.log(newAarray);

// const q = {
//    one: 1,
//    two: 2
// };

// const newObj = {...q};

//16 Основы ООП, прототипно-орентированое наследие

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof (str));//=>string
// console.log(typeof (strObj));//=>object

// console.dir([1, 2, 3]);

// const soldier = {
//    health: 400,
//    armor: 100,
//    sayHello: function () {
//       console.log("hello");
//    }
// };


// const Jonh = Object.create(soldier);

// const Jonh = {
//    health: 100,
// };

// Jonh.__proto__ = soldier;

// Object.setPrototypeOf(Jonh, soldier);

// console.log(Jonh.sayHello);
// Jonh.sayHello();

//17 Исправление ошибок Breakpoint

// function hello() {
//    console.log("Hello world");
// }

// hello();

// function hi() {
//    console.log("Hi teacher");
// }

// hi();

// const arr = [1, 865, 50, 877, 15],
//    sorted = arr.sort(compareNum);
      
// function compareNum(a, b) {
//    return a - b;
// }

// console.log(sorted);

// 18 Диномическая типезация JS

// To string

// 1) Через мемод String
// console.log(typeof (String(null)));// => string
// console.log(typeof (String(100)));// => string

// 2) Канкатинация
// console.log(typeof (5 + ''));// => string

// const num = 5;

// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + "px";

// console.log(fontSize);

// To Number

//1) Через метод Number
// console.log(typeof(Number('kfasl;fka')));// => Number
// console.log(Number("kfasl;fka"));//=> NaN

//2) Унарный +
// console.log(typeof (+"10"));//=> Number

//3) Через методы
// console.log(typeof (parseInt("15px", 10)));// number

// let answer = prompt("Введи свой возраст", "19");

// let year = prompt("Введи год рождение", "2023");

// let years = year - answer;

// alert(years);

// To boolean

//1)
// 0, '', null, undefined, NaN; => false

// let switcher = null;
// if (switcher) {
//    console.log("Working")
// }

// switcher = 1;

// if (switcher) {
//    console.log("Working")
// }

// 2) через метод Boolean
// console.log(Boolean('kfasl;fka'))// => true
// console.log(typeof (boolean('kfasl;fka')))//=> boolean

//3) Через знаки !! => boolean

// console.log(typeof (!!"4444"));// => boolean

// 19 Замыкание и лексическое окружение

// let number = 5; debugger

// function lognumber() {
//    console.log(number);debugger
// }

// number = 6;

// lognumber(); debugger // =>6


// number = 8;

// lognumber(); debugger // => 8

// function createCounter() {
//    let counter = 0;
//    const myFunction = function () {
//       counter = counter + 1;
//       return counter;
//    }
//    return myFunction;
// }

// const increment = createCounter();

// const c1 = increment();
// const c2 = increment();
// const c3 = increment();


// console.log(c1, c2, c3);//=> 1,2,3


// 20 практика
// let x = 5;
// console.log(x++);//=>5

// console.log([] + false - null + true);//=>Nan
// let y = 1;
// let x = y = 2;
// console.log(x);// =>2

// console.log([] + 1 + 2);//=>12
// console.log("1"[0])// =>1

// console.log(2 && 1 && null && 0 && undefined)//=>null
// let a, b;
// // console.log(typeof (a && b));// => undefined
// // console.log(typeof !!(a && b));// => boolean

// // console.log(null || 2 && 3 || 4);// => 3
// a = [1, 2, 3];
// b = [1, 2, 3];
// console.log(a == b);//=>false

// console.log(+"Infinity");//=>Infinity
// console.log("Ёжик" > "яблока");//=>false
// console.log(0 || '' || 2 || undefined || true || false);//=> 2
vsfs
vsfs