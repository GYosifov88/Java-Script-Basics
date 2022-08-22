function depositCalc(input) {
    let amount = Number(input[0])
    let period = Number(input[1])
    let percent = Number(input[2])
    let finalAmount = amount + period *((amount * percent/100)/12)
    console.log(finalAmount)
}

depositCalc(["2350",
"6 ",
"7 "]
)