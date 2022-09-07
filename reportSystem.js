function reportSystem(input) {
    let index = 0
    let counter = 0
    let amountTarget = Number(input[index])
    index++
    let command = input[index]
    let ammountGathered = 0
    let cashGathered = 0
    let cashCounter = 0
    let cardGathered = 0
    let cardCounter = 0
    let isAmountGathered = false

    while (command !== 'End') {
        let price = Number(command)
        counter++
        if (counter % 2 !== 0 && price <= 100) {
            ammountGathered += price
            cashGathered += price
            cashCounter++
            console.log("Product sold!")
            if (ammountGathered >= amountTarget) {
                isAmountGathered = true
                break
            }
        } else if (counter % 2 === 0 && price >= 10) {
            ammountGathered += price
            cardGathered += price
            cardCounter++
            console.log("Product sold!")
            if (ammountGathered >= amountTarget) {
                isAmountGathered = true
                break
            }
        } else {
            console.log("Error in transaction!")
        }

        
        index++
        command = input[index]
    }

    let averageCash = cashGathered / cashCounter
    let averageCard = cardGathered / cardCounter

    if (isAmountGathered === true) {
        console.log(`Average CS: ${averageCash.toFixed(2)}`)
        console.log(`Average CC: ${averageCard.toFixed(2)}`)
    } else {
        console.log("Failed to collect required money for charity.")
    }

}

reportSystem(["600",
    "86",
    "150",
    "98",
    "227",
    "End"
])