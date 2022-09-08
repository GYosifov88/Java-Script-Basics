function sumOfTwoNumbers(input) {
    let start = Number(input[0])
    let end = Number(input[1])
    let magicNum = Number(input[2])
    let counter = 0
    let magicNumFound = false

    for (let i = start; i <= end; i++) {
        if (magicNumFound === true) {
            break
        }
        for (let k = start; k <= end; k++) {
            counter++
            if (i + k === magicNum) {
                console.log(`Combination N:${counter} (${i} + ${k} = ${magicNum})`)
                magicNumFound = true
                break
            }

        }
    }
    if (!magicNumFound) {
        console.log(`${counter} combinations - neither equals ${magicNum}`)
    }
}

sumOfTwoNumbers(["88",
    "888",
    "2000"])















