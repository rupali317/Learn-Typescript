// You're designing a function setAlignment that should only accept the exact strings "left", "center", or "right".
// How would you type the parameter to enforce this? Show the function signature.
function setAlignment(alignment) {
    return alignment;
}
setAlignment("left");
setAlignment("center");
setAlignment("right");
// setAlignment("dds");
// You have a direction variable initialized as let direction = "north";.
// Later, you try to reassign it to "east", which works.
// However, you want direction to only ever be assignable to the literal strings "north", "south", "east", or "west".
// How would you fix the original declaration to achieve this?
let direction = "north";
console.log(direction);
direction = "east";
// direction = "ewew"; // an error
const req = { url: "https://example.com", method: "GET" };
function handleRequest(url, method) { }
handleRequest(req.url, req.method); // either here or make it const req = { url: "https://example.com", method: "GET" as "GET" };
const httpMethod = "GET";
let userHttpMethod = "GET";
function makeRequest(method) {
    /* ... */
}
makeRequest(httpMethod); // This works
makeRequest(userHttpMethod); // makeRequest(userHttpMethod) causes an error
const color = {
    primary: "#007bff",
    secondary: "#6c757d",
};
color.primary = "#ffc107";
// type Hexvalue =
//   | 0
//   | 1
//   | 2
//   | 3
//   | 4
//   | 5
//   | 6
//   | 7
//   | 8
//   | 9
//   | "a"
//   | "b"
//   | "c"
//   | "d"
//   | "e"
//   | "f"
//   | "g"
//   | "h"
//   | "i"
//   | "j"
//   | "k"
//   | "l"
//   | "m"
//   | "n"
//   | "o"
//   | "p"
//   | "q"
//   | "r"
//   | "s"
//   | "t"
//   | "u"
//   | "v"
//   | "w"
//   | "x"
//   | "y"
//   | "z";
// type HexString1 = `${Hexvalue}${Hexvalue}${Hexvalue}`;
// type HexString2 =
//`#${Hexvalue}${Hexvalue}${Hexvalue}${Hexvalue}${Hexvalue}${Hexvalue}`; // Typescript has a limit on the combination
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
