const readline = require('readline'); //this is an input module like mocha
//node to run code

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


/*
Randal's #: 12
Level 2: Hates Prime numbers: exclude
*/
let answerArray = [];

const isNumber = (num) => {
    for (let i = 0; i < answerArray.length; i++) {
    if (num === answerArray[i]) {
        return true;
    }
    }
    return false;
}

//Level 2
const firstQ = answer => {
    if (answer === 12) {
        console.log("Well, it sucks to be you. Game Over!");
    } else {
        answerArray.push(answer);
        console.log("Nicely done, Level 1 Complete. Let's see if you can get to 5. >: ) . Just 1 thing, you can't use the same number twice")
        rl.question("Hint #1 Randal is an elve, he hates anything squared that equates to 4, 9 or 12.", secondQ);
    }
}

//(Level 3
const secondQ = answer => {
    if (answer === 12) {
        console.log("It's ok, we can't all be winners :/. Game over!")
    }
    if(isNumber(answer)) {
        console.log('Number already received');
        rl.question("Level 1  Complete. Hint #1 Randal is an elve, he hates anything squared that equates to 4, 9 or 12.", secondQ);
    }
        answerArray.push(answer);
        console.log("I hope you're keeping track, only 3 levels 2 go!");
        rl.question("Level 2 Complete. Hint numba 2:  Randal's head is filled with beans, he doesn't know what inclusive means.", thirdQ);
}

//Level 4
const thirdQ = answer => {
    if (answer === 12) {
        console.log("It's been a ravaging ride.. Randal's coming, you better hide. Game over!");
    }
    if(isNumber(answer)) {
        console.log('Number already received');
        rl.question("Level 2 Complete. Hint numba 2:  Randal's head is filled with beans, he doesn't know what inclusive means.", thirdQ);
    }
    answerArray.push(answer);
   console.log('Look at you, King or Queen..');
   rl.question("Level 3 Complete! Hint #3: Randal can't possibly be a dime! He HaTeS aNyThInG tHaT iS PrIme!", fourthQ);
}

//Level 5
const fourthQ = answer => {
    if (answer === 12) {
        console.log("Well, checkmate, you have greeted your fate. Game over!");
    }
    if(isNumber(answer)) {
        console.log('Number already received');
        rl.question("Level 3 Complete! Hint #3: Randal can't possibly be a dime! He HaTeS aNyThInG tHaT iS PrIme!", fourthQ);
    }
    answerArray.push(answer);
    console.log("Oh, you're so close. Finish this and you'e good to go!");
    rl.question("Level 4 Complete! Hint #4:  Crazy Randal won't take the bait, he doesn't like anything that is divisible by eight!", fifthQ);
}

const won = function() {
    console.log("GAME WON!!!");
}

const fifthQ = answer => {
    if (answer === 12) {
        console.log("Well, checkmate, you have greeted your fate. Game over!");
    }
    if(isNumber(answer)) {
        console.log('Number already received');
        rl.question("Level 4 Complete! Hint #4:  Crazy Randal won't take the bait, he doesn't like anything that is divisible by eight!", fifthQ);
    }
    console.log("Congrats, you've seemed to avoid picking Randal's favorite number. If you did I wonder.");
    rl.close();
   setTimeout(won, 3000);
}

//Level 1:
rl.question("Welcome to Randal's Game! Pick a number between 1 and 20, inclusive, if you dare. Try not to pick Randal's favorite number if you care...", firstQ);
