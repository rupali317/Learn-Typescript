class Point1 {
  // x and y are fields
  x: number;
  y: number;

  constructor() {
    this.x = 2;
    this.y = 3;
  }
}

class Point2 extends Point1 {
  readonly x!: number; // Definite Assignment Assertion
  y!: number;

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
  [s: string]: boolean | ((s: string) => boolean);
  myMethod() {
    // ❌ Problem! Methods are functions
    return true;
  }
  check(s: string) {
    return this[s] as boolean;
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
obj.process = function (s: string): boolean {
  return s.length > 5;
};

// ❌ This will BREAK because 'process' is a function, not a boolean! -> it breaks the purpose of type checking" — not that it crashes.
console.log(obj.check("process")); // Returns a function, but cast to boolean
