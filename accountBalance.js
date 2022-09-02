function accountBalance(input) {
    let index = 0
    let totalAmount = 0

    let currentInput = input[index]

    while (currentInput !== 'NoMoreMoney') {
        let currNum = Number(currentInput)
        if (currNum < 0) {
            console.log("Invalid operation!")
            break;
        }

        totalAmount += currNum
        console.log(`Increase: ${currNum.toFixed(2)}`)
        index++
        currentInput = input[index]

    }
    console.log(`Total: ${totalAmount.toFixed(2)}`)
}

accountBalance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"])
