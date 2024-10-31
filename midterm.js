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
