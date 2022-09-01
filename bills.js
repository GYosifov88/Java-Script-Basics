function bills(input) {
    let index = 0
    let monthsCount = Number(input[index])
    index++
    let waterBills = monthsCount * 20
    let internetBills = monthsCount * 15
    let electricityBills = 0
    let otherExpenses = 0
    let totalBillsAndExpenses = 0

    for (let i = 0; i < monthsCount; i++) {
        let currentElectricityBill = Number(input[index])
        index++
        electricityBills += currentElectricityBill
        otherExpenses += (currentElectricityBill + 20 + 15) + ((currentElectricityBill + 20 + 15) * 0.2)
    }

    totalBillsAndExpenses = waterBills + internetBills + electricityBills + otherExpenses
    let average = totalBillsAndExpenses / monthsCount

    console.log(`Electricity: ${electricityBills.toFixed(2)} lv`)
    console.log(`Water: ${waterBills.toFixed(2)} lv`)
    console.log(`Internet: ${internetBills.toFixed(2)} lv`)
    console.log(`Other: ${otherExpenses.toFixed(2)} lv`)
    console.log(`Average: ${average.toFixed(2)} lv`)

}

bills(["5",
    "68.63",
    "89.25",
    "132.53",
    "93.53",
    "63.22"
])