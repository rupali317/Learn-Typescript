function functionName(a: number, b: string): void {
  console.log(a, b);
}

functionName(2, "str");

let result = function (a: number, b: number): number {
  return a + b;
};

console.log(result(2, 3));

let arrowExp = (a: number, b: number): number => a - b;

console.log(arrowExp(2, 3));

// function greet(name: string) {
//   console.log("Hello, " + name.toFixed() + "!!");
// }
