// Example: 1 (define an array in two ways)
const friends = ["arif", "jamal", "kamal", "hasan"]; // Array Literal Notation
const foods = new Array("mango", "apple"); // Array() Constructor
console.log(friends); // ["arif", "jamal", "kamal", 'hasan]
console.log(typeof friends); // object
console.log(friends.indexOf("jamal")); // 1 (get a index number of an array)
console.log(friends.indexOf("manna")); // -1 (-1 because manna is not in the array)

console.log(friends.includes("jamal")); // true
console.log(friends.includes("manna")); // false
if (friends.includes("kamal")) {
  console.log("I have a friend named kamal");
}
console.log(friends[2]); // kamal (to see a specific element)
console.log(`${friends[2]} ${friends[3]}`); // kamal hasan (to see multiple element)
console.log(friends.length); // 4 (It shows how many elements in a array)
console.log(friends[friends.length - 2]); // kamal (because it looks like friends[2])

friends[0] = "kale"; // 1st element change
// friends = ["nafisa", "hafisa", "kasifa"]; // Error (whole array can not change)

const bestFriend = "rony";
const myAge = 2023 - 1990;
const tutul = ["Banna", myAge, bestFriend, friends]; // variable, array added as element
console.log(tutul); // [ 'Hasanul Banna', 33, 'rony', [ 'kale', 'jamal', 'kamal', 'hasan' ] ]

// Example:  (Add / remove data from an array using push, unshift / shift, pop)
/*const friends = ["Hasan", "kamal", "Banna"];
// add elements
const newLength = friends.push("Arif", "Zamal");
console.log(friends); //[ 'Hasan', 'kamal', 'Banna', 'Arif', 'Zamal' ]
console.log(newLength); // 5

friends.unshift("shakila");
console.log(friends); // [ 'shakila', 'Hasan', 'kamal', 'Banna', 'Arif', 'Zamal' ]

//remove elements
const shiftedElement = friends.shift();
console.log(friends); // [ 'Hasan', 'kamal', 'Banna', 'Arif', 'Zamal' ]
console.log(shiftedElement); // shakila

const poppedElement = friends.pop();
console.log(friends); // [ 'Hasan', 'kamal', 'Banna', 'Arif' ]
console.log(poppedElement); // zamal
*/
