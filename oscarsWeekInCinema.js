function oscarsWeekInCinema(input) {
    let movie = input[0];
    let roomType = input[1];
    let ticketsBought = Number(input[2]);
    let income = 0;

    if (movie === "A Star Is Born") {
        if (roomType === "normal") {
            income = ticketsBought * 7.5;
        } else if (roomType === "luxury") {
            income = ticketsBought * 10.5;
        } else if (roomType === "ultra luxury") {
            income = ticketsBought * 13.5;
        }
    } else if (movie === "Bohemian Rhapsody") {
        if (roomType === "normal") {
            income = ticketsBought * 7.35;
        } else if (roomType === "luxury") {
            income = ticketsBought * 9.45;
        } else if (roomType === "ultra luxury") {
            income = ticketsBought * 12.75;
        }
    } else if (movie === "Green Book") {
        if (roomType === "normal") {
            income = ticketsBought * 8.15;
        } else if (roomType === "luxury") {
            income = ticketsBought * 10.25;
        } else if (roomType === "ultra luxury") {
            income = ticketsBought * 13.25;
        }
    } else if (movie === "The Favourite") {
        if (roomType === "normal") {
            income = ticketsBought * 8.75;
        } else if (roomType === "luxury") {
            income = ticketsBought * 11.55;
        } else if (roomType === "ultra luxury") {
            income = ticketsBought * 13.95;
        }
    }

    console.log(`${movie} -> ${income.toFixed(2)} lv.`);
}

oscarsWeekInCinema(["A Star Is Born",
    "luxury",
    "42"])
