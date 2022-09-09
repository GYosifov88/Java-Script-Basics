function familyTrip(input) {
    let budget = Number(input[0]);
    let nightsCount = Number(input[1]);
    let costPerNight = Number(input[2]);
    let percentAddExpenses = Number(input[3]);

    let nightsCost = nightsCount * costPerNight

    if (nightsCount > 7) {
        nightsCost -= nightsCost * 0.05;
    }

    let addExpenses = budget * (percentAddExpenses / 100);
    let overallCost = addExpenses + nightsCost;

    if (budget >= overallCost) {
        console.log(`Ivanovi will be left with ${(budget - overallCost).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(overallCost - budget).toFixed(2)} leva needed.`);
    }

}

familyTrip(["500",
    "7",
    "66",
    "15"])

