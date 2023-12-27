// Assignment operator
let x = 2;
x += 5; //x=x+5
console.log(x); //7

/*
let x = 2;
x *= 8; // x=x*8
console.log(x); //16
*/
/*
let x = 5;
x -= 2; // x = x-2
console.log(x); //3
*/
/*let x = 20;
x /= 5; // x = x/5
console.log(x); //4
*/
/*let x = 20;
x %= 6; // x = x%6
console.log(x); //2
*/
/*let x = 2;
x **= 6; // x = x**6
console.log(x); //64
*/

// Comparison operator
// Example: 1
let shohagAge = 40;
let tutulAge = 30;
console.log(shohagAge > tutulAge); // true
console.log(tutulAge >= 18); // true

// Example: 2
let thisYear = 2023;
console.log(thisYear - 1990 < thisYear - 2000); // false

// Example: 3
console.log(50 - 40 - 5); // 5

// Example: 4
let age1 = 10;
let age2 = 20;
let wrongAverage = age1 + age2 / 2; // 20
let rightAverage = (age1 + age2) / 2; // 15

console.log(wrongAverage, rightAverage);

// Example: 5
let age = 18;
if (age === 18) console.log("You are adult");

// Example: 6
console.log(1 == 1); // true
console.log("hello" == "hello"); // true
console.log("1" == 1); // true ('1' is converted to a number as type coercion)
console.log(0 == false); // true

// Example: 7
console.log(1 === 1); // true
console.log("hello" === "hello"); // true
console.log("1" === 1); // false
console.log(0 === false); // false

// Example: 8
// const rollNumber = Number(prompt("Enter your number"));
let rollNumber = 5;
console.log(typeof rollNumber);
if (rollNumber === 5) {
  console.log("This is my roll number");
} else {
  console.log("It's not my roll number");
}

// Example: 9
let num1 = 5;
let num2 = "5";

console.log(num1 == num2); // true
console.log(num1 === num2); // false
