function godzillaVsKongMovie(input){
    let movieBudget = Number(input[0])
    let numberOfStatists = Number(input[1])
    let pricePerDress = Number(input[2])

    let decorPrice = movieBudget * 0.1
    let dressesPrice = numberOfStatists * pricePerDress
    if (numberOfStatists > 150){
        dressesPrice -= dressesPrice * 0.1
    }
    let totalCost = decorPrice + dressesPrice

    if (totalCost > movieBudget){
        console.log("Not enough money!")
        console.log(`Wingard needs ${(Math.abs(movieBudget-totalCost)).toFixed(2)} leva more.`)
    }
    else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(movieBudget-totalCost).toFixed(2)} leva left.`)
    }
}

godzillaVsKongMovie(["9587.88",
"222",
"55.68"])


