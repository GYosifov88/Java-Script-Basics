function touristShop(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let cost = 0;
    let productsCount = 0;
    let notEnoughBudget = false
    let command = input[index];
    index++;

    while (command !== 'Stop') {
        let price = Number(input[index]);
        productsCount++;

        if (productsCount % 3 === 0) {
            price /= 2
        }

        if (price > budget) {
            console.log("You don't have enough money!");
            console.log(`You need ${(price - budget).toFixed(2)} leva!`);
            notEnoughBudget = true;
            break;
        }

        budget -= price
        cost += price;

        index++;
        command = input[index];
        index++;
    }

    if (!notEnoughBudget) {
        console.log(`You bought ${productsCount} products for ${cost.toFixed(2)} leva.`);
    }
}

touristShop(["54",
    "Thermal underwear",
    "24",
    "Sunscreen",
    "45"])

