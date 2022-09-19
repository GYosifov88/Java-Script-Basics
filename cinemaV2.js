function cinema(input) {
    let index = 0;
    let roomCapacity = Number(input[index]);
    index++;
    let ticketPrice = 5;
    let income = 0;
    let isRoomFull = false
    let command = input[index];

    while (command !== 'Movie time!') {
        let ticketsCount = Number(command);
        if (ticketsCount > roomCapacity) {
            isRoomFull = true;
            break;
        }
        roomCapacity -= ticketsCount;
        let currentIncome = ticketsCount * ticketPrice;

        if (ticketsCount % 3 === 0) {
            currentIncome -= 5;
        }
        income += currentIncome;
        index++;
        command = input[index];
    }

    if (isRoomFull === true) {
        console.log("The cinema is full.");
    } else {
        console.log(`There are ${roomCapacity} seats left in the cinema.`);
    }
    console.log(`Cinema income - ${income} lv.`);

}

cinema(["100",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "10",
    "Movie time!"])


