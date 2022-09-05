function coins(input){
    let change = Number(input[0])
    let counter = 0
    change = change * 100
    counter += Math.floor(change / 200)
    change %= 200
    counter += Math.floor(change / 100)
    change %= 100
    counter += Math.floor(change / 50)
    change %= 50
    counter += Math.floor(change / 20)
    change %= 20
    counter += Math.floor(change / 10)
    change %= 10
    counter += Math.floor(change / 5)
    change %= 5
    counter += Math.floor(change / 2)
    change %= 2
    counter += Math.floor(change / 1)
    change %= 1
    
    console.log(counter)
}

coins(["2.73"])