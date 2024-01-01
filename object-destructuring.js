// Example: 
const tutul = {
  "father's name": "Abu Bakkar Siddique",
  "mother's name": "Anwara Begum",
  address: "Bogra",
};
const shohag = { ...tutul };
shohag.children = "Rufaida";
console.log(tutul);
console.log(shohag);