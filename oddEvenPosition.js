function oddEvenPosition(input){
    let index = 0
    let digitCount = Number(input[index])
    index++
    let oddSum = 0
    let oddMin = 10000000
    let oddMax = -10000000
    let evenSum = 0
    let evenMin = 10000000
    let evenMax = -10000000

    for(let i = 1; i <= digitCount; i++){
        let currentNum = Number(input[index])
        index++
        if (i % 2 !== 0){
            oddSum += currentNum
            if (currentNum < oddMin){
                oddMin = currentNum
            }
            if(currentNum > oddMax){
                oddMax = currentNum
            }
        }else{
            evenSum += currentNum
            if (currentNum < evenMin){
                evenMin = currentNum
            }
            if(currentNum > evenMax){
                evenMax = currentNum
            }
        }

    }

    if (oddMin === 10000000){
        oddMin = 'No'
    }else{
        oddMin = oddMin.toFixed(2)
    }
    if (oddMax === -10000000){
        oddMax = 'No'
    }else{
        oddMax = oddMax.toFixed(2)
    }
    if (evenMin === 10000000){
        evenMin = 'No'
    }else{
        evenMin = evenMin.toFixed(2)
    }
    if (evenMax === -10000000){
        evenMax = 'No'
    }else{
        evenMax = evenMax.toFixed(2)
    }

    console.log(`OddSum=${oddSum.toFixed(2)},`)
    console.log(`OddMin=${oddMin},`)
    console.log(`OddMax=${oddMax},`)
    console.log(`EvenSum=${evenSum.toFixed(2)},`)
    console.log(`EvenMin=${evenMin},`)
    console.log(`EvenMax=${evenMax}`)

}
oddEvenPosition(["6",
    "2",
    "3",
    "5",
    "4",
    "2",
    "1"
    ])