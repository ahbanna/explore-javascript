// TypeConversion
// String to number
// Example: 1
const birthYear = "1990";
console.log(Number(birthYear)); // number
console.log(birthYear); // string   (The original value is remained same, not changed)

// Example: 2
let age = "20";
age = parseInt(age);
console.log(typeof age); // number

// Example: 3
let price = "20";
console.log(typeof Number(price)); // number
console.log(typeof parseInt(price)); // number
console.log(typeof parseFloat(price)); // number
console.log(typeof +price); // (+ sign) // number

// Example: 4
const username = "Banna";
console.log(Number(username)); // NaN

// Number to string
// Example: 1
let price2 = 20;
price2 = toString(price2);
console.log(typeof price2);
// Example: 2
let roll = 10;
console.log(String(roll)); // 10 as string
console.log(roll.toString());
console.log(roll.toFixed());
console.log(roll.toExponential());

// Boolean to string:
let go = false;
console.log(typeof String(go)); // string

// Boolean to number:
let go2 = false;
console.log(typeof Number(go2)); // number

// Type coercion
console.log("I am " + 30 + " years old"); // "I am 30 years old" as string
console.log("10" + "20" + "30"); // "102030"
console.log("30" + "15" - 5); // 3010 as number   3015 - 5 = 3010
console.log(2 + 3 + 4 + "5"); // "95"
console.log("10" - "4" - "3" - 2 + "5"); // 15
console.log("30" - "15" - 2); // 13 as number

let n = "1" + 1; // "11"
n = n - 1; // 11-1
console.log(n); // 10

console.log("10" * "2"); // 20
console.log("10" / "2"); // 5
