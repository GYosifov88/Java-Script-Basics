function moviePremiere(input) {
    let movieTitle = input[0];
    let moviePacket = input[1];
    let ticketsCount = Number(input[2]);
    let ticketPrice = 0;

    if (movieTitle === 'John Wick') {
        if (moviePacket === 'Drink') {
            ticketPrice = 12;
        } else if (moviePacket === 'Popcorn') {
            ticketPrice = 15;
        } else if (moviePacket === 'Menu') {
            ticketPrice = 19;
        }
    } else if (movieTitle === 'Star Wars') {
        if (moviePacket === 'Drink') {
            ticketPrice = 18;
        } else if (moviePacket === 'Popcorn') {
            ticketPrice = 25;
        } else if (moviePacket === 'Menu') {
            ticketPrice = 30;
        }
    } else if (movieTitle === 'Jumanji') {
        if (moviePacket === 'Drink') {
            ticketPrice = 9;
        } else if (moviePacket === 'Popcorn') {
            ticketPrice = 11;
        } else if (moviePacket === 'Menu') {
            ticketPrice = 14;
        }
    }

    let totalPrice = ticketPrice * ticketsCount;

    if (movieTitle === 'Star Wars' && ticketsCount >= 4) {
        totalPrice -= totalPrice * 0.3;
    }

    if (movieTitle === 'Jumanji' && ticketsCount === 2) {
        totalPrice -= totalPrice * 0.15;
    }

    console.log(`Your bill is ${totalPrice.toFixed(2)} leva.`);
}

moviePremiere(["Jumanji",
    "Menu",
    "2"])


