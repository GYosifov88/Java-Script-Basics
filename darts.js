function darts(input) {
    let index = 0;
    let playerName = input[index];
    index++;
    let initialPoints = 301;
    let successfulShots = 0;
    let unsuccessfulShots = 0;
    let isWinner = false;

    let command = input[index];

    while (command !== 'Retire') {
        let field = command;
        index++;
        let pointsHit = Number(input[index])
        let pointsGathered = 0;
        if (field === 'Single') {
            pointsGathered += pointsHit;
        } else if (field === 'Double') {
            pointsGathered += pointsHit * 2;
        } else if (field === 'Triple') {
            pointsGathered += pointsHit * 3;
        }

        if (pointsGathered <= initialPoints) {
            successfulShots++;
            initialPoints -= pointsGathered;
            if (initialPoints <= 0) {
                isWinner = true;
                break;
            }
        } else {
            unsuccessfulShots++;
        }

        index++;
        command = input[index];
    }

    if (isWinner === true) {
        console.log(`${playerName} won the leg with ${successfulShots} shots.`);
    } else {
        console.log(`${playerName} retired after ${unsuccessfulShots} unsuccessful shots.`);
    }

}

darts(["Rob Cross",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "20",
    "Triple",
    "20",
    "Double",
    "5",
    "Triple",
    "10",
    "Double",
    "6",
    "Retire"])


