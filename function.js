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
