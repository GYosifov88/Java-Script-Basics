function fuelTank(input) {
    let fuelType = input[0]
    let presentLitresOfFuel = Number(input[1])

    if ((fuelType !== "Diesel") && (fuelType !== "Gas") && (fuelType !== "Gasoline")) {
        console.log("Invalid fuel!")
    }
    else {
        if (presentLitresOfFuel >= 25) {
            console.log(`You have enough ${fuelType.toLowerCase()}.`)
        }
        else {
            console.log(`Fill your tank with ${fuelType.toLowerCase()}!`)
        }
    }

}

fuelTank(["Gasoline", "40"])