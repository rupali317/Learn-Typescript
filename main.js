// Type annotations used in typescript. Not acceptables in JS
let num = 2; // number type
let bool = true; // boolean type
let str = "Hello"; // string type
let nullVar = null; // any type
let undefinedVar = undefined; // any type
let bigIntVar = BigInt(2); // bigint type
let sym = Symbol(); // symbol type

console.log("--------Values--------");
console.log("num", num);
console.log("bool", bool);
console.log("str", str);
console.log("nullVar", nullVar);
console.log("undefinedVar", undefinedVar);
console.log("bigIntVar", bigIntVar);
console.log("sym", sym);
console.log("--------Typeof--------");
console.log(typeof num);
console.log(typeof bool);
console.log(typeof str);
console.log(typeof nullVar);
console.log(typeof undefinedVar);
console.log(typeof bigIntVar);
console.log(typeof sym);
// const name1 = "Ron";
// console.log(typeof name1);
// 1. Types of data type
// const bigNum = BigInt(2); // would this work?
// let bigNum = 2n;
// let ans = num + "3";
//num = num + "2"; what happens here
// function functionName1(a, b) {
//   // what warning/indication will you get in?
//   console.log(a, b);
// }
