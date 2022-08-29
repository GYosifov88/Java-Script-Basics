function smallShop(input){
    let type = input[0]
    let city = input[1]
    let quantity = Number(input[2])
    let finalResult = 0

    switch(city){
        case "Sofia":
            if(type === 'coffee'){
                finalResult = quantity * 0.50
            }else if (type === 'water'){
                finalResult = quantity * 0.80
            }else if(type === 'beer'){
                finalResult = quantity * 1.20
            }else if(type === 'sweets'){
                finalResult = quantity * 1.45
            }else if(type === 'peanuts'){
                finalResult = quantity * 1.60
            }; break;
        case "Plovdiv":
                if(type === 'coffee'){
                    finalResult = quantity * 0.40
                }else if (type === 'water'){
                    finalResult = quantity * 0.70
                }else if(type === 'beer'){
                    finalResult = quantity * 1.15
                }else if(type === 'sweets'){
                    finalResult = quantity * 1.30
                }else if(type === 'peanuts'){
                    finalResult = quantity * 1.50
                }; break;
        case "Varna":
            if(type === 'coffee'){
                finalResult = quantity * 0.45
            }else if (type === 'water'){
                finalResult = quantity * 0.70
            }else if(type === 'beer'){
                finalResult = quantity * 1.10
            }else if(type === 'sweets'){
                finalResult = quantity * 1.35
            }else if(type === 'peanuts'){
                finalResult = quantity * 1.55
            }; break;
    }

    console.log(finalResult);
}

smallShop(["peanuts",
"Plovdiv",
"1"])



