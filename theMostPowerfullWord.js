function theMostPowerfullWord(input) {
    let index = 0;
    let mostPowerfullWord = '';
    let mostPowerfullScore = 0;
    let command = input[index];
    while (true) {

        if (command === "End of words") {
            break;
        }

        let currentSum = 0;
        for (let i = 0; i < command.length; i++) {
            currentSum += command.charCodeAt(i);
        }
        let vocals = 'aeiouyAEIOUY';
        if (vocals.includes(command.charAt(0))) {
            currentSum = currentSum * command.length;
        } else {
            currentSum = Math.floor(currentSum / command.length);
        }

        if (currentSum > mostPowerfullScore) {
            mostPowerfullWord = command;
            mostPowerfullScore = currentSum;
        }

        index++;
        command = input[index];
    }

    console.log(`The most powerful word is ${mostPowerfullWord} - ${mostPowerfullScore}`);
}

theMostPowerfullWord(["But",
    "Some",
    "People",
    "Say",
    "It's",
    "LOVE",
    "End of words"])

