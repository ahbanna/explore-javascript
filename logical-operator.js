// Logical operator: And, Or, Not
// And (&&) operator
// Example: 1
let x = 5;
let y = 10;

if (x > 1 && y > 5) {
  console.log("Correct");
} else {
  console.log("Wrong");
} // Correct

// Example: 2
let jobHolder = true;
let salary = 5000;
let looking = "smart";
if (jobHolder == true && salary > 2000 && looking == "smart") {
  console.log("Let's marry");
} else {
  console.log("Sorry");
} // Let's marry

// Or (||) operator
// Example: 1
let a = 5;
let b = 10;

if (a > 10 || b > 5) {
  console.log("Correct");
} else {
  console.log("Wrong");
} //Correct

Example: 2;
let jobHolder2 = true;
let salary2 = 5000;
let looking2 = "smart";
if (jobHolder2 == false || (salary2 > 2000 && looking2 == "analog")) {
  console.log("Lets marry");
} else {
  console.log("Sorry");
} // Sorry

// Not (!) operator
let num1 = 5;
let num2 = 10;

if (num1 !== num2) {
  console.log("Correct");
} else {
  console.log("Wrong");
} // Correct
