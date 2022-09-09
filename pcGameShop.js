function pcGameShop(input) {
    let index = 0;
    let gameSoldCount = Number(input[index]);
    index++;
    let hearthstoneCount = 0;
    let fortniteCount = 0;
    let overwatchCount = 0;
    let othersCount = 0;

    for (let i = 0; i < gameSoldCount; i++) {
        let currentGame = input[index];
        index++;
        if (currentGame === 'Hearthstone') {
            hearthstoneCount++;
        } else if (currentGame === 'Fornite') {
            fortniteCount++;
        } else if (currentGame === 'Overwatch') {
            overwatchCount++;
        } else {
            othersCount++;
        }
    }

    let hearthstonePercent = hearthstoneCount / gameSoldCount * 100;
    let fortnitePercent = fortniteCount / gameSoldCount * 100;
    let overwatchPercent = overwatchCount / gameSoldCount * 100;
    let othersPercent = othersCount / gameSoldCount * 100;

    console.log(`Hearthstone - ${hearthstonePercent.toFixed(2)}%`);
    console.log(`Fornite - ${fortnitePercent.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchPercent.toFixed(2)}%`);
    console.log(`Others - ${othersPercent.toFixed(2)}%`);

}

pcGameShop(["3",
    "Hearthstone",
    "Diablo 2",
    "Star Craft 2"])

