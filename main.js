var num = 2; // Type annotations used in typescript. Not acceptables in JS
var bool = true;
// 1. Types of data type
// const bigNum = BigInt(2); // would this work?
// let bigNum = 2n;
var nullVar = null;
// 2. Observe the type of undefinedVar when declared and assigned
// let undefinedVar = 2;
// undefinedVar = 2;
// undefinedVar = "";
// vs
// let undefinedVar;
// undefinedVar = 2;
// undefinedVar = "";
// 3. Typescript warns when variables are not used
var ans = num + "3";
//num = num + "2"; what happens here
var para = document.getElementById("para");
if (para !== null) {
  para.textContent = ans;
}
// function functionName1(a, b) {
//   // what warning/indication will you get in?
//   console.log(a, b);
// }
// 4. How to define functions. Name ways how parameters can be defined
function functionName2(a, b) {
  console.log(a, b);
}
functionName2(2, "str");
var result = function (a, b) {
  return a + b;
};
console.log(result(2, 3));
var arrowExp = function (a, b) {
  return a - b;
};
console.log(arrowExp(2, 3));
