interface person {
  name: string;
  age: number;
}

let union: person | string;

union = { name: "R", age: 30 };
console.log(union);
union = "hello";
console.log(union);

function printId(id: number[] | string) {
  id.slice(0, 3); // narrowing not needed
}

// You are building a utility function formatValue that can accept a string, number, or boolean.
// It should return the string "String: [value]" for strings,
// "Number: [value]" for numbers, and simply the string "true" or "false" for booleans.
// Implement this function with proper TypeScript typing and narrowing.

function formatValue(val: string | number | boolean): string {
  if (typeof val === "boolean") return `${val}`;
  if (typeof val === "string") return `String: [${val}]`;
  return `Number: [${val}]`; // if this was also in if then string return will be an error - TypeScript sees that you have three if statements, but what if none of them are true? In theory, val can only be string, number, or boolean, so one of them MUST be true. But TypeScript doesn't make that assumption automatically!
}

console.log(formatValue("hello"));
console.log(formatValue(123));
console.log(formatValue(true));

// A function processInput receives a parameter that can be
//  either an array of numbers (number[]) or a single number.
//  If it's an array, the function should return the sum;
//  if it's a single number, it should return the number squared.
//  Write the function signature and implementation.

function processInput(param: number[] | number): number {
  if (Array.isArray(param))
    return param.reduce((prevVal, currentVal) => prevVal + currentVal, 0);
  return Math.pow(param, 2);
}

console.log(processInput(2));
console.log(processInput([2, 3, 4]));

// You have an API response that can either be a { success: true; data: string } object on success,
// or a { success: false; error: string } object on failure.
// Write a function that handles this response and safely logs either the data or the error.

type SuccessResponse = {
  success: true;
  data: string;
};

type ErrorResponse = {
  success: false;
  error: string;
};

function getAPIResponse(response: SuccessResponse | ErrorResponse) {
  if ("data" in response) return response.data;
  return response.error;
}

console.log(getAPIResponse({ success: true, data: "32786437824683274" }));
console.log(getAPIResponse({ success: false, error: "error" }));

let specificString: "hello"; // Can ONLY be "hello"
let specificString2: string;
