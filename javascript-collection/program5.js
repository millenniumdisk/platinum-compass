// p5 let and const

// let allows us to change the value later on
let value1;
value1 = 93;

let value2 = 8242;
value2 = -82;

// const won't allow us to change the value later on
const value3 = 71256;

console.log(value1);
console.log(value2);
console.log(value3);

/*
we can change the property of an object but we can't change the whole object if it is declared with const
it is because with const, we are saying that a location in the memory will be
used by the playerObject and that location or address is now fixed to playerObject and can't be changed because we used const
but the adress won't change if we are just changing
the property so we can do that to an object declared with const
*/

const playerObject = {
  health: 71569,
  defense: 92641,
  speed: 7214
};

playerObject.defense = 10500;
console.log(playerObject.defense);
