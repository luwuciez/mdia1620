console.log("I have a horse.");

let horseName = "David";
let horseNickName = "Dummy";
console.log(`The name of my horse is ${horseName}.`);
console.log(`Sometimes ${horseName} is a little dumb, so I like to call him ${horseNickName}.`); // He's still a good boy though :)

let horseAge = 7;
console.log(`${horseNickName} is ${horseAge} years old.`);

let isHorseInStable = true;
if (isHorseInStable==true) {
    console.log(`${horseNickName} is in the stable right now.`);
} else {
    console.log(`${horseNickName} is outside the stable right now.`);
}

const STABLE_MONTHLY_FEE = 50;
const MONTHLY_INCOME = 120;

let monthlyNetIncome = MONTHLY_INCOME - STABLE_MONTHLY_FEE;
let spendingIntroduction = `I make $${MONTHLY_INCOME} each month, and spend $${STABLE_MONTHLY_FEE} to board ${horseNickName}. So My monthly net income is $${monthlyNetIncome}.`;

console.log(spendingIntroduction);

const DISCOUNT = 10;
let threeMonthFee = STABLE_MONTHLY_FEE * 3;
let savings = threeMonthFee * Number(DISCOUNT/100);
console.log(`After getting a ${DISCOUNT}% discount, I can save $${savings} for a 3-month stay at the stable.`);
