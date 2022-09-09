function nameGame(input) {
    let index = 0;
    let topPlayer = '';
    let topScore = 0;


    while (true) {
        let command = input[index];
        index++;
        let currentScore = 0;

        if (command === 'Stop') {
            break;
        }

        for (let score = 0; score < command.length; score++) {
            let currentNum = Number(input[index]);
            index++
            if (currentNum === command.charCodeAt(score)) {
                currentScore += 10;
            } else {
                currentScore += 2;
            }
        }

        if (currentScore >= topScore) {
            topPlayer = command;
            topScore = currentScore;
        }
    }

    console.log(`The winner is ${topPlayer} with ${topScore} points!`);

}

nameGame(["Pesho",
    "124",
    "34",
    "111",
    "97",
    "99",
    "Gosho",
    "98",
    "124",
    "88",
    "76",
    "18",
    "Stop"])

