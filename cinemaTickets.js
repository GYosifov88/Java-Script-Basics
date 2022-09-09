function cinemaTickets(input) {
    let index = 0;
    let totalTickets = 0;
    let studentTicketsCount = 0;
    let standardTicketsCount = 0;
    let kidsTicketsCount = 0;
    let command = input[index];
    index++;

    while (command !== 'Finish') {
        let currentMovie = command;
        let space = Number(input[index]);
        let soldtickets = 0;
        index++
        let secCommand = input[index];
        while (secCommand !== 'End') {
            let ticketType = secCommand;
            soldtickets++
            totalTickets++;
            if (ticketType === 'standard') {
                standardTicketsCount++;
            } else if (ticketType === 'kid') {
                kidsTicketsCount++;
            } else if (ticketType === 'student') {
                studentTicketsCount++;
            }
            if (space <= soldtickets) {
                break;
            }
            index++;
            secCommand = input[index];
        }
        let percent = soldtickets / space * 100;
        console.log(`${currentMovie} - ${percent.toFixed(2)}% full.`);

        index++
        command = input[index]
        index++
    }

    let percentStudentTickets = studentTicketsCount / totalTickets * 100
    let percentStandardTickets = standardTicketsCount / totalTickets * 100
    let percentkidsTickets = kidsTicketsCount / totalTickets * 100

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${percentStudentTickets.toFixed(2)}% student tickets.`);
    console.log(`${percentStandardTickets.toFixed(2)}% standard tickets.`);
    console.log(`${percentkidsTickets.toFixed(2)}% kids tickets.`);

}

cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])

