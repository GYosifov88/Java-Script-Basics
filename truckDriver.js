function truckDriver(input){
    let season = input[0]
    let monthlyKilometers = Number(input[1])
    let totalIncome = 0
    let totalAfterTaxes = 0
    if(season === 'Spring' || season === 'Autumn'){
        if(monthlyKilometers <= 5000){
            totalIncome = (monthlyKilometers * 0.75) * 4
        }else if(monthlyKilometers > 5000 && monthlyKilometers <= 10000){
            totalIncome = (monthlyKilometers * 0.95) * 4
        }else if(monthlyKilometers > 10000 && monthlyKilometers <= 20000)
            totalIncome = (monthlyKilometers * 1.45) * 4
    }else if(season === 'Summer'){
        if(monthlyKilometers <= 5000){
            totalIncome = (monthlyKilometers * 0.90) * 4
        }else if(monthlyKilometers > 5000 && monthlyKilometers <= 10000){
            totalIncome = (monthlyKilometers * 1.10) * 4
        }else if(monthlyKilometers > 10000 && monthlyKilometers <= 20000)
            totalIncome = (monthlyKilometers * 1.45) * 4
    }else if(season === 'Winter'){
        if(monthlyKilometers <= 5000){
            totalIncome = (monthlyKilometers * 1.05) * 4
        }else if(monthlyKilometers > 5000 && monthlyKilometers <= 10000){
            totalIncome = (monthlyKilometers * 1.25) * 4
        }else if(monthlyKilometers > 10000 && monthlyKilometers <= 20000)
            totalIncome = (monthlyKilometers * 1.45) * 4
    }

    totalAfterTaxes = totalIncome - (totalIncome * 0.1)
    console.log(totalAfterTaxes.toFixed(2));
}

truckDriver(['Summer', '3455'])