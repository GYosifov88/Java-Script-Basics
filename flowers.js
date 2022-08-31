function flowerShop(input){
    let chrisantemasCount = Number(input[0])
    let rosesCount = Number(input[1])
    let tulipsCount = Number(input[2])
    let season = input[3]
    let ifHoliday = input[4]
    let chrisantemasPrice = 0
    let rosesPrice = 0
    let tulipsPrice = 0
    let totalAmount = 0

    if (season === 'Spring' || season === 'Summer'){
        chrisantemasPrice = chrisantemasCount * 2
        rosesPrice = rosesCount * 4.10
        tulipsPrice = tulipsCount * 2.50
        totalAmount = chrisantemasPrice + rosesPrice + tulipsPrice
    }else if(season === 'Winter' || season === 'Autumn'){
        chrisantemasPrice = chrisantemasCount * 3.75
        rosesPrice = rosesCount * 4.50
        tulipsPrice = tulipsCount * 4.15
        totalAmount = chrisantemasPrice + rosesPrice + tulipsPrice
    }

    if (ifHoliday === 'Y'){
        totalAmount += totalAmount*0.15
    }

    if(season === 'Spring' && tulipsCount > 7){
        totalAmount -= totalAmount * 0.05
    }

    if(season === 'Winter' && rosesCount >= 10){
        totalAmount -= totalAmount * 0.1
    }

    if ((chrisantemasCount + rosesCount + tulipsCount) > 20){
        totalAmount -= totalAmount * 0.2

    }

    let finalAmount = totalAmount + 2
    console.log(finalAmount.toFixed(2))
}

flowerShop(['2', '4', '8', 'Spring', 'Y'])