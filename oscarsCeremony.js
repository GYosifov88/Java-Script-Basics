function oscarsCeremony(input) {
    let roomRent = Number(input[0]);
    let statuesPrice = roomRent - (roomRent * 0.3);
    let cetaringPrice = statuesPrice - (statuesPrice * 0.15);
    let soundingPrice = cetaringPrice / 2;

    let totalCost = roomRent + statuesPrice + cetaringPrice + soundingPrice;

    console.log(totalCost.toFixed(2));
}

oscarsCeremony(["3500"])