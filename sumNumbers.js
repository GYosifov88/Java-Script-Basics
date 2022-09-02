function sumNumbers(input){
    let target = Number(input[0])
    let index = 1
    let sum = 0

    while(sum < target){
        let currentNum = Number(input[index])
        sum += currentNum
        index++
    }
    console.log(sum)
}

sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

