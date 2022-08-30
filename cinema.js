function cinemaTickets(input){
    let projectionType = input[0]
    let rows = Number(input[1])
    let columns = Number(input[2])
    let income = 0
    let seats = rows * columns

    if(projectionType === 'Premiere'){
        income = seats * 12
    }else if (projectionType === 'Normal'){
        income = seats * 7.50
    }else if (projectionType === 'Discount'){
        income = seats * 5
    }

    console.log(`${income.toFixed(2)} leva`);

}

cinemaTickets(["Premiere", "10", "12"])
