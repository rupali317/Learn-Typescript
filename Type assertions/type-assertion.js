const paragraph = document.getElementById("para");
paragraph.innerText = "Hello";
let response1;
response1 = { name: "", age: 2 };
console.log(response1);
response1 = {};
console.log(response1);
let response2;
// let value = "42" as unknown as number; // dangerous way
let value = "42";
Number(value).toFixed();
// console.log(value);
// console.log(typeof value);
// value = 43;
// console.log(value);
// console.log(typeof value);
const req = { url: "https://example.com", method: "GET" }; // Freeze this value exactly as written"
function handleRequest(url, method) { }
handleRequest(req.url, req.method);
const value2 = "42";
// TypeScript now THINKS value is a number
console.log(value2 * 2); // At compile time: ✅ TypeScript thinks this is fine
// At RUNTIME: "42" * 2 = 84 (actually works here, but only by accident!)
// console.log(value2.toFixed(2)); // At compile time: ✅ TypeScript thinks this is fine
// At RUNTIME: 💥 "42".toFixed is not a function! CRASH!
