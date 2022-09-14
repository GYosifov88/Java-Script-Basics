function addBags(input){
    let baggageOver20Kilos = Number(input[0]);
    let baggageWeight = Number(input[1]);
    let daysTillTravel = Number(input[2]);
    let baggagesCount = Number(input[3]);
    let totalPrice = 0;
    let baggagePerKiloPrice = 0;

    if (baggageWeight < 10){
        baggagePerKiloPrice = baggageOver20Kilos * 0.2;
    }else if(baggageWeight >=10 && baggageWeight <= 20){
        baggagePerKiloPrice = baggageOver20Kilos / 2;
    }else{
        baggagePerKiloPrice = baggageOver20Kilos;
    }

    if(daysTillTravel > 30){
        baggagePerKiloPrice += baggagePerKiloPrice * 0.1;
    }else if(daysTillTravel >= 7 && daysTillTravel <= 30){
        baggagePerKiloPrice += baggagePerKiloPrice * 0.15;
    }else{
        baggagePerKiloPrice += baggagePerKiloPrice * 0.4;
    }
    totalPrice = baggagePerKiloPrice * baggagesCount;
    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);
}

addBags(["30",
"18",
"15",
"2"])