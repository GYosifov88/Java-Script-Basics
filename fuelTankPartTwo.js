function fuelTankPartTwo(input){
    let fuelType = input[0]
    let fuelQuantity = Number(input[1])
    let clubCardOwnership = input[2]
    let fuelPrice = 0

    if (fuelType === "Gas"){
        if (clubCardOwnership === "Yes"){
            fuelPrice = fuelQuantity * (0.93 - 0.08)
        }
        else{
            fuelPrice = fuelQuantity * 0.93
        }
    }
    else if (fuelType === "Gasoline"){
        if (clubCardOwnership === "Yes"){
            fuelPrice = fuelQuantity * (2.22 - 0.18)
        }
        else{
            fuelPrice = fuelQuantity * 2.22
        }
    }    
    else if (fuelType === "Diesel"){
        if (clubCardOwnership === "Yes"){
            fuelPrice = fuelQuantity * (2.33 - 0.12)
        }
        else{
            fuelPrice = fuelQuantity * 2.33
        }
    }
    
    if ((fuelQuantity >= 20) && (fuelQuantity <= 25)){
        fuelPrice = fuelPrice - (fuelPrice * 0.08)
    }
    else if(fuelQuantity > 25){
        fuelPrice = fuelPrice - (fuelPrice * 0.1)
    }

    console.log(`${fuelPrice.toFixed(2)} lv.`)
}

fuelTankPartTwo(["Diesel", "19", "No"])