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
