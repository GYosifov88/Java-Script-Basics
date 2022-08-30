function skiHoliday(input){
    let numberOfDays = Number(input[0])
    let roomType = input[1]
    let grade = input[2]
    let price = 0
    let numberOfNights = numberOfDays - 1

    if (roomType === 'room for one person'){
        price = numberOfNights *  18
    }else if(roomType === 'apartment'){
        if(numberOfDays < 10){
            price = (numberOfNights * 25) - ((numberOfNights * 25)*0.3)
        }else if(numberOfDays >=10 && numberOfDays <= 15){
            price = (numberOfNights * 25) - ((numberOfNights * 25)*0.35)
        }else{
            price = (numberOfNights * 25) - ((numberOfNights * 25)*0.5)
        }
    }else if (roomType === 'president apartment'){
        if(numberOfDays < 10){
            price = (numberOfNights * 35) - ((numberOfNights * 35)*0.1)
        }else if(numberOfDays >=10 && numberOfDays <= 15){
            price = (numberOfNights * 35) - ((numberOfNights * 35)*0.15)
        }else{
            price = (numberOfNights * 35) - ((numberOfNights * 35)*0.2)
        }
    }

    if (grade === 'positive'){
        price = price + (price*0.25)
    }else if(grade === 'negative'){
        price = price - (price*0.10)
    }

    console.log(price.toFixed(2))
}

skiHoliday(["2",
"apartment",
"positive"])



