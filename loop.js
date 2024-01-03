// Example: 1 (1-100 and 100-1)
/*for (let number = 1; number <= 100; number++) {
  console.log(number); // 1 to 100
}
for (let number = 100; number >= 1; number--) {
  console.log(number); // 100 to 1
}
*/

// Example: 1.1 (Create a loop which repeat your name in 10 times)
/*for (let x = 1; x <= 10; x++) {
  // console.log(x);
  console.log("Tutul");
  // document.write(x, ". Tutul <br>"); // tutul in 10 times
}

// using function
function repeatName(name) {
  for (let i = 1; i <= 10; i++) {
    // document.write(i, ". ", name, "<br>"); // tutul in 10 times
    console.log(i, name);
  }
  return name;
}
repeatName("tutul");
*/

// Example: 1.2
/*function logMessage(message, times) {
  for (let i = 0; i < times; i++) {
    console.log(message);
  }
}
logMessage("Bangladesh", 5);
*/

// Example: 2 (even number)
/*for (let num = 2; num <= 100; num++) {
  if (num % 2 == 0) {
    console.log(num);
  }
}
//Or,
for (let num = 2; num <= 100; num = num + 2) {
  console.log(num);
}
*/

// Example: 2.1 (even number with serial)
/*let serialNo = 1;
for (let num = 2; num <= 100; num++) {
  if (num % 2 == 0) {
    console.log(num, serialNo);
    serialNo++;
  }
}
*/

// Example: 2.2 (Numbers divisible by 3 from 1 to 100)
/*for (let num = 3; num <= 100; num++) {
  if (num % 3 == 0) {
    console.log(num);
  }
}
*/

// From 70-100
/*for (let number = 0; number <= 100; number++) {
  if (number >= 70) {
    if (number % 3 == 0) {
      console.log(number);
    }
  }
}
*/

// Numbers divisible by 3 from 1 to 100 and store in an array
/*let numbersDivisibleBy3 = [];
for (let num = 3; num <= 100; num++) {
  if (num % 3 == 0) {
    numbersDivisibleBy3.push(num);
  }
}
console.log(numbersDivisibleBy3);
*/

/*let ages = [];
let years = [1980, 1984, 1988];
for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
  // ages.push(new Date().getFullYear() - years[i]); // js current year function
}
console.log(ages);
*/

// Example: 2.3
/*for (let number = 1; number <= 100; number++) {
  console.log(number);
  if (number == 100) {
    for (let number = 100; number >= 0; number--) {
      console.log(number);
    }
  }
}
*/

// Example: 3 (sum of 1-5)
/*let sum = 0; // let mul = 0; (for multipication)
for (let x = 1; x <= 5; x++) {
  sum = sum + x;  // mul = mul *1; (for multipication)
}
console.log(sum); // 15
*/

// using formula
/*
let n = 5;
let sum = (n * (n + 1)) / 2;
console.log(sum);
*/

// using prompt
/*let fromNumber = parseInt(prompt("Enter the first number"));
let toNumber = parseInt(prompt("Enter the last number"));
let sum = 0;
for (let i = fromNumber; i <= toNumber; i++) {
  sum = sum + i;
}
console.log(`The sum of numbers from ${fromNumber} to ${toNumber} is ${sum}`);
*/

// using function
/*function sumCal(fromNumber, toNumber) {
  let sum = 0;
  for (let i = fromNumber; i <= toNumber; i++) {
    sum = sum + i;
  }
  return sum;
}
let sumResult = sumCal(1, 5);
console.log(sumResult);
*/

// Example: 3.1
/*let sum = 0;
for (let i = 2; i <= 100; i = i + 2) {
  sum = sum + i;
}
console.log(sum);
*/

// Example: 3.2 (sum of all the numbers that are divisible by 3 and 5 form 1-100)
/*
let sum = 0;
for (let x = 1; x <= 100; x++) {
  if (x % 3 == 0 && x % 5 == 0) {
    sum = sum + x;
  }
}
console.log(sum);		//315
*/

// Example: 4 (multiplication of 1-5)
// we need to change in only two lines
// let mul = 1;
// mul = mul * 1;

// Example: 4.1 (namota / Multiplication table)
/*for (i = 1; i <= 10; i++) {
  console.log(i * 3);     // 3,6,9,12,..,30
} 
*/

// Example: 5 (Display all elements of an array)
/*let numbers = [11,34,23,67,93,9,38]

for(let i=0; i<numbers.length; i++){
    let number = numbers[i];
    console.log(number);
}					// [11,34,23,67,93,9,38]
*/

// Example: 6 (Display all elements above 100 of an array)
/*let numberArray = [22, 34, 12, 64, 342, 865, 445, 38, 78, 56, 102, 345];
for (let i = 0; i <= numberArray.length; i++) {
  let number = numberArray[i];
  if (number > 100) {
    console.log(number);
  }
}

// Using Continuing
let numberArray = [22, 34, 12, 64, 342, 865, 445, 38, 78, 56, 102, 345];
for (let i = 0; i < numberArray.length; i++) {
  let number = numberArray[i];
  if (number < 100) {
    continue;
  }
  console.log(number); // show numbers ‍above 100
  // console.log(i, numberArray[i]);
}
*/

// Example: 6.1 ((Display all even elements of an array))
/*let numbers = [22, 34, 12, 64, 342, 865, 445, 38, 78, 56, 102, 345];
for (i = 0; i <= numbers.length; i++) {
  let number = numbers[i];
  if (number % 2 == 0) {
    console.log(number);
  }
}
*/

// Display all even elements of an array in another array
/*let numbers = [22, 34, 12, 64, 342, 865, 445, 38, 78, 56, 102, 345];
let evenNumberStore = [];
for (let i = 0; i <= numbers.length; i++) {
  let number = numbers[i];
  if (number % 2 == 0) {
    evenNumberStore.push(number);
  }
}
console.log(evenNumberStore);
*/

// Example: 7  (Continuing and Breaking)
// continuing
/*let numbers = [22, 34, 12, 64, 342, 865, 445, 38, 78, 56, 102, 345];
// continuing
for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  if (number < 100) {
    continue;
  }
  console.log(number); // show numbers below 100
  // console.log(i, numbers[i]);
}
// Breaking
for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  if (number > 100) {
    break;
  }
  console.log(number); // 22,34,12,64
  // console.log(i, numbers[i]);
}
*/

// Example: 7.1
/*// continuing
const user = ["Banna", 20, "Bangladesh"];
for (i = 0; i < user.length; i++) {
  if (typeof user[i] !== "string") {
    continue;
  }
  console.log(user[i]); // show only string
}
// Breaking
for (i = 0; i < user.length; i++) {
  if (typeof user[i] === "number") {
    break;
  }
  console.log(user[i]); // show only Banna
}
*/

// Example: 8 Forward and backword loop
/*let numbers = [15, 26, 36, 85, 48];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]); // show 15-48
}

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]); // show 48-15
}
*/

// Example: Loop inside a loop
/*for (let num = 1; num < 3; num++) {
  console.log(`----First loop ${num}-----`);

  for (let count = 1; count < 5; count++) {
    console.log(`Second loop ${count}`);
  }
}
*/
/*let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
*/
