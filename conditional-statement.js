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

// Example: 4
if (age === 18) console.log("You are adult"); // You are adult

// Switch
// Example: 1
// let points = parseInt(prompt("Enter your number"));
//Or,
let points = 20;

switch (points) {
  case 10:
    console.log("Congratulations.. you are silver star");
    break;
  case 20: // points === 20
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

// Example: 2
let day = "friday";
switch (day) {
  case "saturday":
    console.log("This is saturday");
    break;
  case "sunday":
    console.log("This is sunday");
    break;
  case "thursday":
    console.log("This is thursday");
    break;
  case "friday": // day === friday
    console.log("This is friday");
    break;
  default:
    console.log("No day matched");
    break;
}
// Example: 3
let day2 = "sunday";
switch (day2) {
  case "saturday":
    console.log("This is saturday");
    break;
  case "sunday": // case matched here but no console.log
  case "thursday":
    console.log("This is thursday"); // it will be executed
  case "friday":
    console.log("This is friday"); // it will be executed because don't have break in previous one
    break;
  default:
    console.log("No day matched");
}

//
