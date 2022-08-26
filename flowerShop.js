function floweShop(input){
    let numberOfMagnolia = Number(input[0])
    let numberOfZiumbuls = Number(input[1])
    let numberOfRoses = Number(input[2])
    let numberOfCactuses = Number(input[3])
    let presentPrice = Number(input[4])

    let magnoliasCost = numberOfMagnolia * 3.25
    let ziumbulsCost = numberOfZiumbuls * 4
    let rosesCost = numberOfRoses * 3.5
    let cactusesCost = numberOfCactuses * 8
    let totalCost = magnoliasCost + ziumbulsCost + rosesCost + cactusesCost
    let incomeAfterTaxes = totalCost - (totalCost * 0.05)

    if  (incomeAfterTaxes >= presentPrice){
        let difference = Math.floor(incomeAfterTaxes - presentPrice)
        console.log(`She is left with ${difference} leva.`)
    }
    else {
        let difference = Math.ceil(presentPrice-incomeAfterTaxes)
        console.log(`She will have to borrow ${difference} leva.`)
    }

}

floweShop(["15", "7", "5", "10", "100"])