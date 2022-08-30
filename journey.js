function journey(input){
    let budget = Number(input[0])
    let season = input[1]
    let destination;
    let facility;
    let cost = 0
    if(budget <= 100){
        destination = 'Bulgaria'
        if(season === 'summer'){
            facility = 'Camp'
            cost = budget * 0.3
        }else{
            facility = 'Hotel'
            cost = budget * 0.7
        }
    }else if(budget > 100 && budget <= 1000){
        destination = 'Balkans'
        if(season === 'summer'){
            facility = 'Camp'
            cost = budget * 0.4
        }else{
            facility = 'Hotel'
            cost = budget * 0.8
        }
    }else{
        destination = 'Europe'
        facility = 'Hotel'
        cost = budget * 0.9
        
    }

    console.log(`Somewhere in ${destination}`)
    console.log(`${facility} - ${cost.toFixed(2)}`)
}

journey(["1500", "summer"])