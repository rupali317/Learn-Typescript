// Type annotations used in typescript. Not acceptables in JS

let num: number = 2; // number type
let bool: boolean = true; // boolean type
let str: string = "Hello"; // string type
let nullVar: any = null; // any type
let undefinedVar: any = undefined; // any type
// let bigIntVar: bigint = 2n; // bigint type
let sym: symbol = Symbol(); // symbol type
const name1: string = "Ron";

console.log("--------Values--------");
console.log("num", num);
console.log("bool", bool);
console.log("str", str);
console.log("nullVar", nullVar);
console.log("undefinedVar", undefinedVar);
// console.log("bigIntVar", bigIntVar);
console.log("sym", sym);
console.log("--------Typeof--------");
console.log(typeof num);
console.log(typeof bool);
console.log(typeof str);
console.log(typeof nullVar);
console.log(typeof undefinedVar);
// console.log(typeof bigIntVar);
console.log(typeof sym);
console.log("----------------------");
console.log(typeof name1);

let ans = num + "3";
console.log(ans);
ans = "3" + num;
console.log(ans);
// num = num + "2"; // what happens here? doesnt work. num is inferred as number so concantenation which produces string will not be assigned to a variable of number type
