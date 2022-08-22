function repainting(input) {
    let coverNailon = Number(input[0])
    let litreOfPaint = Number(input[1])
    let mixingLiquid = Number(input[2])
    let hoursOfPainting = Number(input[3])
    let totalOfProducts = ((coverNailon + 2) * 1.50) + ((litreOfPaint + 0.1 * litreOfPaint) * 14.50) + (mixingLiquid * 5) + 0.4
    let pricePerHour = totalOfProducts * 0.3
    let finalPrice = totalOfProducts + (hoursOfPainting * pricePerHour)
    console.log(finalPrice)
}

repainting(["10 ",
"11 ",
"4 ",
"8 "]
)