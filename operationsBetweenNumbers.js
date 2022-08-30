function operationBetweenNumbers(input){
    let firstNum = Number(input[0])
    let secondNum = Number(input[1])
    let sign = input[2]
    let result = 0


    if(sign === '+'){
        result = firstNum + secondNum
        if (result % 2 === 0){
            console.log(`${firstNum} ${sign} ${secondNum} = ${result} - even`)
        }else{
            console.log(`${firstNum} ${sign} ${secondNum} = ${result} - odd`)
        }
    }else if(sign === "-"){
        result = firstNum - secondNum
        if (result % 2 === 0){
            console.log(`${firstNum} ${sign} ${secondNum} = ${result} - even`)
        }else{
            console.log(`${firstNum} ${sign} ${secondNum} = ${result} - odd`)
        }
    }else if(sign === "*"){
        result = firstNum * secondNum
        if (result % 2 === 0){
            console.log(`${firstNum} ${sign} ${secondNum} = ${result} - even`)
        }else{
            console.log(`${firstNum} ${sign} ${secondNum} = ${result} - odd`)
        }
    }else if (sign === '/'){
        if(secondNum === 0){
            console.log(`Cannot divide ${firstNum} by zero`)
        }
        else{
            result = firstNum / secondNum
            console.log(`${firstNum} / ${secondNum} = ${result.toFixed(2)}`)
        }
    }else if (sign === '%'){
        if(secondNum === 0){
            console.log(`Cannot divide ${firstNum} by zero`)
        }else{
        result = firstNum % secondNum
        console.log(`${firstNum} % ${secondNum} = ${result}`);
        }
    }
}

operationBetweenNumbers(["10",
"0",
"%"])






