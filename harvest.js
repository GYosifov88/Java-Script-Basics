function harvest(input){
    let grapesSquareMeters = Number(input[0])
    let grapesPerSqMeter = Number(input[1])
    let neededLitresOfWine = Number(input[2])
    let numberOfWorkers = Number(input[3])

    let totalGrapes = grapesPerSqMeter * grapesSquareMeters
    let wineProduced = (totalGrapes * 0.4) / 2.5

    if (wineProduced >= neededLitresOfWine){
        console.log(`Good harvest this year! Total wine: ${wineProduced} liters.`)
        let wineLeft = Math.ceil(wineProduced - neededLitresOfWine)
        let winePerWorker = Math.ceil(wineLeft / numberOfWorkers)
        console.log(`${wineLeft} liters left -> ${winePerWorker} liters per person.`)
    }
    else{
        let differenceNeeded = Math.floor(neededLitresOfWine - wineProduced)
        console.log(`It will be a tough winter! More ${differenceNeeded} liters wine needed.`)
    }

}

harvest(["650", "2", "175", "3"])