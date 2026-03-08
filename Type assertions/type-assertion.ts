const paragraph = document.getElementById("para") as HTMLParagraphElement;
paragraph.innerText = "Hello";

// You have a variable typed as unknown from an API response.
// You need to treat it as a { name: string; age: number } object.
// Show two different ways to assert its type and explain the difference between them.
type apiResponse = { name: string; age: number };

// Way 1
let response1: unknown;
response1 = { name: "Alice", age: 30 } as apiResponse;
// Way 2:
let response2: unknown;
response2 = <apiResponse>{ name: "Alice", age: 30 };

// let value = "42" as unknown as number; // dangerous way
let value = "42";
Number(value).toFixed();
// console.log(value);
// console.log(typeof value);
// value = 43;
// console.log(value);
// console.log(typeof value);

const req = { url: "https://example.com", method: "GET" } as const; // Freeze this value exactly as written"
function handleRequest(url: string, method: "GET" | "POST") {}
handleRequest(req.url, req.method);

const value2 = "42" as unknown as number;

// TypeScript now THINKS value is a number
console.log(value2 * 2); // At compile time: ✅ TypeScript thinks this is fine
// At RUNTIME: "42" * 2 = 84 (actually works here, but only by accident!)

// console.log(value2.toFixed(2)); // At compile time: ✅ TypeScript thinks this is fine
// At RUNTIME: 💥 "42".toFixed is not a function! CRASH!
