function shopping(input) {
    let budget = Number(input[0])
    let numberOfVideoCards = Number(input[1])
    let numberOfProcessors = Number(input[2])
    let numberOfRAMmemory = Number(input[3])

    let totalForVideoCards = numberOfVideoCards * 250
    let processorPrice = totalForVideoCards * 0.35
    let RamPrice = totalForVideoCards * 0.1
    let totalForProcessors = numberOfProcessors * processorPrice
    let totalForRAM = numberOfRAMmemory * RamPrice
    let totalAmount = totalForProcessors + totalForRAM + totalForVideoCards

    if (numberOfVideoCards > numberOfProcessors) {
        totalAmount -= totalAmount * 0.15
    }

    if (budget >= totalAmount) {
        console.log(`You have ${(budget - totalAmount).toFixed(2)} leva left!`)
    }
    else {
        console.log(`Not enough money! You need ${(Math.abs(budget - totalAmount)).toFixed(2)} leva more!`)
    }

}

shopping(["920.45",
    "3",
    "1",
    "1"])

