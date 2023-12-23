// --------------- Data types --------------------
// String
let greeting = "Hello, World!";
console.log(typeof greeting); //  "string"

// Number
let num1 = 42;
console.log(typeof num1); //"number"

let num2 = 2e5; //200000
console.log(num2);

// Boolean
let isMarried = true;
console.log(typeof isMarried); // boolean

// Null
// Example: 1
let a = null;
console.log(a); // null

// Example: 2 (Reset Variables)
let selectedOption = null; // Option no longer selected

// Example: 3 (Clearing Object Properties)
let myObject = {
  name: "John",
  age: 30,
};
myObject = null; // reset the myObject variable
console.log(myObject); // Output: null

// Example: 4 (Default Function Arguments)
function greet(name = null) {
  if (name) {
    console.log(`Hello, ${name}`);
  } else {
    console.log("No name has given");
  }
}
greet(); // No name has given
greet("Arif"); // Hello, Arif

// Example: 5   (Indicating Error States )
/* if (result === null) {
  console.error("Operation failed.");
}
*/

// Undefined
let fullName;
console.log(typeof fullName);

// Object
let userInfo = {
  name: "Banna",
  age: 20,
};
console.log(userInfo.name); // Banna
console.log(typeof userInfo); // object

// Array
let friends = ["Hasan", "kamal", "jamal"];
console.log(friends[1]); // Kamal
console.log(typeof friends); // Object

// Function
function user(name) {
  console.log(`My name is ${name}`);
}
user("Banna"); //  My name is Banna
console.log(typeof user); // function

// Immutable
// Example: 1
let name1 = "Banna";
let name2 = name1; // name2 now has the same value as name1, which is "Banna"
name2 = "Tutul"; // name2 is assigned a new value "Tutul"
console.log(name1); // "Banna" - Because name1 was never changed
console.log(name2); // "Tutul" - name2 now holds the value "Tutul"

// Example: 2
const teacher = "Tiger sir";
teacher[0] = "Tofazzal";
console.log(teacher); // output: Tiger sir

// Mutable
// Example: 1
let person1 = {
  name: "Ruble",
  age: 25,
};
let person2 = person1; //  Both variables point to the same object in memory.
person2.name = "Manna"; // This modifies the name property of the shared object. Both person and person2 reference this object, so the change affects both variables.
console.log(person1.name); // Manna
console.log(person2.name); // Manna

// Example: 1.1
let user1 = {
  name: "Masum",
  age: 25,
};
let user2 = { ...user1 };
user2.name = "Anowar";
console.log(user1.name); // Masum
console.log(user2.name); // Anowar

// Example: 2
const obj1 = {
  a: 1,
  b: 2,
};
const obj2 = obj1;
obj2.a = 5;
console.log(obj1.a); // 5
console.log(obj2.a); // 5

// Example: 3
let peopleList = ["Arnold", "Linda", "Sylvester", "Dolph"];
peopleList[0] = "Jean-Claude";

console.log(peopleList); // [ 'Jean-Claude', 'Linda', 'Sylvester', 'Dolph' ]
