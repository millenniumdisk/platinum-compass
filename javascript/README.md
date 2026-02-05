- reserved keywords - words that the compiler identifies as having a specific meaning which makes them unavailable to be used in naming variables or functions

- function - may be a user-defined or pre-built function that executes whatever code block it contains by using a function call and can be spotted because of an open and close parenthesis near its name

- `alert()` - a function that will make a dialog box to pop up with a message
```js
alert("A cloud weighs around a million tonnes");
```

- `<script>` - usually used when connecting a javascript file to an html file

Add inside <body> but place it at the very last line of <body> in the html file
`<script src="script.js"></script>`

- comments - descriptions or labels that are ignored by the compiler and help explain the purpose of each code
```js
// line comment
// Giraffes are 30 times more likely to get hit by lightning than people

// multi-line comment
/*
Earth’s rotation is changing speed. It's actually slowing.
This means that, on average,
the length of a day increases by around 1.8 seconds per century
*/
```

console.log() - display an output to the browser's console

convention - something that many people follow that will not only help the programmer later for clarity but also others who will read or modify the code when collaborating

variable name creation

rules
1. variables names can't start with a number
2. names can't have a space character between words
3. reserved keywords can't be used as names
4. special characters are not allowed but underscore and dollar sign can be used (exceptions depend on the programming language)

valid variable names
- `studentAge`
- `student_age`
- `number1`
- `GRAVITY`
- `PI`

invalid variable names
- `8studentAge`
- `student age`
- `student@ge`
- `let`

conventions
1. use descriptive variable names
2. don't use underscore as the first character of the variable name
3. avoid mixing numbers in the middle of names
4. use the proper case for variables, functions, etc.
5. use all uppercase letters to denote that a variable is a constant like gravity or pi
6. variables usually start with a lower case letter

good variable names
- `studentAge`
- `customerName`
- `customer_address`
- `DAMAGE_MULTIPLIER`

bad variable names
- `ca`
- `stud3ntAge`
- `CustomerName`
- `armordurability`

let - used for declaring a variable where its value can be changed later
`let studentAge;`

variable declaration
`let item;`

initialization - initialization or definition means defining the variable such as putting a value at the same time of variable declaration (functions also have definitions and the difference between definitions and declarations depends on the programming language)
`let playerHealth = 64382;`

cases

1. camel case: `stadiumCapacity`
2. pascal case: `GameManager`
3. camel case + uppercase: `seniorEmployeeID`
4. constant case: `PLAYER_ID`
5. snake case: `student_age`
6. kebab case: `product-price`
7. flat case: `studentname`
8. screaming case: `PLAYERLEVEL`
9. cobol case: `PLAYER-NAME`
10. train case: `Player-Weapon`
11. pascal snake case: `Student_Name`
12. camel snake case: `student_Id`

only familiarize yourself with camel case and pascal case for now (cases #1 to #6 are common and #7 to #12 are rare)

compiler - the one responsible in converting the human readable programming language to machine language before it can be executed (depending on the programming language, an interpreter may also be working in converting the human readable code to machine langauge on the fly only when the human readable code is executed one line at a time at runtime)

dynamic typing - depending on the programming language, the compiler will have no problem if the code doesn't explicitly say the data type of a variable when declaring it since the value stored in it will automatically decide it at runtime and it is legal to assign a new different data type (in a typed programming language, manually specifying if a variable is an integer, float or character is required in variable declaration and assigning a new different data type is not allowed)

compile time - the time when the compiler is converting the human readable code to machine code of ones and zeroes that the computer understands

runtime - when the code is being executed one line at a time and can receive data from user

whitespaces -  tab, space and newline characters are normally ignored by the compiler unless when used in things like strings or variable names

expression - similar to formulas in mathematics, an expression will produce an output or result which can be saved in a variable or used right away

statement - similar to sentences in the english language that needs a period to complete it, a statement needs a semicolon or ; to complete it

if statement - executes the code block inside its opening and closing curly braces if the condition is true (curly braces are not needed if there is only one statement inside it instead of a code block)
```js
let password = "l5n7$zt";

if (password === "l5n7$zt") {
	// code block here
	console.log("Password is correct");
}
```

data types - made up of primitive and object

primitive data types

number
string
boolean
undefined
null
symbol
BigInt

value - can be of any data type (primitive or object)

object - it is like a customized user-defined variable that can contain different variables inside it as properties and can be spotted because of the opening and closing curly braces
```js
let player = {
	health: 74128,
	attack: 468,
	defense: 253
};
```

typeof
