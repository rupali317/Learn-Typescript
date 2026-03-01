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
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Blue);
console.log(Color.Red);
