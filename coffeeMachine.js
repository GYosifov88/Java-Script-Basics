function coffeeMachine(input) {
    let drinkType = input[0];
    let sugar = input[1];
    let drinksCount = Number(input[2]);
    let cost = 0

    if (drinkType === 'Espresso') {
        if (sugar === 'Without') {
            cost = (drinksCount * 0.90) - ((drinksCount * 0.9) * 0.35);
        } else if (sugar === "Normal") {
            cost = (drinksCount * 1);
        } else if (sugar === 'Extra') {
            cost = drinksCount * 1.20;
        }
    } else if (drinkType === 'Cappuccino') {
        if (sugar === 'Without') {
            cost = (drinksCount * 1) - ((drinksCount * 1) * 0.35);
        } else if (sugar === "Normal") {
            cost = (drinksCount * 1.20);
        } else if (sugar === 'Extra') {
            cost = drinksCount * 1.60;
        }
    } else if (drinkType === 'Tea') {
        if (sugar === 'Without') {
            cost = (drinksCount * 0.50) - ((drinksCount * 0.50) * 0.35);
        } else if (sugar === "Normal") {
            cost = (drinksCount * 0.60);
        } else if (sugar === 'Extra') {
            cost = drinksCount * 0.70;
        }
    }

    if (drinkType === 'Espresso' && drinksCount >= 5) {
        cost -= cost * 0.25;
    }

    if (cost > 15) {
        cost -= cost * 0.2;
    }

    console.log(`You bought ${drinksCount} cups of ${drinkType} for ${cost.toFixed(2)} lv.`);
}

coffeeMachine(["Tea",
    "Extra",
    "3"])


