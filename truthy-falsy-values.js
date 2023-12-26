// Falsy values
console.log(Boolean(false)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean("")); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0n)); // false

// Example: 1
let money = 0;
if (money) {
  console.log("I have money");
} else {
  console.log("I have no money");
} // I have no money

// Example: 2
let height;
if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is not defined");
} // Height is not defined

// Truthy values
console.log(Boolean(true)); // true
console.log(Boolean("hi")); // true
console.log(Boolean(1)); // true
console.log(Boolean([])); // true
console.log(Boolean([0])); // true
console.log(Boolean([1])); // true
console.log(Boolean({})); // true
console.log(Boolean({ a: 1 })); // true

// Example: 1
let frieds = [];
if (frieds) {
  console.log("I have some firends"); // I have some firends
} else {
  console.log("I have no friends");
}

// Example: 2
const users = {};
if (users) {
  console.log("User is existed"); // User is existed
} else {
  console.log("User is not existed");
}

// Example: 3
let isMarried = true;
if (isMarried) {
  console.log("I am married"); // I am married
} else {
  console.log("I am single");
}
