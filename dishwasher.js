function dishwasher(input) {
    let index = 0
    let dishwasherliquidBottles = Number(input[index])
    index++
    let mililitres = dishwasherliquidBottles * 750
    let counter = 1
    let dishesCleaned = 0
    let potsCleaned = 0

    let command = input[index]

    while (command !== 'End') {
        let dishesOrPotsCount = Number(command)

        if (counter % 3 === 0) {
            mililitres -= dishesOrPotsCount * 15
            if (mililitres < 0) {
                console.log(`Not enough detergent, ${Math.abs(mililitres)} ml. more necessary!`)
                break
            }
            potsCleaned += dishesOrPotsCount

        } else {
            mililitres -= dishesOrPotsCount * 5
            if (mililitres < 0) {
                console.log(`Not enough detergent, ${Math.abs(mililitres)} ml. more necessary!`)
                break
            }
            dishesCleaned += dishesOrPotsCount
        }
        counter++
        index++
        command = input[index]
    }
    if (mililitres >= 0) {
        console.log("Detergent was enough!")
        console.log(`${dishesCleaned} dishes and ${potsCleaned} pots were washed.`)
        console.log(`Leftover detergent ${mililitres} ml.`)
    }
}

dishwasher(["1",
    "10",
    "15",
    "10",
    "12",
    "13",
    "30"
])