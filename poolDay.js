function poolDay(input) {
    let index = 0;
    let peopleCount = Number(input[index]);
    index++;
    let entryCost = Number(input[index]);
    index++;
    let chairPrice = Number(input[index]);
    index++;
    let umbrellaPrice = Number(input[index]);

    let totalEntryCost = entryCost * peopleCount;
    let umbrellaCount = Math.ceil(peopleCount / 2);
    let chairCounts = Math.ceil(peopleCount * 0.75);
    let totalUmbrellaCost = umbrellaCount * umbrellaPrice;
    let totalchairsCost = chairPrice * chairCounts;

    let finalCost = totalEntryCost + totalUmbrellaCost + totalchairsCost;

    console.log(`${finalCost.toFixed(2)} lv.`);

}

poolDay(["50",
    "6",
    "8",
    "4"])

