function agencyProfit(input){
    let airLineName = input[0];
    let adultTickets = Number(input[1]);
    let kidsTickets = Number(input[2]);
    let adultTicketPrice = Number(input[3]);
    let serviceFee = Number(input[4]);

    let kidsTicketPrice = adultTicketPrice - (adultTicketPrice * 0.7);

    let kidsTicketsAmount = kidsTicketPrice * kidsTickets + serviceFee * kidsTickets;
    let adultTicketsAmount = adultTicketPrice * adultTickets + serviceFee * adultTickets;
    let airLineProfit = (kidsTicketsAmount + adultTicketsAmount) * 0.2;

    console.log(`The profit of your agency from ${airLineName} tickets is ${airLineProfit.toFixed(2)} lv.`);
}

agencyProfit(["WizzAir",
"15",
"5",
"120",
"40"])