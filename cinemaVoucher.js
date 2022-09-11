function cinemaVoucher(input) {
    let index = 0;
    let voucherAmount = Number(input[index]);
    index++;
    let ticketsCount = 0;
    let otherThingsBought = 0;

    let command = input[index];

    while (command !== 'End') {
        let currentPrice = 0;
        if (command.length > 8) {
            currentPrice = (command.charCodeAt(0)) + (command.charCodeAt(1));
            if (currentPrice <= voucherAmount) {
                voucherAmount -= currentPrice;
                ticketsCount++;
            } else {
                break;
            }
        } else {
            currentPrice = (command.charCodeAt(0));
            if (currentPrice <= voucherAmount) {
                voucherAmount -= currentPrice;
                otherThingsBought++;
            } else {
                break;
            }
        }

        index++;
        command = input[index];
    }
    console.log(ticketsCount);
    console.log(otherThingsBought);
}

cinemaVoucher(["1500",
    "Avengers: Endgame",
    "Bohemian Rhapsody",
    "Deadpool 2",
    "End"])


