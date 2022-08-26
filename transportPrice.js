function transportPrice(input){
    let kilometers = Number(input[0])
    let timeOfTheDay = input[1]
    let taxiDayTarifPerKm = 0.79
    let taxiStartingPrice = 0.7
    let taxiNightTarifPerKm = 0.90
    let busTarifPerKm = 0.09
    let trainTarifPerKm = 0.06

    let taxiPrice = 0
    let busPrice = 0
    let trainPrice = 0

    if (kilometers < 20){
        if (timeOfTheDay === "day"){
            taxiPrice = taxiStartingPrice + (kilometers * taxiDayTarifPerKm) 
        }
        else {
            taxiPrice = taxiStartingPrice + (kilometers * taxiNightTarifPerKm)
        }
        console.log(`${taxiPrice.toFixed(2)}`)
    }
    else if (kilometers >= 100){
        trainPrice = kilometers * trainTarifPerKm
        console.log(`${trainPrice.toFixed(2)}`)
    }
    else{
        busPrice = kilometers * busTarifPerKm
        console.log(`${busPrice.toFixed(2)}`)
        }
        
}

transportPrice(["25", "day"])