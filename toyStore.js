function toyStore(input){
    let excursionPrice = Number(input[0])
    let numberOfPuzzles = Number(input[1])
    let numberOfDols = Number(input[2])
    let numberOfBears = Number(input[3])
    let numberOfMinions = Number(input[4])
    let numberOfTrucks = Number(input[5])
    let totalNumberOfToys = numberOfBears + numberOfDols + numberOfMinions + numberOfPuzzles + numberOfTrucks
    let income = 0.0

    let totalPuzzles = numberOfPuzzles * 2.6
    let totalDols = numberOfDols * 3
    let totalBears = numberOfBears * 4.10
    let totalMinions = numberOfMinions * 8.20
    let totalTrucks = numberOfTrucks * 2
    let totalPrice = totalPuzzles + totalDols + totalBears + totalMinions + totalTrucks

    if (totalNumberOfToys >= 50){
        totalPrice -= totalPrice * 0.25
    }

    let rent = totalPrice * 0.1

    income = totalPrice - rent

    if (income >= excursionPrice){
        console.log(`Yes! ${(income - excursionPrice).toFixed(2)} lv left.`)
    }
    else{
        console.log(`Not enough money! ${(Math.abs(income-excursionPrice)).toFixed(2)} lv needed.`)
    }

}

toyStore(["320",
"8",
"2",
"5",
"5",
"1"])

