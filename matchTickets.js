function matchTickets(input){
    let budget = Number(input[0])
    let ticketCategory = input[1]
    let numberOfPeople = Number(input[2])
    let transportPrice = 0
    let ticketsPrice = 0

    if(numberOfPeople>=1 && numberOfPeople<=4){
        transportPrice = budget * 0.75
    }else if(numberOfPeople>=5 && numberOfPeople<=9){
        transportPrice = budget * 0.60
    }else if(numberOfPeople>=10 && numberOfPeople<=24){
        transportPrice = budget * 0.50
    }else if(numberOfPeople>=25 && numberOfPeople<=49){
        transportPrice = budget * 0.40
    }else{
        transportPrice = budget * 0.25
    }

    let leftBudget = budget - transportPrice
    

    if (ticketCategory === 'VIP'){
        ticketsPrice = numberOfPeople * 499.99
    }else{
        ticketsPrice = numberOfPeople * 249.99
    }
    let difference = Math.abs(budget - transportPrice - ticketsPrice)
    if(ticketsPrice <= leftBudget){
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`)
    }
}

matchTickets(['30000', 'VIP', '49'])