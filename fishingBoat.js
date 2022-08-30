function fishingBoat(input) {
    let budget = Number(input[0])
    let season = input[1]
    let fishermenCount = Number(input[2])
    let boatPrice = 0

    if (season === 'Spring') {
        if (fishermenCount <= 6) {
            boatPrice = 3000 - (3000 * 0.1)
        } else if (fishermenCount > 7 && fishermenCount <= 11) {
            boatPrice = 3000 - (3000 * 0.15)
        } else if (fishermenCount > 12) {
            boatPrice = 3000 - (3000 * 0.25)
        }
    } else if (season === 'Winter') {
        if (fishermenCount <= 6) {
            boatPrice = 2600 - (2600 * 0.1)
        } else if (fishermenCount > 7 && fishermenCount <= 11) {
            boatPrice = 2600 - (2600 * 0.15)
        } else if (fishermenCount > 12) {
            boatPrice = 2600 - (2600 * 0.25)
        }
    } else {
        if (fishermenCount <= 6) {
            boatPrice = 4200 - (4200 * 0.1)
        } else if (fishermenCount > 7 && fishermenCount <= 11) {
            boatPrice = 4200 - (4200 * 0.15)
        } else if (fishermenCount > 12) {
            boatPrice = 4200 - (4200 * 0.25)
        }
    }

    if (fishermenCount % 2 === 0 && season !== 'Autumn') {
        boatPrice = boatPrice - boatPrice * 0.05
    }

    let difference = Math.abs(budget - boatPrice)

    if(budget>= boatPrice){
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`)
    }

}

fishingBoat(["2000",
"Winter",
"13"])


