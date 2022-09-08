function travelling(input) {
    let accumulatedAmount = 0
    let amountGathered = false
    let index = 0
    let command = input[index]
    index++

    while (command !== 'End') {
        let minBudget = Number(input[index])
        index++
        while (accumulatedAmount < minBudget) {
            let amountSaved = Number(input[index])
            index++
            accumulatedAmount += amountSaved
            if (accumulatedAmount >= minBudget) {
                amountGathered = true
                console.log(`Going to ${command}!`)
                break
            }
        }
        accumulatedAmount = 0
        command = input[index]
        index++
    }

}

travelling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"])




