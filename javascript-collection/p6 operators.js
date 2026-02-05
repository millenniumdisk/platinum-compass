// p6 operators

console.log(7 + 9); // addition operator
console.log(987 - 110); // subtraction operator
console.log(10 / 3); // division operator
console.log(3 ** 3); // exponentiation operator
// modulo operator will give use the remainder
console.log(25 % 5); // how many 5 are in 25? there is five 5 so 25 - 25 = 0 remainder
console.log(3 % 2); // there is only one 2 in 3 so 3 - 2 = 1 remainder

let number1 = 10; // assignment operator
number1 = number1 + 1;

let number2 = 10;
number2++; // increment operator

console.log(number1);
console.log(number2);

let number3 = 7;
number3 = number3 + 9;

let number4 = 7
number4 += 9;

console.log(number3);
console.log(number4);

let number5 = 10;

number5--; // decrement operator
console.log(number5);

number5 -= 3;
console.log(number5);

number5 *= 2;
console.log(number5);

number5 /= 3;
console.log(number5);

// postfix
console.log(29++); // display 29 first then add 1
// prefix
console.log(++29); // add 1 to 29 first before you display it

console.log(7 > 2);
console.log(-61 > 2);

console.log(3 < 5);
console.log(700 < 5);

console.log(11 >= 3);
console.log(11 >= 11);
console.log(11 >= 500);

console.log(23 <= 10);
console.log(23 <= 23);
console.log(23 <= 4);

console.log(47 === 47);
console.log(47 === 50);
console.log(62 !== 3);
console.log(62 !== 62);

console.log(3 == 3);
console.log(3 == 5);
console.log(9 != 2);
console.log(9 != 9);

// combine or concatenate stringss
message1 = "It is a ";
message2 = "good morning";
console.log(message1 + message2);
