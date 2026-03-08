js

```js
// display a string
"use strict"; //  always use this in order to see errors in the javascript code

console.log("I want to create a project that uses JavaScript");
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

console.log("NUM1: ", num1);
console.log("NUM2: ", num2);
console.log("NUM3: ", num3);
```

<!-- -->
<!-- -->
<!-- -->
<!-- -->
<!-- -->

```js
"use strict";

/*
declares a variable where its value can't be changed later on

when used on an object, a property can be changed in the object but the whole object itself can't be changed. this is because the address or reference that points to the memory address can't be changed but the value stored in it can be changed
*/
const num = 5;

console.log(num);
```

<!-- -->
<!-- -->
<!-- -->
<!-- -->
<!-- -->

```js
"use strict";

const playerObject {
  health = 26189;
  attack = 3812;
  defense = 2341;
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

function
