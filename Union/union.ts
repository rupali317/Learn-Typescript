interface person {
  name: string;
  age: number;
}

let union: person | string;

union = { name: "R", age: 30 };
console.log(union);
union = "hello";
console.log(union);
