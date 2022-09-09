function club(input) {
    let index = 0;
    let gainNeeded = Number(input[index]);
    index++;
    let command = input[index];
    let amountGain = 0;

    while (command !== 'Party!') {
        let cocktail = command;
        let cocktailPrice = Number(cocktail.length)
        index++;
        let cocktailsCount = Number(input[index]);
        let currentGain = cocktailsCount * cocktailPrice;
        if (currentGain % 2 !== 0) {
            currentGain -= currentGain * 0.25
        }
        amountGain += currentGain

        if (amountGain >= gainNeeded) {
            console.log("Target acquired.");
            break;
        }

        index++
        command = input[index]
    }

    if (amountGain < gainNeeded) {
        console.log(`We need ${(gainNeeded - amountGain).toFixed(2)} leva more.`);
    }

    console.log(`Club income - ${amountGain.toFixed(2)} leva.`);


}

club(["500",
    "Bellini",
    "6",
    "Bamboo",
    "7",
    "Party!"])


