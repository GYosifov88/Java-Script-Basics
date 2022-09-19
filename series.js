function series(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let seriesCount = Number(input[index]);
    index++;
    let totalSeriesAmount = 0;

    for (let i = 0; i < seriesCount; i++) {
        let currentSeries = input[index];
        index++;
        let currentSeriesPrice = Number(input[index]);
        index++
        if (currentSeries === 'Thrones') {
            currentSeriesPrice /= 2;
        } else if (currentSeries === 'Lucifer') {
            currentSeriesPrice -= currentSeriesPrice * 0.4;
        } else if (currentSeries === 'Protector') {
            currentSeriesPrice -= currentSeriesPrice * 0.3;
        } else if (currentSeries === 'TotalDrama') {
            currentSeriesPrice -= currentSeriesPrice * 0.2;
        } else if (currentSeries === 'Area') {
            currentSeriesPrice -= currentSeriesPrice * 0.1;
        }

        totalSeriesAmount += currentSeriesPrice;
    }

    let diff = Math.abs(totalSeriesAmount - budget);

    if (budget >= totalSeriesAmount) {
        console.log(`You bought all the series and left with ${diff.toFixed(2)} lv.`);
    } else {
        console.log(`You need ${diff.toFixed(2)} lv. more to buy the series!`);
    }
}

series(["25",
    "6",
    "Teen Wolf",
    "8",
    "Protector",
    "5",
    "TotalDrama",
    "5",
    "Area",
    "4",
    "Thrones",
    "5",
    "Lucifer",
    "9"])

