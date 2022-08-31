function bikeRace(input){
    let juniorBikerCount = Number(input[0])
    let seniorBikerCount = Number(input[1])
    let trace = input[2]
    let juniorPrice = 0
    let seniorPrice = 0
    let totalPrice = 0
    
    if (trace === 'trail'){
        juniorPrice = juniorBikerCount * 5.50
        seniorPrice = seniorBikerCount * 7
        totalPrice = juniorPrice + seniorPrice
    }else if(trace === 'downhill'){
        juniorPrice = juniorBikerCount * 12.25
        seniorPrice = seniorBikerCount * 13.75
        totalPrice = juniorPrice + seniorPrice
    }else if(trace === 'road'){
        juniorPrice = juniorBikerCount * 20
        seniorPrice = seniorBikerCount * 21.50
        totalPrice = juniorPrice + seniorPrice
    }else if(trace === 'cross-country'){
        juniorPrice = juniorBikerCount * 8
        seniorPrice = seniorBikerCount * 9.50
        totalPrice = juniorPrice + seniorPrice
        if ((juniorBikerCount + seniorBikerCount) >= 50){
            totalPrice -= totalPrice*0.25
        }
    }

    totalPrice -= totalPrice * 0.05

    console.log(totalPrice.toFixed(2))
}

bikeRace(['30', '25', 'cross-country'])