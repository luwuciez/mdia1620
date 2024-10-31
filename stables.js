let horseName = "David";
let horseNickName = "Dummy";
let horseAge = 7;

const STABLE_MONTHLY_FEE = 50;
const MONTHLY_INCOME = 120;

let monthlyNetIncome = MONTHLY_INCOME - STABLE_MONTHLY_FEE;
let spendingIntroduction = `I make $${MONTHLY_INCOME} each month, and spend $${STABLE_MONTHLY_FEE} to board ${horseNickName}. So My monthly net income is $${monthlyNetIncome}.`;

console.log(spendingIntroduction);

const DISCOUNT = 10;
let threeMonthFee = STABLE_MONTHLY_FEE * 3;
let savings = threeMonthFee * Number(DISCOUNT / 100);
console.log(
    `After getting a ${DISCOUNT}% discount, I can save $${savings} for a 3-month stay at the stable.`
);

// Lesson 6
let myHorses = [
    [horseName, horseNickName, horseAge, "brown", true],
    ["Steve", "Blue", 3, "spotted", false],
    ["Miku", "Diva", 9, "teal", true],
];

// intro to horses
// whether horses are inside or outside
console.log(`I have ${myHorses.length} horses`);

myHorses.forEach((horse) => {
    let horseIntroduction = "";

    horseIntroduction = horseIntroduction.concat(
        `${horse[0]}'s nickname is ${horse[1]}, they're a ${horse[2]} year-old ${horse[3]} horse;`
    );

    if (horse[4]) {
        horseIntroduction = horseIntroduction.concat(
            ` ${horse[1]} is inside the stable right now.`
        );
    } else {
        horseIntroduction = horseIntroduction.concat(
            ` ${horse[1]} is outside playing right now.`
        );
    }

    console.log(horseIntroduction);
});
