function tradeCommisions(input){
    let city = input[0]
    let quantity = Number(input[1])
    let commision = 0

    switch(city){
        case 'Sofia':
            if(quantity >= 0 && quantity <= 500){
                commision = quantity * 0.05
                console.log(commision.toFixed(2));
            }else if(quantity > 500 && quantity <= 1000){
                commision = quantity * 0.07
                console.log(commision.toFixed(2));
            }else if(quantity > 1000 && quantity <= 10000){
                commision = quantity * 0.08
                console.log(commision.toFixed(2));
            }else if(quantity > 10000){
                commision = quantity * 0.12
                console.log(commision.toFixed(2));
            }else{
                console.log("error");
            }; break;
        case 'Varna':
            if(quantity >= 0 && quantity <= 500){
                commision = quantity * 0.045
                console.log(commision.toFixed(2));
            }else if(quantity > 500 && quantity <= 1000){
                commision = quantity * 0.075
                console.log(commision.toFixed(2));
            }else if(quantity > 1000 && quantity <= 10000){
                commision = quantity * 0.10
                console.log(commision.toFixed(2));
            }else if(quantity > 10000){
                commision = quantity * 0.13
                console.log(commision.toFixed(2));
            }else{
                console.log("error");
            }; break; 
        case 'Plovdiv':
            if(quantity >= 0 && quantity <= 500){
                commision = quantity * 0.055
                console.log(commision.toFixed(2));
            }else if(quantity > 500 && quantity <= 1000){
                commision = quantity * 0.08
                console.log(commision.toFixed(2));
            }else if(quantity > 1000 && quantity <= 10000){
                commision = quantity * 0.12
                console.log(commision.toFixed(2));
            }else if(quantity > 10000){
                commision = quantity * 0.145
                console.log(commision.toFixed(2));
            }else{
                console.log("error");
            }; break; 
        default: console.log('error');
    }
}

tradeCommisions(["Kaspichan",
"-50"])



