// ------------------------------------- TEMPLATE LITERALS -------------------------------------
let word = "template literal";

let sentence = `This is an example of a ${word}.`;

console.log(sentence);
// Prints "This is an example of a template literal."

// ------------------------------------- IF STATEMENTS -------------------------------------
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
