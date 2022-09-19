function favouriteMovie(input) {
    let index = 0;
    let bestMovie = '';
    let bestScore = Number.MIN_SAFE_INTEGER;
    let counter = 0;
    let command = input[index];
    let isLimitReached = false;

    while (command !== 'STOP') {
        counter++;
        if (counter === 7) {
            isLimitReached = true;
            break;
        }

        let currentScore = 0;

        for (let i = 0; i < command.length; i++) {
            let currentSymbol = command.charAt(i);
            if ((64 < command.charCodeAt(i) && command.charCodeAt(i) < 91) || (96 < command.charCodeAt(i) && command.charCodeAt(i) < 123)) {
                if (currentSymbol === currentSymbol.toUpperCase()) {
                    currentScore += (Number(command.charCodeAt(i)) - Number(command.length));
                } else if (currentSymbol === currentSymbol.toLowerCase()) {
                    currentScore += (Number(command.charCodeAt(i)) - (2 * Number(command.length)));
                }
            } else {
                currentScore += Number(command.charCodeAt(i));
            }
        }

        if (currentScore > bestScore) {
            bestScore = currentScore;
            bestMovie = command;
        }

        index++;
        command = input[index];
    }

    if (isLimitReached === true) {
        console.log(`The limit is reached.`);
    }

    console.log(`The best movie for you is ${bestMovie} with ${bestScore} ASCII sum.`);
}

favouriteMovie(["Wrong turn",
    "The maze",
    "Area 51",
    "Night Club",
    "Ice age",
    "Harry Potter",
    "Wizards"])





