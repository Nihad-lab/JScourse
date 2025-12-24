function log(value) {
  console.log(value);
}
log(2 + 3); // 5 (выражение)
// log(let x = 5); // Ошибка: инструкция недопустима как аргумент

const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3);
console.log(arr1[0]); // 1
const arr = [1, 2];
arr.push(3);
console.log(arr); // [1, 2, 3]
arr.pop();
console.log(arr); // [1, 2]

const numbers = [1, 2];
numbers.push(3, 4);
console.log(numbers); // [1, 2, 3, 4]

const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
const removed = arr.pop();
console.log(removed); // 4
console.log(arr); // [1, 2, 3]
