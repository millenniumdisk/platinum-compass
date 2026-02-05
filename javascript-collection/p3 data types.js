// p3 data types

// primitive
let studentName = "Ferringson";
let studentAge = 25; // a floating point with decimal
let money = 72.65;
let isPlayerAlive = true;

let bigNumber1 = 89751234654315649346n; // there is a letter n at the end
let bigNumber2 = BigInt(89751234654315649346n);

let message;
let value1 = null;
const value2 = Symbol();

// object
let playerObject = {
  health: 73924,
  defense: 20412,
  speed: 9241
};

console.log(typeof studentName);
console.log(typeof studentAge);
console.log(typeof money);
console.log(typeof isPlayerAlive);
console.log(typeof bigNumber1);
console.log(typeof bigNumber2);
console.log(typeof message);
console.log(typeof value1);
console.log(typeof value2);
console.log(typeof playerObject);
