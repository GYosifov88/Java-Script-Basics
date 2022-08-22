function supplies(input) {
    let pensilPackets = Number(input[0])
    let markersPackets = Number(input[1])
    let cleaningLiquid = Number(input[2])
    let discountPercent = Number(input[3])
    let total = (pensilPackets * 5.80) + (markersPackets * 7.20) + (cleaningLiquid * 1.20)
    let finalPrice = total - (total * discountPercent / 100)
    console.log(finalPrice)
}

supplies(["2 ",
"3 ",
"4 ",
"25 "]
)