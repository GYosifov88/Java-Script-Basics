function pipesInPool(input) {
    let poolCapacity = Number(input[0])
    let firstPipe = Number(input[1])
    let secondPipe = Number(input[2])
    let hours = Number(input[3])

    let firstPipeContibution = firstPipe * hours
    let secondPipeContibution = secondPipe * hours
    let totalFilled = firstPipeContibution + secondPipeContibution
    let percentageFilled = totalFilled / poolCapacity * 100
    let percentageFirstPipe = firstPipeContibution / totalFilled * 100
    let percentageSecondPipe = secondPipeContibution / totalFilled * 100

    if (totalFilled > poolCapacity) {
        console.log(`For ${hours} hours the pool overflows with ${(totalFilled - poolCapacity).toFixed(2)} liters.`)
    }
    else {
        console.log(`The pool is ${percentageFilled}% full. Pipe 1: ${percentageFirstPipe.toFixed(2)}%. Pipe 2: ${percentageSecondPipe.toFixed(2)}%.`)
    }

}

pipesInPool(["100", "100", "100", "2.5"])