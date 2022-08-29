function fruitShop(input){
    let type = input[0]
    let day = input[1]
    let quantity = Number(input[2])


    switch(day){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday": if(type === "banana"){
            finalResult = quantity * 2.50
            console.log(finalResult.toFixed(2));
        }else if(type === "apple"){
            finalResult = quantity * 1.20
            console.log(finalResult.toFixed(2));
        }else if(type === 'orange'){
            finalResult = quantity * 0.85
            console.log(finalResult.toFixed(2));
        }else if(type === 'grapefruit'){
            finalResult = quantity * 1.45
            console.log(finalResult.toFixed(2));
        }else if(type === 'kiwi'){
            finalResult = quantity * 2.70
            console.log(finalResult.toFixed(2));
        }else if(type === 'pineapple'){
            finalResult = quantity * 5.50
            console.log(finalResult.toFixed(2));
        }else if(type === 'grapes'){
            finalResult = quantity * 3.85
            console.log(finalResult.toFixed(2));
        }else{
            console.log("error");
        }; break;
        case 'Saturday':
        case 'Sunday': if(type === "banana"){
            finalResult = quantity * 2.70
            console.log(finalResult.toFixed(2));
        }else if(type === "apple"){
            finalResult = quantity * 1.250
            console.log(finalResult.toFixed(2));
        }else if(type === 'orange'){
            finalResult = quantity * 0.90
            console.log(finalResult.toFixed(2));
        }else if(type === 'grapefruit'){
            finalResult = quantity * 1.60
            console.log(finalResult.toFixed(2));
        }else if(type === 'kiwi'){
            finalResult = quantity * 3
            console.log(finalResult.toFixed(2));
        }else if(type === 'pineapple'){
            finalResult = quantity * 5.60
            console.log(finalResult.toFixed(2));
        }else if(type === 'grapes'){
            finalResult = quantity * 4.20
            console.log(finalResult.toFixed(2));
        }else{
            console.log("error");
        }; break;
        default: console.log('error'); break;
    }

}

fruitShop(["apple",
"dsada",
"0.5"])


