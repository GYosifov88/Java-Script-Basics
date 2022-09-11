function vetParking(input) {
    let daysCount = Number(input[0]);
    let hoursPerDay = Number(input[1]);
    let total = 0;

    for (let i = 1; i <= daysCount; i++) {
        let currentDayCost = 0;
        for (let k = 1; k <= hoursPerDay; k++) {
            if (i % 2 !== 0 && k % 2 !== 0) {
                currentDayCost += 1;
            } else if (i % 2 !== 0 && k % 2 === 0) {
                currentDayCost += 1.25;
            } else if (i % 2 === 0 && k % 2 !== 0) {
                currentDayCost += 2.50;
            } else if (i % 2 === 0 && k % 2 === 0) {
                currentDayCost += 1;
            }
        }
        total += currentDayCost
        console.log(`Day: ${i} - ${currentDayCost.toFixed(2)} leva`);
    }

    console.log(`Total: ${total.toFixed(2)} leva`);
}

vetParking(["5",
    "2"])

