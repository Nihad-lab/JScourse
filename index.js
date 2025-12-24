const numbers = [1, 2, 3];
numbers.forEach((element) => console.log(element * 2)); // 2, 4, 6
console.log(numbers); // [1, 2, 3]

const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => console.log(`${index}: ${fruit}`));

const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]
console.log(numbers); // [1, 2, 3]

// Правильно
const arr = [1, 2, 3];
const result = arr.map((x) => x * 3);
console.log(result); // [3, 6, 9]

// Ошибка: нет return
const wrong = arr.map((x) => {
  x * 3;
});
console.log(wrong); // [undefined, undefined, undefined]
