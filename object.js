/*const obj = { name: "Alice", name: "Bob" };
console.log(obj.name); // Bob    (overwrites the first "name" property)
*/
// Example: 1
const person = {
  firstName: "Hasanul",
  lastName: "Banna",
  age: 30,
  isMarried: true,
  friends: ["Arif", "Kamal", "Rony"],
  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  },
  bestFriend: function () {
    console.log(`My best friend is ${this.friends[2]}`);
  },
  education: {
    ssc: "SSC from Govt. Mustafabila Alia Madrasha, Bogra",
    hsc: "HSC from Azizul Haque College, Bogra",
    bsc: "Bsc from Daffodil Internation University",
    msc: "Msc from Jahangirnagar University",
    subjects: [
      {
        subName: "Bangla",
        subMarks: 84,
      },
      {
        subName: "English",
        subMarks: 94,
      },
    ],
  },
};

console.log(person.firstName); // Hasanul (retrive data using dot notation)
console.log(person["age"]); // 30 (retrive data using bracket notation)
console.log(person.greet()); // Hi, I'm Banna and I'm 30 years old.
console.log(person.bestFriend()); // My best friend is Rony

// Add properties to person object
person.country = "Bangladesh"; // (add properties using dot notation)
person["email"] = "banna@gmail.com"; // (add properties using bracket notation)
console.log(person);

// difference between dot and brcket notation
/*const nameKey = "Name";
console.log(person["last" + "" + nameKey]); // Hasanul
const interestedIn = prompt(
  "Please choose among firstName, lastName, age, isMarried, friends"
);
if (person[interestedIn]) {
  console.log(person[interestedIn]);
} else {
  console.log(
    "Wrong input! Please type any of them: firstName, lastName, age, isMarried, friends "
  );
}
console.log(person.interestedIn); // undefined because use of dot notation
*/
// show all elements of friends array usning for loop
for (let i = 0; i < person.friends.length; i++) {
  const element = person.friends[i];
  console.log(element); // show all friends
}

console.log(person.education.ssc); // SSC from Govt. Mustafabila Alia Madrasha, Bogra
console.log(person.education.subjects[1].subName);

// Object destructuring / spreading
const { firstName, lastName: sesName, age } = person;
console.log(firstName, sesName);

// const { firstName, lastName, ...others } = person;
// console.log(others);

// Example: (Object destructuring)
const tutul = {
  "father's name": "Abu Bakkar Siddique",
  "mother's name": "Anwara Begum",
  address: "Bogra",
};
const shohag = { ...tutul };
shohag.children = "Rufaida";
console.log(tutul);
console.log(shohag);
