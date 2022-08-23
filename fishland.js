function fishland(input) {
    let pricePerKiloTrout = Number(input[0])
    let pricePerKiloCaca = Number(input[1])
    let kilosOfPalamud = Number(input[2])
    let kilosOfSafrid = Number(input[3])
    let kilosOfMussles = Number(input[4])
    let pricePerKiloPalamud = pricePerKiloTrout + (pricePerKiloTrout * 0.60)
    let pricePerKiloSafrid = pricePerKiloCaca + (pricePerKiloCaca * 0.8)
    let pricePerKiloMussles = 7.50
    let total = parseFloat((kilosOfPalamud*pricePerKiloPalamud)+ (kilosOfSafrid*pricePerKiloSafrid) + (kilosOfMussles*pricePerKiloMussles))
    let finalTotal = total.toFixed(2)
    console.log(finalTotal)
}

fishland([7.79, 5.35, 9.3, 0, 0])