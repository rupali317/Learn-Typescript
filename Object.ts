interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: "Alice",
  age: 30,
};

console.log("--------Person-----------");
console.log(person["name"]);
console.log(person.name);
console.log(person.age);

person = {
  name: "Bob",
  age: 26,
};
console.log("--------Person changed-----------");
console.log(person["name"]);
console.log(person.name);
console.log(person.age);

console.log("--------Person 4-----------");
let person4 = { name: "Eve", age: 35, height: 2 };
console.log(person4.name);
console.log(person4.age);

console.log("--------Person 5 -----------");
let person5: Person = person4; // This shouldnt have been allowed?
console.log(person5.name);
console.log(person5.age);
