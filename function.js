// Example: 1
/* function myName() {
  console.log("Banna");
}
myName(); // Banna
myName("Tutul"); // Banna. (don't show Tutul because myName function has no parameter)
*/
// Example: 1.1
/*
function add() {
  let num1 = 5;
  let num2 = 7;
  let sum = num1 + num2;
  return sum;
}
console.log(add());
*/
// Example: 2 (Function expression)
/*let name = function () {
  console.log("Banna");
};
name(); //Banna
*/
// Example: 2.1 (Function expression with parameter)
/*const subtract = function (x, y) {
  return x - y;
};
const subResult = subtract(100, 1);
console.log(subResult); // 99
*/
// Example: 3   (Function with parameter)
/*function fruitProcessor(apples, mangoes) {
  console.log(apples, mangoes);
  const juice = `Juice with ${apples} apples and ${mangoes}`;
  return juice;
}
let result = fruitProcessor(5, 10);
console.log(result);
console.log(fruitProcessor(1, 2));
*/
// Example: 4 (Lexical Scope for function declaration)
/*let x = 10;
function myFunction() {
  var x = 20; // Inner x
  console.log(x); // 20
}
myFunction(); // 20 (inner x)
console.log(x); // 10 (outer x)
*/
// Example: 4.1
/*
function outer() {
  var outerNum = 10;
  function inner() {
    var innerNum = 20;
    console.log(outerNum); // 10 (Can access outerNum)
  }
  inner();
}
outer();
console.log(outerNum); // Error: innerNum is not defined in this scope
*/
// Example: 5 ((Lexical Scope for function expression)
/* let outerNum = 11;
const myExpression = function () {
  console.log(outerNum); // 11 (Can access outerVar)
  const sum = outerNum + 11;
  return sum;
};
console.log(myExpression());
*/

// Example: 6 (Function calling into another function) (***)
/*function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, mangoes) {
  const applePieces = cutFruitPieces(apples);
  const mangoPieces = cutFruitPieces(mangoes);

  console.log(apples, mangoes);
  const juice = `Juice with ${applePieces} pieces apples and ${mangoPieces} pieces mangoes`;
  return juice;
}
let result = fruitProcessor(5, 10);
console.log(result);
*/
// Example: 6.1
/*function add(num1, num2) {
  return num1 + num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function calculate(num1, num2) {
  const sum = add(num1, num2);
  const product = multiply(num1, num2);
  const result = `The sum of the two numbers is ${sum} and multiply of the two numbers is ${product}`;
  console.log(result);
}

calculate(2, 3);
*/
// Example: 6.2 (First class function) (**)
/*function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}
function operate(a, b, operation) {
  return operation(a, b);
}
console.log(operate(4, 5, add)); // 9
console.log(operate(4, 5, multiply)); // 20
*/
// Example: 6.3
/* let calcAvg = (a, b, c) => (a + b + c) / 3;
console.log(calcAvg(1, 2, 3));

let avgScoreBestThreeBatPak = calcAvg(48, 85, 105);
console.log(avgScoreBestThreeBatPak);
let avgScoreBestThreeBatAus = calcAvg(46, 89, 36);
console.log(avgScoreBestThreeBatAus);

const checkWinner = function (pakScore, ausScore) {
  if (pakScore > ausScore) {
    console.log("Pakistan win the match");
  } else if (ausScore > pakScore) {
    console.log("Australia win the match ");
  } else if (pakScore === ausScore) {
    console.log("The match is draw");
  } else {
    console.log("The match is cancled");
  }
};

checkWinner(avgScoreBestThreeBatPak, avgScoreBestThreeBatAus); // Pakistan win the match
checkWinner(100, 150); // Australia win the match
*/
