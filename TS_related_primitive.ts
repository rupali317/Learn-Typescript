let var1: any = 2;
console.log(var1);

// var1.toUpperCase();
// var1.toFixed(2);

let var2: unknown = 2;
console.log(var2);

if (typeof var2 === "number") {
  var2.toFixed(2);
} else if (typeof var2 === "string") {
  var2.toUpperCase();
}

let var3: never;

function funcName_void(): void {
  console.log("Void");
}

function funcName_never(): never {
  console.log("Never before");
  throw new Error("Boom!");
  console.log("Never after");
}

funcName_void();
funcName_never();
