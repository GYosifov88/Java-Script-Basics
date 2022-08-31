function rentalCar(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let carType;
    let carClass;
    let carPrice = 0;

    if (budget <= 100) {
        carClass = "Economy class"
        if (season === 'Summer') {
            carType = 'Cabrio'
            carPrice = budget * 0.35
        }else{
            carType = 'Jeep'
            carPrice = budget * 0.65
        }
    }else if(budget > 100 && budget <=500){
        carClass = 'Compact class'
        if (season === 'Summer') {
            carType = 'Cabrio'
            carPrice = budget * 0.45
        }else{
            carType = 'Jeep'
            carPrice = budget * 0.80
        }
    }else{
        carClass = 'Luxury class'
        carType = 'Jeep'
        carPrice = budget * 0.90
    }

    console.log(`${carClass}`);
    console.log(`${carType} - ${carPrice.toFixed(2)}`);
}

rentalCar(['1010', 'Summer'])