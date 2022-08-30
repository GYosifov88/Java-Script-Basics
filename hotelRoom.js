function hotelRoom(input){
    let month = input[0]
    let nightsCount = Number(input[1])
    let totalCostStudio = 0
    let totalCostApartment = 0

    if(month === 'May' || month === 'October'){
        if(nightsCount>7 && nightsCount<=14){
            totalCostStudio = (nightsCount * 50) - ((nightsCount * 50 )* 0.05)
            totalCostApartment = nightsCount * 65   
        }else if(nightsCount > 14){
            totalCostStudio = (nightsCount * 50) - ((nightsCount * 50 )* 0.30)
            totalCostApartment = (nightsCount * 65) - ((nightsCount * 65)* 0.1)
        }else{
            totalCostStudio = nightsCount * 50
            totalCostApartment = nightsCount * 65   
        }
    }else if(month === 'June' || month === 'September'){      
        if(nightsCount > 14){
            totalCostStudio = (nightsCount * 75.20) - ((nightsCount * 75.20)* 0.20)
            totalCostApartment = (nightsCount * 68.70) - ((nightsCount * 68.70)* 0.1)
        }else{
            totalCostStudio = nightsCount * 75.20
            totalCostApartment = nightsCount * 68.70   
        }
    }else if(month === 'July' || month === 'August'){
        if(nightsCount > 14){
            totalCostStudio = nightsCount * 76
            totalCostApartment = (nightsCount * 77) - ((nightsCount * 77)* 0.1)
        }else{
            totalCostStudio = nightsCount * 76
            totalCostApartment = nightsCount * 77
        }
    }

    console.log(`Apartment: ${totalCostApartment.toFixed(2)} lv.`)
    console.log(`Studio: ${totalCostStudio.toFixed(2)} lv.`)
}

hotelRoom(["August",
"20"])


