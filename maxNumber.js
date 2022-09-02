function maxNumber(input) {
    let index = 0
    let maxNum = Number.MIN_SAFE_INTEGER
    let command = input[index]

    while (command !== "Stop") {
        let currentNum = Number(command)
        if (currentNum > maxNum) {
            maxNum = currentNum
        }
        index++
        command = input[index]
    }
    console.log(maxNum)
}

maxNumber(["100",
    "99",
    "80",
    "170",
    "Stop"])
