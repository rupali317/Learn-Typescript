function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
    console.log("It is null");
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
  //console.log(x.toLowerCase()); // there will be no error if "strictNullChecks": false,
}

doSomething(null);
doSomething("str");

let user: { name: string } | null = null;
user = { name: "Roy" };
// if (user !== null) {
console.log(user?.name);
// }

// You're writing a function findItem(id: number) that searches a collection.
// If the item exists, return it; if not, return null. Type this function appropriately.
// Then, write code that calls this function and safely handles both possible return values.
const nums = [2, 3, 4, 5, 7, 8];

function findItem(id: number): number | null {
  if (nums.indexOf(id) !== -1) {
    return id;
  }
  return null;
}

console.log(findItem(3));
console.log(findItem(-1));

let abc: string | null;
// abc.toLowerCase(); // will be an error if

// You have an optional property in an interface: interface Config { timeout?: number }.
// Inside a function, you want to use config.timeout with a default value of 1000.
// Show three different ways to safely handle this optional property.

interface Config {
  timeout?: number;
}

function configFunction1(config: Config) {
  if (config.timeout === undefined) config.timeout = 1000;
  console.log(config);
}

configFunction1({});
configFunction1({ timeout: 90 });
configFunction1({ timeout: 0 });

function configFunction2(config: Config) {
  config.timeout = config.timeout ?? 1000;
  console.log(config);
}

configFunction2({});
configFunction2({ timeout: 90 });
configFunction2({ timeout: 0 });

function configFunction3({ timeout = 1000 }: Config) {
  console.log(timeout);
}

configFunction3({});
configFunction3({ timeout: 90 });
configFunction3({ timeout: 0 });

function liveDangerously(x?: number | null) {
  // x could be: number, undefined, or null

  console.log(x!.toFixed());
  // The ! tells TypeScript: "I promise x is NOT null/undefined!"
}

liveDangerously(2);
//liveDangerously(null);
console.log("------------ enum ---------------");
enum Color {
  Red = "r",
  Green = "g",
  Blue = "b",
}

console.log(Color.Blue); //  string enums don't have reverse mappings
console.log(Color.Red);
//console.log(Color.);

enum Color2 {
  Red,
  Green,
  Blue,
}

console.log(Color2.Blue); //  string enums don't have reverse mappings
console.log(Color2.Red);
console.log(Color2[0]);

//Your API returns status codes as numbers (200, 404, 500).
// You want to use an enum to make your code more readable.
// Create an enum HttpStatus for these values.
// Then, write a function that takes an HttpStatus and returns a user-friendly message.
// What happens if the API returns a status code (like 418) that isn't in your enum?
enum HttpStatus {
  Success = 200,
  notFound = 404,
  Server = 500,
}

console.log(HttpStatus); // is an object

console.log(HttpStatus.Success); // 200
console.log(HttpStatus[200]); // Success
console.log(HttpStatus[0]); // undefined

function getMessage(status: HttpStatus) {
  if (status === HttpStatus.Server) return "Server error";
  if (status === HttpStatus.notFound) return "Not found";
  if (status === HttpStatus.Success) return "Success";
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

enum HttpMethod {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
  Delete = "DELETE",
}

function getHttpMethod1(method: HttpMethod) {
  return `Processing ${method}`;
}

console.log(getHttpMethod1(HttpMethod.Get));

function getHttpMethod2(method: string) {
  if (Object.values(HttpMethod).includes(method as HttpMethod)) {
    return method as HttpMethod; // Need to assert here
  }
  return "incorrect HttpMethod";
}

console.log(getHttpMethod2("GET"));
console.log(getHttpMethod2("DELETE"));
console.log(getHttpMethod2("get"));

enum PizzaSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

// This function ONLY accepts people with VIP wristbands
function orderPizza(size: PizzaSize) {}
