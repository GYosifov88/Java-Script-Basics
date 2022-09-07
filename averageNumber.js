function averageNumber(input){
    let number = Number(input[0])
    let index = 0
    let total = 0   
    for (let i = 1; i <= number; i++){
        let currentNum = Number(input[i])
        total += currentNum
    }
    let average = total / number
    console.log(`${average.toFixed(2)}`)
}

averageNumber(["3",
    "82",
    "43",
    "22"
    ])