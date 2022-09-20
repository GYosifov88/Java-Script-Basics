function worldSnookerChampionship(input) {
    let stage = input[0];
    let ticketType = input[1];
    let ticketsCount = Number(input[2]);
    let pictureRequsted = input[3];
    let totalAmount = 0;
    let ticketsAmount = 0;

    if (stage === "Quarter final") {
        if (ticketType === 'Standard') {
            ticketsAmount = ticketsCount * 55.50;
        } else if (ticketType === 'Premium') {
            ticketsAmount = ticketsCount * 105.20;
        } else if (ticketType === 'VIP') {
            ticketsAmount = ticketsCount * 118.90;
        }
    } else if (stage === "Semi final") {
        if (ticketType === 'Standard') {
            ticketsAmount = ticketsCount * 75.88;
        } else if (ticketType === 'Premium') {
            ticketsAmount = ticketsCount * 125.22;
        } else if (ticketType === 'VIP') {
            ticketsAmount = ticketsCount * 300.40;
        }
    } else if (stage === "Final") {
        if (ticketType === 'Standard') {
            ticketsAmount = ticketsCount * 110.10;
        } else if (ticketType === 'Premium') {
            ticketsAmount = ticketsCount * 160.66;
        } else if (ticketType === 'VIP') {
            ticketsAmount = ticketsCount * 400;
        }
    }

    if (ticketsAmount > 4000) {
        totalAmount = ticketsAmount - (ticketsAmount * 0.25);
    }

    if (ticketsAmount > 2500 && ticketsAmount <= 4000) {
        totalAmount = ticketsAmount - (ticketsAmount * 0.1);
        if (pictureRequsted === 'Y') {
            totalAmount += ticketsCount * 40;
        }
    } else if (ticketsAmount <= 2500) {
        totalAmount = ticketsAmount;
        if (pictureRequsted === 'Y') {
            totalAmount += ticketsCount * 40;
        }
    }

    console.log(totalAmount.toFixed(2));
}

worldSnookerChampionship(["Quarter final",
    "Standard",
    "11",
    "N"])

