function sumOfNumbers(input){
    let data = input[0]
    let sum = 0

    for(let i = 0; i < data.length; i++){
        sum += Number(data[i])
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["564891"])