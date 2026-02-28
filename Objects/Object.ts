interface Person {
  name: string;
  age?: number;
}

let person: Person = {
  name: "Alice",
  age: 30, // can be omitted
};

console.log("--------Person-----------");
console.log(person["name"]);
console.log(person.name);
console.log(person.age);
console.log(person);

console.log("--------Person changed-----------");
person = {
  name: "Bob",
  age: 26,
};
console.log(person["name"]);
console.log(person.name);
console.log(person.age);
console.log(person);
let person2: Person = { name: "Alice", age: 30 };
console.log("--------Person 4-----------");
let person4 = { name: "Eve", age: 35, height: 2 };
console.log(person4.name);
console.log(person4.age);
console.log(person4.height);
console.log(person4);

console.log("--------Person 5 -----------");
let person5: Person = person4; // This shouldnt have been allowed? TypeScript uses structural typing, not nominal typing.
// A value is compatible with a type if it has at least the required properties.
// Extra properties are allowed when assigning from a variable.
// But does not work for Object literal. Excess Property Checking. It only applies to fresh object literals, not variables.

console.log(person5.name);
console.log(person5.age);
console.log(person5); // shows height because ypeScript types do NOT exist at runtime. person5 is just a reference to the same object.
// console.log(person5.height); // Won't work! TS says “You told me person5 is a Person.
//Person does NOT have height.
// So I won’t let you use height.”

let p2 = { name: "Alice", age: 30, height: 165 };

function fn(point: { name?: string; age: number; height: number }) {
  console.log(point.name?.toLowerCase());
  console.log(point.age);
  point.height?.toFixed();
}

fn(p2);
fn({ age: 40, height: 165 });

let a: {
  xyz: "a";
  wes: 1;
};

/*
Type annotations describe TYPES, not VALUES:

: { age: number; height: number } → Describes a type (what shape an object should have)

{ age: 40, height: 165 } → Creates an actual object (a value)
 */

// You are writing a function to update a user's profile.
// The function accepts an object that can have firstName,
// lastName, and age. How would you type this object to make
// all fields optional, and what are the implications when
// trying to use those properties inside the function?
function updateProfile(profile: {
  firstName?: string;
  lastName?: string;
  age?: number;
}) {
  if (profile.firstName !== undefined) {
    profile.firstName.toUpperCase();
  }
  if (profile.lastName !== undefined) {
    profile.lastName.toUpperCase();
  }
  if (profile.age !== undefined) {
    profile.age.toFixed();
  }
}

// Imagine you have a Bird object type with a flySpeed property
// and a Fish object type with a swimSpeed property. Write a function
// that accepts either a Bird or a Fish and returns their speed.
// How would you safely access the correct speed property?

type bird = {
  flySpeed: number;
};

type fish = {
  swimSpeed: number;
};

function getSpeed(animal: bird | fish): number {
  if ("flySpeed" in animal) {
    return animal.flySpeed;
  } else {
    return animal.swimSpeed;
  }
}

console.log(getSpeed({ flySpeed: 200 }));
console.log(getSpeed({ swimSpeed: 300 }));

// Your team has a legacy configuration object that sometimes
// includes a property data and sometimes info, but never both.
// How would you design a type for this object to accurately represent this constraint?

type withData = {
  data: string;
  info?: never;
};

type withInfo = {
  data?: never;
  info: string;
};

type Config = withData | withInfo;
let withdata_obj: withData = { data: "dsdsds" }; // You cant put anything for a property with never so it has to be optional
let withinfo_obj: withInfo = { info: "dsdsds" }; // You cant put anything for a property with never so it has to be optional

const config_obj_1: Config = { data: "data_1232343" };
const config_obj_2: Config = { info: "info_1232343" };
// const config_obj_3: Config = { info: "info_1232343", data: "323232" }; // error
// const config_obj_4: Config = {}; // error
