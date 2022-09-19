function movieProfit(input) {
    let movieName = input[0];
    let daysCount = Number(input[1]);
    let ticketsCount = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let cinemaPercent = Number(input[4]);

    let ticketsPricePerDay = ticketsCount * ticketPrice;
    let incomeForThePeriod = ticketsPricePerDay * daysCount;
    let cinemaPrice = incomeForThePeriod * cinemaPercent / 100;
    let movieProfit = incomeForThePeriod - cinemaPrice;

    console.log(`The profit from the movie ${movieName} is ${movieProfit.toFixed(2)} lv.`);

}

movieProfit(["The Programmer",
    "20",
    "500",
    "7.50",
    "7"])
