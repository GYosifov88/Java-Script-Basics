function celsiusToFahrenheit(input){
    let celsius = Number(input[0])
    let fahrenheits = (celsius * 1.8 + 32).toFixed(2)
    console.log(fahrenheits)
}

celsiusToFahrenheit(["-5.5"])