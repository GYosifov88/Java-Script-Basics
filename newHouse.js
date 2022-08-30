function newHouse(input) {
    let flower = input[0]
    let flowerCount = Number(input[1])
    let budget = Number(input[2])
    let totalAmountForFLowers = 0

    if (flower === 'Roses') {
        if (flowerCount > 80) {
            totalAmountForFLowers = (flowerCount * 5) - ((flowerCount * 5) * 0.10)
        } else {
            totalAmountForFLowers = flowerCount * 5
        }
    } else if (flower === 'Dahlias') {
        if (flowerCount > 90) {
            totalAmountForFLowers = (flowerCount * 3.80) - ((flowerCount * 3.80) * 0.15)
        } else {
            totalAmountForFLowers = flowerCount * 3.8
        }
    } else if (flower === 'Tulips') {
        if (flowerCount > 80) {
            totalAmountForFLowers = (flowerCount * 2.80) - ((flowerCount * 2.80) * 0.15)
        } else {
            totalAmountForFLowers = flowerCount * 2.80
        }
    } else if (flower === 'Narcissus') {
        if (flowerCount < 120) {
            totalAmountForFLowers = (flowerCount * 3) + ((flowerCount * 3) * 0.15)
        } else {
            totalAmountForFLowers = flowerCount * 3
        }
    } else if (flower === 'Gladiolus') {
        if (flowerCount < 80) {
            totalAmountForFLowers = (flowerCount * 2.50) + ((flowerCount * 2.50) * 0.20)
        } else {
            totalAmountForFLowers = flowerCount * 2.50
        }
    }

    let difference = Math.abs(budget - totalAmountForFLowers)
    
    if (budget >= totalAmountForFLowers) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flower} and ${difference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`);
    }
}

newHouse(["Narcissus",
"119",
"360"])





