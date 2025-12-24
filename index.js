console.log("Запуск кода в VS Code");
const user = {
  name: "Андрей",
  age: 30,
  isStudent: true,
};
console.log("Hello world"); // вывод строки
console.dir(console); // просмотр свойств объекта console
console.table({ a: 1, b: 2 }); // вывод в виде таблицы
const userName = "Андрей"; // const — значение не изменится
let userAge = 25; // let — можно изменить позже
userAge = 26; // изменяем значение

console.log(userName, userAge);
let value = 10; // число
value = "текст"; // теперь строка — ошибки не будет
console.log(value); // 'текст'

const fixed = 100;
// fixed = 200;     // ошибка: Assignment to constant variable
const name = "Андрей";
const age = 23;
const userProfile = {
  name, // вместо name: name
  age, // вместо age: age
  isStudent: false,
};
console.log(userProfile);
