console.log(Boolean("")); // false
console.log(!!0); // false
console.log(!!"Hello"); // true

let value;
console.log(typeof value === "undefined"); // true
console.log(typeof 10 === "number"); // true

console.log(!10); // false
console.log(!!0); // false
console.log(!!"text"); // true
console.log("Hello" && "World"); // "World"
console.log("" || "Default"); // "Default"
let userName = someInput || "Guest";
let isLogged = true;
isLogged && console.log("User is logged in");

const button = { id: 1, text: "Click" };
const redButton = { ...button, color: "red" };
console.log(redButton); // { id: 1, text: "Click", color: "red" }

const obj1 = { x: 1, y: 2 };
const obj2 = { y: 3, z: 4 };
const merged = { ...obj1, ...obj2 }; // { x: 1, y: 3, z: 4 }

let name = "John";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, John!
