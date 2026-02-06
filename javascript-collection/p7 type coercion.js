// p7 type coercion
"use strict";

const num1 = 19;
const message = "The number of apples we have in this box is...";

/*
with type coercion, num1 will be converted to string automatically if + is used with
another string to combine them and the result will be a string
the data type of num1 won't be changed and we can check its data type with typeof
*/
const combinedMessage = message + " " + num1;

console.log(typeof num1);
console.log(num1);

console.log(typeof message);
console.log(message);

console.log(typeof combinedMessage);
console.log(combinedMessage);
