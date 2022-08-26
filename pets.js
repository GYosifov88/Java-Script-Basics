function pets(input) {
    let numberOfDays = Number(input[0])
    let kilosOfLeftFodd = Number(input[1])
    let kilosPerDayForDog = Number(input[2])
    let kilosPerDayForCat = Number(input[3])
    let gramsPerDayForTurtle = Number(input[4])

    let kilosPerDayForTurtle = gramsPerDayForTurtle / 1000

    let totalFoodForPeriod = (numberOfDays * kilosPerDayForDog) + (numberOfDays * kilosPerDayForCat) + (numberOfDays * kilosPerDayForTurtle)

    if (kilosOfLeftFodd >= totalFoodForPeriod) {
        console.log(`${Math.floor(kilosOfLeftFodd - totalFoodForPeriod)} kilos of food left.`)
    }
    else {
        console.log(`${Math.ceil(totalFoodForPeriod - kilosOfLeftFodd)} more kilos of food are needed.`)
    }

}

pets(["5", "10", "2.1", "0.8", "321"])