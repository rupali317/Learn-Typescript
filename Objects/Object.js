let person = {
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
let person2 = { name: "Alice", age: 30 };
console.log("--------Person 4-----------");
let person4 = { name: "Eve", age: 35, height: 2 };
console.log(person4.name);
console.log(person4.age);
console.log(person4.height);
console.log(person4);
console.log("--------Person 5 -----------");
let person5 = person4; // This shouldnt have been allowed? TypeScript uses structural typing, not nominal typing.
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
function fn(point) {
    var _a, _b;
    console.log((_a = point.name) === null || _a === void 0 ? void 0 : _a.toLowerCase());
    console.log(point.age);
    (_b = point.height) === null || _b === void 0 ? void 0 : _b.toFixed();
}
fn(p2);
fn({ age: 40, height: 165 });
let a;
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
function updateProfile(profile) {
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
function getSpeed(animal) {
    if ("flySpeed" in animal) {
        return animal.flySpeed;
    }
    else {
        return animal.swimSpeed;
    }
}
console.log(getSpeed({ flySpeed: 200 }));
console.log(getSpeed({ swimSpeed: 300 }));
