function vacation(input){
    let index = 0
    let neededBudget = Number(input[index])
    index++
    let currentMoney = Number(input[index])
    index++
    let command = input[index]
    index++
    let amount = Number(input[index])
    index++
    let daysCount = 0
    let spendingDays = 0

    while(currentMoney <= neededBudget){
        daysCount++
        if(command === 'spend'){
            spendingDays++
            if (spendingDays === 5){
                console.log("You can't save the money.")
                console.log(`${daysCount}`);
                break;
            }else{
                currentMoney -= amount
                if(currentMoney <= 0){
                    currentMoney = 0
                }
            }  
        }else if(command ==='save'){
            spendingDays = 0
            currentMoney+= amount
            if(currentMoney >= neededBudget){
                console.log(`You saved the money for ${daysCount} days.`);
                break;
            }
        }
        
        command = input[index]
        index++
        amount = Number(input[index])
        index++
    }

}

vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])
