class Point1 {
    constructor() {
        this.x = 2;
        this.y = 3;
    }
}
class Point2 extends Point1 {
    constructor() {
        super();
        this.x = 5;
    }
}
const point = new Point2();
console.log(`point.x = ${point.x}, point.y = ${point.y}`);
const pt = new Point1();
console.log(`x = ${pt.x}, y = ${pt.y}`);
pt.x = 0;
pt.y = 0;
console.log(`x = ${pt.x}, y = ${pt.y}`);
class MyClass {
    check(s) {
        return this[s];
    }
}
const obj = new MyClass();
// ✅ Set some boolean properties
obj.isValid = true;
obj.isActive = false;
obj.isComplete = true;
// obj[123] = false; // if [s: number]: boolean | ((s: string) => boolean);
// ✅ Now check them
// console.log(obj.check(123)); // ✅ false
console.log(obj.check("isValid")); // ✅ true
console.log(obj.check("isActive")); // ✅ false
console.log(obj.check("isComplete")); // ✅ true
// Add a function property
obj.process = function (s) {
    return s.length > 5;
};
// ❌ This will BREAK because 'process' is a function, not a boolean! -> it breaks the purpose of type checking" — not that it crashes.
console.log(obj.check("process")); // Returns a function, but cast to boolean
