function gameNumberWars(input) {
    let index = 0;
    let firstPlayerName = input[index];
    index++;
    let secondPlayerName = input[index];
    index++;
    let isNumberWar = false;
    let firstPlayerPoints = 0;
    let secondPlayerPoints = 0;

    let command = input[index];

    while (command !== 'End of game') {
        let firstPlayerCard = Number(command)
        index++;
        let secondPlayerCard = Number(input[index]);
        index++;
        if (firstPlayerCard > secondPlayerCard) {
            firstPlayerPoints += firstPlayerCard - secondPlayerCard;
        } else if (firstPlayerCard < secondPlayerCard) {
            secondPlayerPoints += secondPlayerCard - firstPlayerCard;
        } else {
            isNumberWar = true;
            console.log("Number wars!");
            let firstLastCard = Number(input[index]);
            index++;
            let secondLastCard = Number(input[index]);
            index++;
            if (firstLastCard > secondLastCard) {
                console.log(`${firstPlayerName} is winner with ${firstPlayerPoints} points`);
            } else {
                console.log(`${secondPlayerName} is winner with ${secondPlayerPoints} points`);
            }
            break;
        }

        command = input[index];

    }
    if (isNumberWar === false) {
        console.log(`${firstPlayerName} has ${firstPlayerPoints} points`);
        console.log(`${secondPlayerName} has ${secondPlayerPoints} points`);
    }

}

gameNumberWars(["Aleks",
    "Georgi",
    "4",
    "5",
    "3",
    "2",
    "4",
    "3",
    "4",
    "4",
    "5",
    "2"])


