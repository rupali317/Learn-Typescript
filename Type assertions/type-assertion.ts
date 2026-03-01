const paragraph = document.getElementById("para") as HTMLParagraphElement;
paragraph.innerText = "Hello";

// You have a variable typed as unknown from an API response.
// You need to treat it as a { name: string; age: number } object.
// Show two different ways to assert its type and explain the difference between them.

// let value = "42" as unknown as number; // dangerous way
let value = "42";
Number(value).toFixed();
// console.log(value);
// console.log(typeof value);
// value = 43;
// console.log(value);
// console.log(typeof value);

const req = { url: "https://example.com", method: "GET" } as const; // Freeze this value exactly as written"
function handleRequest(url: string, method: "GET" | "POST") {}
handleRequest(req.url, req.method);
