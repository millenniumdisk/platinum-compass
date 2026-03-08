js

```js
// display a string with a function
"use strict"; //  always use this in order to see errors in the javascript code

console.log("I want to create a project that uses JavaScript"); // use a function
```

<!-- -->
<!-- -->
<!-- -->
<!-- -->
<!-- -->

```js
// declare a variable
"use strict";

let num; // declares a variable and its value can be changed later on

console.log(num); // display the value of the variable
```

<!-- -->
<!-- -->
<!-- -->
<!-- -->
<!-- -->

```js
// assign a value to a variable
"use strict";

let num;

num = 5;

console.log("NUM: " + num);
```

<!-- -->
<!-- -->
<!-- -->
<!-- -->
<!-- -->

```js
// multiple variable declarations
"use strict";

let num1, num2, num3;

num1 = 5;
num2 = 123;
num3 = -71;

console.log("NUM1:", num1);
console.log("NUM2:", num2);
console.log("NUM3:", num3);
```

<!-- -->
<!-- -->
<!-- -->
<!-- -->
<!-- -->

```js
// const with initialization
"use strict";

/*
declares a variable where its value can't be changed later on

when used on an object, a property can be changed in the
object but the whole object itself can't be changed. this is because
the address or reference that points to the memory address can't
be changed but the value stored in it can be changed

it is better to always use const and then change it to let
when declaring variables in order to minimize the problem of
debugging errors which will come when variables are accidently
used in a calculation or statement and its value becomes modified unintentionally

use let when the variable's value will be changed later on
*/
const num = 5; // variable declared with const needs to be initialized right away

console.log(num);
```

<!-- -->
<!-- -->
<!-- -->
<!-- -->
<!-- -->

```js
// changing one property in a const object
"use strict";

const playerObject = {
  health: 26189,
  attack: 3812,
  defense: 2341
};

console.log("HEALTH: " + playerObject.health);

playerObject.health = 1329;

console.log("HEALTH: " + playerObject.health);
```

<!-- -->
<!-- -->
<!-- -->
<!-- -->
<!-- -->

```js
// data types
"use strict";

const val1 = "The hashtag symbol is technically called an octothorpe";
const val2 = 73;
const val3 = true;
const val4 = {
  health: 87691,
};
const val5 = BigInt(988012654290834076209843); // a value followed by n can be used instead of BigInt()

const val6 = null;
let val7;
const val8 = Symbol();
let val9 = 478915654878945613487n;
const val10 = 48.52;

console.log("VAL1: " + val1);
console.log(typeof val1);

console.log("VAL2: " + val2);
console.log(typeof val2);

console.log("VAL3: " + val3);
console.log(typeof val3);

console.log(val4);
console.log(typeof val4);

console.log("VAL5: " + val5);
console.log(typeof val5);

console.log("VAL6: " + val6);
console.log(typeof val6);

console.log("VAL7: " + val7);
console.log(typeof val7);

console.log(val8);
console.log(typeof val8);

console.log("VAL9: " + val9);
console.log(typeof val9);

console.log("VAL10: " + val10);
console.log(typeof val10);
```
