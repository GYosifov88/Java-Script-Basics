function fruitMarket(input) {
    let strawberiesPrice = Number(input[0]);
    let kilosBananas = Number(input[1]);
    let kilosOranges = Number(input[2]);
    let kilosBerries = Number(input[3]);
    let kilosStrawberries = Number(input[4]);

    let berriesPrice = strawberiesPrice / 2;
    let orangesPrice = berriesPrice - (berriesPrice * 0.4);
    let bananasPrice = berriesPrice - (berriesPrice * 0.8);

    let total = (strawberiesPrice * kilosStrawberries) + (kilosBananas * bananasPrice) + (kilosOranges * orangesPrice) + (kilosBerries * berriesPrice);

    console.log(total.toFixed(2));
}

fruitMarket(["63.5",
    "3.57",
    "6.35",
    "8.15",
    "2.5"
])