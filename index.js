const personCopy2 = { ...person };
personCopy2.name = "Alice";
console.log(person.name); // 'Bob'

function sum(a, b) {
  const c = a + b;
  return c;
}
const result = sum(5, 3);
console.log(result); // 8

function printName() {
  console.log("Андрей");
}

setTimeout(printName, 2000); // вызов printName через 2 секунды

const globalVar = "global"; // глобальная область

function myFunc() {
  const localVar = "local"; // локальная область функции
  console.log(globalVar); // доступно
}
myFunc();
// console.log(localVar); // ошибка: localVar не определена

if (true) {
  const blockVar = "inside block";
}
// console.log(blockVar); // ошибка
