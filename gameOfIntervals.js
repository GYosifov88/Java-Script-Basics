function gameOfIntervals(input) {
    let index = 0
    let moves = Number(input[index])
    index++

    let totalResult = 0
    let from0To9 = 0
    let from10To19 = 0
    let from20To29 = 0
    let from30To39 = 0
    let from40To50 = 0
    let invalidNumbers = 0

    for (let i = 0; i < moves; i++) {
        let currentNum = Number(input[index])
        index++
        if (currentNum >= 0 && currentNum <= 9) {
            from0To9++
            totalResult += currentNum * 0.2
        } else if (currentNum >= 10 && currentNum <= 19) {
            from10To19++
            totalResult += currentNum * 0.3
        } else if (currentNum >= 20 && currentNum <= 29) {
            from20To29++
            totalResult += currentNum * 0.4
        } else if (currentNum >= 30 && currentNum <= 39) {
            from30To39++
            totalResult += 50
        } else if (currentNum >= 40 && currentNum <= 50) {
            from40To50++
            totalResult += 100
        } else if (currentNum < 0 || currentNum > 50) {
            invalidNumbers++
            totalResult = totalResult / 2
        }
    }
    let from0To9Percent = from0To9 / moves * 100
    let from10To19Percent = from10To19 / moves * 100
    let from20To29Percent = from20To29 / moves * 100
    let from30To39Percent = from30To39 / moves * 100
    let from40To50Percent = from40To50 / moves * 100
    let invalidNumbersPercent = invalidNumbers / moves * 100


    console.log(`${totalResult.toFixed(2)}`)
    console.log(`From 0 to 9: ${from0To9Percent.toFixed(2)}%`)
    console.log(`From 10 to 19: ${from10To19Percent.toFixed(2)}%`)
    console.log(`From 20 to 29: ${from20To29Percent.toFixed(2)}%`)
    console.log(`From 30 to 39: ${from30To39Percent.toFixed(2)}%`)
    console.log(`From 40 to 50: ${from40To50Percent.toFixed(2)}%`)
    console.log(`Invalid numbers: ${invalidNumbersPercent.toFixed(2)}%`)

}

gameOfIntervals(["10",
    "43",
    "57",
    "-12",
    "23",
    "12",
    "0",
    "50",
    "40",
    "30",
    "20"
])