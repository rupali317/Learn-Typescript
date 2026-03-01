const pt3 = { x: 1, y: 1, z: 1, l: 2 };
// type Point = { l: number }; //error. Duplicate identifier 'Point'
console.log(`x = ${pt3.x}, y = ${pt3.y}, z = ${pt3.z}`);
const point_obj = { x: 0, y: 0, z: 0 };
const pt = { x: 0, y: 0 };
console.log(pt);
let id = 3;
console.log(id);
let identification = "1221";
let response;
function calculateMagnitude(coordinate) {
    if ("z" in coordinate)
        return Math.sqrt(Math.pow(coordinate.x, 2) +
            Math.pow(coordinate.y, 2) +
            Math.pow(coordinate.z, 2));
    return Math.sqrt(Math.pow(coordinate.x, 2) + Math.pow(coordinate.y, 2));
}
console.log(calculateMagnitude({ x: 2, y: 2 }));
console.log(calculateMagnitude({ x: 2, y: 2, z: 2 }));
const bear = { name: "bear", legs: 4 };
const animal = { name: "" };
console.log(bear);
console.log(animal);
const bear2 = { name: "bear2", legs: 14 };
const animal2 = { name: "3223" };
console.log(bear2);
console.log(animal2);
function createUser(name, email) {
    return {
        id: "322332",
        name: name,
        email: email,
    };
}
console.log(createUser("Rhonda", "rhonda_rousey@gmail.com"));
console.log(createUser("Bryan"));
function createUser1(name, email) {
    return {
        id: "123343",
        name: name,
        email: email,
    };
}
console.log(createUser1("Rousey", "rousey@gmail.com"));
console.log(createUser1("Mike"));
function getVehicleAge(vehicle) {
    return 2024 - vehicle.year;
}
console.log(getVehicleAge({ make: "VXC2390", model: "Maruti", year: 1990 }));
console.log(getVehicleAge({ make: "VXC2390", model: "Maruti", year: 1870 }));
function handleId(id) {
    if (typeof id === "string")
        return id.toUpperCase();
}
let value = "hello";
value = 42;
if (typeof value === "string") {
    value.toUpperCase(); // Safe!
}
else {
    console.log(value); // It's a number
}
// How would you type a function that accepts either an array of strings or a single string, and then logs each string?
// Write this function using union types and narrowing.
function logger(arr) {
    if (Array.isArray(arr)) {
        return arr.forEach((item) => console.log(item));
    }
    return console.log(arr);
}
logger(["hello", "bye", "thanks"]);
logger("One text");
