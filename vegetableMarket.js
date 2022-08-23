function vegetableMarket(input){
    let pricePerKiloVegetables = input[0]
    let pricePerKiloFruits = input[1]
    let totalKilosVegetables = input[2]
    let totalKilosFruits = input[3]
    let totalBGNPrice = ((pricePerKiloFruits * totalKilosFruits) + (pricePerKiloVegetables * totalKilosVegetables))
    let totalEURPrice = (totalBGNPrice / 1.94).toFixed(2)
    console.log(totalEURPrice)
}

vegetableMarket([0.194, 19.4, 10, 10])