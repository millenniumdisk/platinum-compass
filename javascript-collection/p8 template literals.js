// p8 template literals
"use strict";

const numOfPlayers = 56;
const message1 = "This is a multi line but there is a\n\
  need to use a newline in order to break the long string\n\
  into multiple lines"

const message2 = `This is a multi line string which is
  long but is also in multiple
  lines because it is easier to
  see the contents instead of one
  long line with everything in it`;

// use backticks or ` to enclose a string with variables inside to have a string as a result
console.log(`The number of players in this game for now is ${numOfPlayers} and it is still growing`);

console.log(message1);
console.log(message2);
