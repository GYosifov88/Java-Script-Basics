function minNumber(input) {
    let index = 0
    let minNum = Number.MAX_SAFE_INTEGER
    let command = input[index]

    while (command !== "Stop") {
        let currentNum = Number(command)
        if (currentNum < minNum) {
            minNum = currentNum
        }
        index++
        command = input[index]
    }
    console.log(minNum)
}

minNumber(["100",
"99",
"80",
"70",
"Stop"])
