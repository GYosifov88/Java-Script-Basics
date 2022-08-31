function cleverLily(input) {
    let lilyAge = Number(input[0]);
    let laundryPrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let amount = 0;
    let toys = 0;
    let money = 10

    for (let i = 1; i <= lilyAge; i++) {
        if (i % 2 === 0) {
            amount += money - 1
            money += 10
        } else {
            toys += 1
        }
    }
    let toysAmount = toys * toyPrice
    let gatheredAmount = toysAmount + amount
    let difference = Math.abs(gatheredAmount - laundryPrice)
    if (gatheredAmount >= laundryPrice) {
        console.log(`Yes! ${difference.toFixed(2)}`);
    } else {
        console.log(`No! ${difference.toFixed(2)}`);
    }

}

cleverLily(["21",
    "1570.98",
    "3"])

