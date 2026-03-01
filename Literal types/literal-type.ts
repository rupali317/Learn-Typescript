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
