function safari(input) {
    let budget = Number(input[0]);
    let litresOfFuel = Number(input[1]);
    let day = input[2];

    let totalAmount = 100;
    let fuelCost = litresOfFuel * 2.10;
    totalAmount += fuelCost;

    if (day === 'Saturday') {
        totalAmount = totalAmount - (totalAmount * 0.1);
    } else if (day === 'Sunday') {
        totalAmount = totalAmount - (totalAmount * 0.2);
    }

    let diff = Math.abs(budget - totalAmount);
    if (budget >= totalAmount) {
        console.log(`Safari time! Money left: ${diff.toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
    }

}

safari(["120",
    "30",
    "Saturday"])
