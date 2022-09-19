function movieDestination(input) {
    let moviedBudget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let daysCount = Number(input[3]);
    let pricePerDay = 0;

    if (destination === 'Dubai') {
        if (season === 'Winter') {
            pricePerDay = 45000 - 45000 * 0.3;
        } else if (season === 'Summer') {
            pricePerDay = 40000 - 40000 * 0.3;
        }
    } else if (destination === 'Sofia') {
        if (season === 'Winter') {
            pricePerDay = 17000 * 1.25;
        } else if (season === 'Summer') {
            pricePerDay = 12500 * 1.25;
        }
    } else if (destination === 'London') {
        if (season === 'Winter') {
            pricePerDay = 24000;
        } else if (season === 'Summer') {
            pricePerDay = 20250;
        }
    }

    let cost = pricePerDay * daysCount;
    let diff = Math.abs(cost - moviedBudget)
    if (cost > moviedBudget) {
        console.log(`The director needs ${diff.toFixed(2)} leva more!`);
    } else {
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`);
    }

}

movieDestination(["1000000",
    "Dubai",
    "Summer",
    "5"])



