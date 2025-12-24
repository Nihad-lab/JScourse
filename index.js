let val = 11;
const result = val >= 0 ? val : -val;
console.log(result); // 11

// Тернарный оператор в вызове функции
console.log(val >= 0 ? val : -val); // 11
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
const arr = ["frost", "second", "third"];
arr.forEach((element, index) => console.log(`${index}: ${element}`));

let i = 0;
while (i < 5) {
  console.log(i); // 0, 1, 2, 3, 4
  i++;
}
let i = 0;
do {
  console.log(i); // 0
  i++;
} while (i < 0);
