function doSomething(x) {
    if (x === null) {
        // do nothing
        console.log("It is null");
    }
    else {
        console.log("Hello, " + x.toUpperCase());
    }
    //console.log(x.toLowerCase()); // there will be no error if "strictNullChecks": false,
}
doSomething(null);
doSomething("str");
let user = null;
user = { name: "Roy" };
// if (user !== null) {
console.log(user === null || user === void 0 ? void 0 : user.name);
// }
// You're writing a function findItem(id: number) that searches a collection.
// If the item exists, return it; if not, return null. Type this function appropriately.
// Then, write code that calls this function and safely handles both possible return values.
const nums = [2, 3, 4, 5, 7, 8];
function findItem(id) {
    if (nums.indexOf(id) !== -1) {
        return id;
    }
    return null;
}
console.log(findItem(3));
console.log(findItem(-1));
let abc;
function configFunction1(config) {
    if (config.timeout === undefined)
        config.timeout = 1000;
    console.log(config);
}
configFunction1({});
configFunction1({ timeout: 90 });
configFunction1({ timeout: 0 });
function configFunction2(config) {
    var _a;
    config.timeout = (_a = config.timeout) !== null && _a !== void 0 ? _a : 1000;
    console.log(config);
}
configFunction2({});
configFunction2({ timeout: 90 });
configFunction2({ timeout: 0 });
function configFunction3({ timeout = 1000 }) {
    console.log(timeout);
}
configFunction3({});
configFunction3({ timeout: 90 });
configFunction3({ timeout: 0 });
function liveDangerously(x) {
    // x could be: number, undefined, or null
    console.log(x.toFixed());
    // The ! tells TypeScript: "I promise x is NOT null/undefined!"
}
liveDangerously(2);
//liveDangerously(null);
console.log("------------ enum ---------------");
var Color;
(function (Color) {
    Color["Red"] = "r";
    Color["Green"] = "g";
    Color["Blue"] = "b";
})(Color || (Color = {}));
console.log(Color.Blue); //  string enums don't have reverse mappings
console.log(Color.Red);
//console.log(Color.);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 0] = "Red";
    Color2[Color2["Green"] = 1] = "Green";
    Color2[Color2["Blue"] = 2] = "Blue";
})(Color2 || (Color2 = {}));
console.log(Color2.Blue); //  string enums don't have reverse mappings
console.log(Color2.Red);
console.log(Color2[0]);
//Your API returns status codes as numbers (200, 404, 500).
// You want to use an enum to make your code more readable.
// Create an enum HttpStatus for these values.
// Then, write a function that takes an HttpStatus and returns a user-friendly message.
// What happens if the API returns a status code (like 418) that isn't in your enum?
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["Success"] = 200] = "Success";
    HttpStatus[HttpStatus["notFound"] = 404] = "notFound";
    HttpStatus[HttpStatus["Server"] = 500] = "Server";
})(HttpStatus || (HttpStatus = {}));
console.log(HttpStatus); // is an object
console.log(HttpStatus.Success); // 200
console.log(HttpStatus[200]); // Success
console.log(HttpStatus[0]); // undefined
function getMessage(status) {
    if (status === HttpStatus.Server)
        return "Server error";
    if (status === HttpStatus.notFound)
        return "Not found";
    if (status === HttpStatus.Success)
        return "Success";
    return "Invalid code";
}
console.log(getMessage(200));
console.log(getMessage(404));
console.log(getMessage(500));
/*

// When you write:
function getMessage(status: HttpStatus) {}

// TypeScript interprets this as:
function getMessage(status: 200 | 404 | 500) {}

// NOT as:
function getMessage(status: {
  Success: 200,
  NotFound: 404,
  Server: 500,
  200: "Success",
  404: "NotFound",
  500: "Server"
}) {}

*/
// console.log(getMessage(418)); // This will be an error
// You're building a library that will be used by other developers.
// You need to define a set of constants like sort directions ("asc", "desc").
// Would you use an enum or a union type for this?
// Justify your answer in terms of bundle size, developer experience, and interoperability with plain JavaScript.
// union, no bundle size,
// You have a string enum for HTTP methods:
// enum HttpMethod {
//   Get = "GET",
//   Post = "POST",
//   Put = "PUT",
//   Delete = "DELETE"
// }
// Write a function that accepts only these enum values.
// Then, write another function that takes an arbitrary string and safely checks if it's a valid HttpMethod before using it.
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["Get"] = "GET";
    HttpMethod["Post"] = "POST";
    HttpMethod["Put"] = "PUT";
    HttpMethod["Delete"] = "DELETE";
})(HttpMethod || (HttpMethod = {}));
function getHttpMethod1(method) {
    return `Processing ${method}`;
}
console.log(getHttpMethod1(HttpMethod.Get));
function getHttpMethod2(method) {
    if (Object.values(HttpMethod).includes(method)) {
        return method; // Need to assert here
    }
    return "incorrect HttpMethod";
}
console.log(getHttpMethod2("GET"));
console.log(getHttpMethod2("DELETE"));
console.log(getHttpMethod2("get"));
var PizzaSize;
(function (PizzaSize) {
    PizzaSize["Small"] = "small";
    PizzaSize["Medium"] = "medium";
    PizzaSize["Large"] = "large";
})(PizzaSize || (PizzaSize = {}));
// This function ONLY accepts people with VIP wristbands
function orderPizza(size) { }
