"use strict";

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
