function weatherForecast(input){
    let degrees = input[0]
    let message

    if ((26 <= degrees) && (degrees<= 35)){
        message = 'Hot'
    }
    else if ((20.1 <= degrees) && (degrees<= 25.9)){
        message = 'Warm'
    }
    else if ((15 <= degrees) && (degrees<= 20)){
        message = 'Mild'
    }
    else if ((12 <= degrees) && (degrees<= 14.9)){
        message = 'Cool'
    }
    else if ((5 <= degrees) && (degrees<= 11.9)){
        message = 'Cold'
    }
    else{
        message = 'unknown'
    }
    console.log(message)
}

weatherForecast([0])