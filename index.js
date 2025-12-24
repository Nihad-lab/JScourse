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
// В браузере:
console.log(window.innerHeight); // высота окна
// В Node.js:
console.log(global.process.version); // версия Node.js
// Универсально:
console.log(globalThis === window); // true в браузере
const myCity = {
  city: "My city",
  greeting() {
    // вместо greeting: function() {...}
    console.log("Greetings!");
  },
};
myCity.greeting(); // вызов метода
const myCity = {
  city: "My city",
  greeting() {
    // вместо greeting: function() {...}
    console.log("Greetings!");
  },
};
myCity.greeting(); // вызов метода
const post = {
  title: "My post",
  likes: 5,
};

// Объект → JSON (строка)
const postString = JSON.stringify(post);
console.log(postString); // {"title":"My post","likes":5}

// JSON → объект
const parsedPost = JSON.parse(postString);
console.log(parsedPost.title); // 'My post'
