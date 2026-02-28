let union;
union = { name: "R", age: 30 };
console.log(union);
union = "hello";
console.log(union);
function printId(id) {
    id.slice(0, 3); // narrowing not needed
}
// You are building a utility function formatValue that can accept a string, number, or boolean.
// It should return the string "String: [value]" for strings,
// "Number: [value]" for numbers, and simply the string "true" or "false" for booleans.
// Implement this function with proper TypeScript typing and narrowing.
function formatValue(val) {
    if (typeof val === "boolean")
        return `${val}`;
    if (typeof val === "string")
        return `String: [${val}]`;
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
function processInput(param) {
    if (Array.isArray(param))
        return param.reduce((prevVal, currentVal) => prevVal + currentVal, 0);
    return Math.pow(param, 2);
}
console.log(processInput(2));
console.log(processInput([2, 3, 4]));
function getAPIResponse(response) {
    if (response.success)
        return response.data;
    return response.error;
}
console.log(getAPIResponse({ success: true, data: "32786437824683274" }));
console.log(getAPIResponse({ success: false, error: "error" }));
let specificString; // Can ONLY be "hello"
let specificString2;
