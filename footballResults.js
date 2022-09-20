function footballResults(input) {
    let firstGame = input[0];
    let secondGame = input[1];
    let thirdGame = input[2];
    let wins = 0;
    let draws = 0;
    let losses = 0;

    if (Number(firstGame[0]) > Number(firstGame[2])) {
        wins++;
    } else if (Number(firstGame[0]) < Number(firstGame[2])) {
        losses++;
    } else {
        draws++;
    }

    if (Number(secondGame[0]) > Number(secondGame[2])) {
        wins++;
    } else if (Number(secondGame[0]) < Number(secondGame[2])) {
        losses++;
    } else {
        draws++;
    }

    if (Number(thirdGame[0]) > Number(thirdGame[2])) {
        wins++;
    } else if (Number(thirdGame[0]) < Number(thirdGame[2])) {
        losses++;
    } else {
        draws++;
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${losses} games.`);
    console.log(`Drawn games: ${draws}`);

}

footballResults(["4:2",
    "0:3",
    "1:0"])

