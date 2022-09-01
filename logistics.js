function logistics(input){
    let index = 0
    let baggageCount = Number(input[index])
    index++

    let busTons = 0
    let truckTons = 0
    let trainTons = 0
    let overAllTons = 0
    let totalAmount = 0

    for (let i = 0; i < baggageCount; i++){
        let currentTons = Number(input[index])
        index++
        overAllTons += currentTons
        if(currentTons <= 3){
            busTons += currentTons
            totalAmount += currentTons * 200
        }else if(currentTons >= 4 && currentTons<=11){
            truckTons += currentTons
            totalAmount += currentTons * 175
        }else{
            trainTons += currentTons
            totalAmount += currentTons * 120
        }
    }

    let averagePrice = totalAmount / overAllTons
    let busPercent = busTons / overAllTons * 100
    let truckPercent = truckTons / overAllTons * 100
    let trainPercent = trainTons / overAllTons * 100

    console.log(averagePrice.toFixed(2))
    console.log(`${busPercent.toFixed(2)}%`)
    console.log(`${truckPercent.toFixed(2)}%`)
    console.log(`${trainPercent.toFixed(2)}%`)
}

logistics(["4", "1", "5", "16", "3"])