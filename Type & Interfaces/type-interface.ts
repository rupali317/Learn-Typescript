type Point = {
  x: number;
  y: number;
};

interface Point_3d {
  x: number;
  y: number;
  z: number;
}

const pt3: Point_3d = { x: 1, y: 1, z: 1, l: 2 };

interface Point_3d {
  l: number;
}

// type Point = { l: number }; //error. Duplicate identifier 'Point'

console.log(`x = ${pt3.x}, y = ${pt3.y}, z = ${pt3.z}`);

const point_obj = { x: 0, y: 0, z: 0 };

const pt: Point = { x: 0, y: 0 };

console.log(pt);

type userID = number;

let id: userID = 3;

console.log(id);

/**
 * 
   Term	             Meaning	                                Example
1. Type Annotation	The : type part after a variable/parameter	: string, : number, : { name: string }
2. Object Type	The shape of an object	{ firstName: string, lastName: string }
3. Union Type	Multiple possible types	string | number | boolean
 */

// What is a type alias and what is its syntax?
// What is the benefit of type alias? Create a type alias for a User object with id, name, age, address.

//providing an aletrnate name for type, benefits: avoid reprition
type sanitizeNumber = number;
type nric_id = number | string;

let identification: nric_id = "1221";

type user = {
  id: string;
  name: string;
  age: number;
  address: string;
};

// You are refactoring a codebase that repeatedly uses the same complex object type for API responses,
// e.g., { status: number; message: string; data: unknown }.
// What is the practical benefit of creating a type alias for this structure, and how would you implement it?

type APIresponse = { status: number; message: string; data: unknown };

let response: APIresponse;

// Write a type alias called Coordinate that represents either a 2D point { x: number; y: number }
// or a 3D point { x: number; y: number; z: number }.
// Then, write a function that calculates the magnitude of a Coordinate (for 2D: sqrt(x^2 + y^2), for 3D: sqrt(x^2 + y^2 + z^2)).
type two_d_coordinate = { x: number; y: number };
type three_d_coordinate = { x: number; y: number; z: number };

type Coordinate = two_d_coordinate | three_d_coordinate;

function calculateMagnitude(coordinate: Coordinate) {
  if ("z" in coordinate)
    return Math.sqrt(
      Math.pow(coordinate.x, 2) +
        Math.pow(coordinate.y, 2) +
        Math.pow(coordinate.z, 2)
    );
  return Math.sqrt(Math.pow(coordinate.x, 2) + Math.pow(coordinate.y, 2));
}

console.log(calculateMagnitude({ x: 2, y: 2 }));
console.log(calculateMagnitude({ x: 2, y: 2, z: 2 }));

// Your team uses a configuration object for a charting library that requires a title (string),
// data (number[]), and a type that can only be either "line" or "bar".
// How would you type the type property most precisely, and what advantage does this have over using a general string?
type configuration = {
  title: string;
  data: number[];
  type: "line" | "bar";
};

// Extension
interface Animal {
  name: string;
}

interface Bear extends Animal {
  legs: number;
}

const bear: Bear = { name: "bear", legs: 4 };
const animal: Animal = { name: "" };

console.log(bear);
console.log(animal);

type Animal2 = {
  name: string;
};

type Bear2 = Animal2 & {
  legs: number;
};

const bear2: Bear2 = { name: "bear2", legs: 14 };
const animal2: Animal2 = { name: "3223" };

console.log(bear2);
console.log(animal2);

// You need to create a function createUser that takes a name: string and an optional email?: string.
// The function should return an object with id, name, and if provided, the email.
// Type both the input parameters and the return object of this function.
// Which approach (type alias, interface, or inline object) would you choose for the return type and why?

interface User {
  id: string;
  name: string;
  email?: string;
}

function createUser(name: string, email?: string): User {
  return {
    id: "322332",
    name: name,
    email: email,
  };
}

console.log(createUser("Rhonda", "rhonda_rousey@gmail.com"));
console.log(createUser("Bryan"));

type User1 = {
  id: string;
  name: string;
  email?: string;
};

function createUser1(name: string, email?: string): User1 {
  return {
    id: "123343",
    name: name,
    email: email,
  };
}

console.log(createUser1("Rousey", "rousey@gmail.com"));
console.log(createUser1("Mike"));

// Define an interface Vehicle with properties make: string, model: string, and year: number.
// Then, create a function getVehicleAge that takes a Vehicle and returns the number of years
// since its manufacture (assuming the current year is 2024).
// What does TypeScript guarantee about the object passed to this function?

interface Vehicle {
  make: string;
  model: string;
  year: number;
}

function getVehicleAge(vehicle: Vehicle): number {
  return 2024 - vehicle.year;
}

console.log(getVehicleAge({ make: "VXC2390", model: "Maruti", year: 1990 }));
console.log(getVehicleAge({ make: "VXC2390", model: "Maruti", year: 1870 }));

function handleId(id: number | string) {
  if (typeof id === "string") return id.toUpperCase();
}

type StringOrNumber = string | number;
let value: StringOrNumber = "hello";
value.toUpperCase();
value = 42;

// How would you type a function that accepts either an array of strings or a single string, and then logs each string?
// Write this function using union types and narrowing.

function logger(arr: string[] | string) {
  if (Array.isArray(arr)) {
    return arr.forEach((item) => console.log(item));
  }
  return console.log(arr);
}

logger(["hello", "bye", "thanks"]);
logger("One text");
