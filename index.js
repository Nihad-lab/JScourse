const sum = (a, b) => a + b;
export default sum;
// или можно экспортировать напрямую:
// export default (a, b) => a + b;

import sum from './module1.mjs';

const result = sum(10, 2);
console.log(result); // 12
const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
export { sum, multiply };
import { sum, multiply } from './module1.mjs';
console.log(sum(10, 2));
console.log(multiply(10, 2));

import { sum as add, multiply as mult } from './module1.mjs';
console.log(add(10, 2));
console.log(mult(10, 2));
const greet = (name) => `Hello, ${name}!`;
export default greet;

