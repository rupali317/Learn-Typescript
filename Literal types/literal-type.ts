// You're designing a function setAlignment that should only accept the exact strings "left", "center", or "right".
// How would you type the parameter to enforce this? Show the function signature.

function setAlignment(alignment: "left" | "center" | "right") {
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

let direction: "north" | "south" | "east" | "west" = "north";
console.log(direction);
direction = "east";
// direction = "ewew"; // an error

const req = { url: "https://example.com", method: "GET" };

function handleRequest(url: string, method: "GET" | "POST") {}

handleRequest(req.url, req.method as "GET"); // either here or make it const req = { url: "https://example.com", method: "GET" as "GET" };

const httpMethod = "GET";
let userHttpMethod = "GET";
function makeRequest(method: "GET" | "POST") {
  /* ... */
}
makeRequest(httpMethod); // This works
makeRequest(userHttpMethod as "GET"); // makeRequest(userHttpMethod) causes an error

// You're configuring a color theme with an object: { primary: '#007bff', secondary: '#6c757d' }.
// Using literal types, how would you ensure that the primary and secondary properties can only be assigned valid hex color strings
// (e.g., strings that start with '#' and have exactly 6 characters)?
// (Note: This is a design/typing challenge, not a runtime validation question).

type HexColor =
  | "#007bff" // primary blue
  | "#6c757d" // secondary gray
  | "#28a745" // success green
  | "#dc3545" // danger red
  | "#ffc107"; // warning yellow

const color = {
  primary: "#007bff" as HexColor,
  secondary: "#6c757d" as HexColor,
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
