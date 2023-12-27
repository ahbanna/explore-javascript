"use strict";

// Example: 1 (undefined variable)
x = 3.14;
console.log(x); // x is not defined. without "use strict", it creates global variable

// Example: 1.1
x = 3.14; // This will not cause an error.
myFunction();

function myFunction() {
  ("use strict");
  y = 3.14; // y is not defined
}

// Example: 2 (reserved word)
const interface = "Hello";
const private = "Hi";
console.log(interface); // reserved word
console.log(private); // reserved word

// Example: 3 (duplicate parameter names)
function myFunction(a, b, a) {
  console.log(a, b);
}
myFunction(1, 2, 3); // Duplicate parameter
