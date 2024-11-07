function Horse(name, nickname, coat, favFood, personality) {
    this.name = name;
    this.nickname = nickname;
    this.age = Math.floor(Math.random() * 11);
    this.coat = coat;
    this.favFood = favFood;
    this.personality = personality;
    this.isInside = true;
    this.isHungry = true;
    this.introduction = function () {
        console.log(
            `This is ${this.name}, a ${this.age} year-old ${this.coat} horse.`
        );
    };
    this.goOutiside = function () {
        if (this.isInside) {
            this.isInside = false;
            console.log(`${this.name} is now outside.`);
        } else {
            console.log(`${this.name} is already outside!`);
        }
    };
    this.feed = function (food) {
        if (this.isHungry && food === this.favFood) {
            this.isHungry = false;
            console.log(`${this.name} loves ${food} so much they ate it all.`);
        } else {
            console.log(`${this.name} isn't really hungry right now...`);
        }
    };
}

const steve = new Horse("Steve", "Dummy", "brown", "apples", "demure");
const miku = new Horse("Miku", "Diva", "turquoise", "leek", "gentle");
const zelda = new Horse("Zelda", "Princess", "gold", "fruitcake", "brave");

function getHorseName(horse, key) {
    console.log(`This horse is ${key}d ${horse[key]}.`); // bracket notation (dynamic access)
}

getHorseName(steve, "nickname");

miku.feed("orange");
miku.feed("leek");
