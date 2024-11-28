// ------------------------------------- TEMPLATE LITERALS -------------------------------------
let word = "template literal";

let sentence = `This is an example of a ${word}.`;

console.log(sentence);
// Prints "This is an example of a template literal."

// ------------------------------------- CONDITIONALS / IF-STATEMENTS -------------------------------------
let number = 5;

if (number < 0) {
    console.log("Less than 0");
} else if (number < 10) {
    console.log("Less than 10"); // <- will print since 5 < 10
} else {
    console.log("Won't get to me");
}

// ------------------------------------- ARRAY OPERATIONS -------------------------------------

let array = [];

// add to array and return length of array
array.push(0);
array.push(1);

console.log(array.push(2));
// Prints 3
console.log(array);
// Prints [ 0, 1, 2]

// join elements in array and return a string
let joinedArray = array.join();

console.log(joinedArray);
console.log(typeof joinedArray);
// Prints "0,1"
// Note that joinedArray is no longer an array, but a string

// ------------------------------------- FUNCTIONS -------------------------------------

const globalVar = "Hello World";

function echo(parameter) {
    let localVar = parameter;
    return localVar;
}

console.log(echo(globalVar));
// Prints "Hello World"
// globalVar is passed as the argument to the function

// console.log(localVar);
// Will result in ReferenceError
// Since localVar was declared in a function, their scope is local,
// so outside of the function we cannot access it

const booleanArray = [true, false, true];

function checkBoolean(index) {
    if (booleanArray[index]) {
        console.log(`Array element at index ${index} is true.`);
    } else {
        console.log(`Array element at index ${index} is false.`);
    }
}

console.log(checkBoolean(0));
// Prints undefined, since function does not have a return

function checkBooleanAgain(index) {
    // Another way to use if statements:
    // Check boolean and return immediately if false
    if (!booleanArray[index]) {
        // Do nothing
        return `Array element at index ${index} is false.`;
    }

    // Do something
    let str = "Yay!";
    return `Array element at index ${index} is true. ${str}`;
}

console.log(checkBooleanAgain(0));
// Prints "Array element at index 0 is true. Yay!"
console.log(checkBooleanAgain(1));
// Prints "Array element at index 1 is false."

function returnSum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function checkGreaterThan(fnumber, snumber) {
    let sum = fnumber + snumber;
    // Does the math and prints out sum
    console.log("The sum of these numbers are: " + sum);
    // Checks if sum is greater than 3
    if (sum > 3) {
        console.log("The sum of these numbers are greater than 3!");
    } else {
        console.log("These numbers are less than or equal to 3!");
    }
}

checkGreaterThan(1, 2);

function machine(name, number) {
    console.log(name + " " + number);
    return name + " " + number;
}

machine("potato", 2);
machine("blueberries", 4);

// ------------------------------------- MIDTERM QUESTION & ANSWER -------------------------------------

/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/

function passwordCheck(password, input) {
    if (password.length < 5) {
        console.log("Your password is too short!");
    }

    if (input === password) {
        console.log("Access Granted!");
        if (password === "forgot" || password === "reset") {
            console.log(
                "This password you set should not be used because it glitches the system"
            );
        }
    } else if (input === "forgot") {
        console.log("Here is a hint");
    } else if (input === "reset") {
        console.log("Let's reset your account");
    } else {
        console.log("Access Denied!");
    }
}

const PASSWORD = "Billie";

passwordCheck(PASSWORD, "Billie"); // => Access Granted!
passwordCheck(PASSWORD, "Teenie"); // => Access Denied!
passwordCheck(PASSWORD, "forgot"); // => Here is a hint
passwordCheck(PASSWORD, "reset"); // => Let's reset your account

passwordCheck("forgot", "forgot"); // =>  Access Granted! / This password you set should not be used because it glitches the system
passwordCheck("forgot", "Billie"); // => Access Denied!
