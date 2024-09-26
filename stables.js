console.log("I have a horse.");

let horseName = "David";
console.log("The name of my horse is " + horseName + ".");
console.log("Sometimes " + horseName + " is a little dumb,"); // He's still a good boy though :)

horseName = "Dummy";
console.log("so I like to call him " + horseName + ".");

let horseAge = 7;
console.log(horseName + " is " + horseAge + " years old.");

let isHorseInStable = true;
if (isHorseInStable==true) {
    console.log(horseName + " is in the stable right now.");
}

const STABLE_MONTHLY_FEE = 50;
const MONTHLY_INCOME = 120;

let monthlyNetIncome = MONTHLY_INCOME - STABLE_MONTHLY_FEE;
let spendingIntroduction = `I make $${MONTHLY_INCOME} each month, and spend $${STABLE_MONTHLY_FEE} to board ${horseName}. My monthly net income is $${monthlyNetIncome}.`;

console.log(spendingIntroduction);