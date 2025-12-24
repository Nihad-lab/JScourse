const userProfile = { name: "Андрей", commentQuantity: 23, isAgreement: true };
const { name, commentQuantity } = userProfile;
console.log(name); // "Андрей"
console.log(commentQuantity); // 23
const fruits = ["apple", "banana"];
const [fruitOne, fruitTwo] = fruits;
console.log(fruitOne); // "apple"
console.log(fruitTwo); // "banana"

const userInfo = ({ name, commentQuantity }) => {
  if (!commentQuantity) return `User ${name} has no comments`;
  return `User ${name} has ${commentQuantity} comments`;
};
const profile = { name: "Alice", commentQuantity: 5 };
console.log(userInfo(profile)); // "User Alice has 5 comments"
