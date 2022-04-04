function expenses(input){
    let dogFood = input[0]
    let catFood = input[1]
    let catFoodexpense = catFood * 4
    let dogFoodexpense = dogFood * 2.50
    let totalExpense = catFoodexpense + dogFoodexpense
    console.log(totalExpense + " lv.")
}

expenses(['13', '9'])