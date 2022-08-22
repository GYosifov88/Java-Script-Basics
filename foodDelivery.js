function foodDelivery(input){
    let chickenMenus = Number(input[0])
    let fishMenus = Number(input[1])
    let vegetarianMenus = Number(input[2])
    let foodTotal = chickenMenus * 10.35 + fishMenus * 12.40 + vegetarianMenus * 8.15
    let desertPrice = foodTotal * 0.2
    let finalPrice = foodTotal + desertPrice + 2.50
    console.log(finalPrice)

}

foodDelivery(["2 ",
"4 ",
"3 "]
)