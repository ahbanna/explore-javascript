// If else
// Example: 1
let age = 15;
if (age >= 18) {
  console.log("You can have a driving licence");
} else {
  let yearsLeft = 18 - age;
  console.log(
    `Sorry! you are too young. Please wait another ${yearsLeft} years. `
  );
}

// Example: 2
// let VoterAge = prompt("your age");
// let country = prompt("your country ");
let VoterAge = 20;
let country = "Bangladesh";
if (VoterAge >= 18) {
  if (country == "usa") {
    console.log(`you can vote`);
  } else {
    console.log("you are not eligible. Only USA person can do vote");
  }
} else {
  console.log("you are not old enough");
}

// Example: 3
let birthYear = 1990;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// Switch
// let points = parseInt(prompt("Enter your number"));
//Or,
let points = 20;

switch (points) {
  case 10:
    console.log("Congratulations.. you are silver star");
    break;
  case 20:
    console.log("Congratulations.. you are gold star");
    break;
  case 30:
    console.log("Congratulations.. you are diamond star");
    break;
  case 40:
    console.log("Congratulations... you are platinum star");
    break;
  default:
    console.log("Not found any status");
}

//
let num1 = 5;
let num2 = "5";

console.log(num1 == num2); // true
console.log(num1 === num2); // false
