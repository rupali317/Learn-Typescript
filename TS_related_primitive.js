let var1 = 2;
console.log(var1);
// var1.toUpperCase();
// var1.toFixed(2);
let var2 = 2;
console.log(var2);
if (typeof var2 === "number") {
    var2.toFixed(2);
}
else if (typeof var2 === "string") {
    var2.toUpperCase();
}
let var3;
function funcName_void() {
    console.log("Void");
}
function funcName_never() {
    console.log("Never before");
    throw new Error("Boom!");
    console.log("Never after");
}
funcName_void();
funcName_never();
