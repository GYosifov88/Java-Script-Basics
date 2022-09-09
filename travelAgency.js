function travelAgency(input) {
    let city = input[0];
    let package = input[1];
    let VIPcard = input[2];
    let days = Number(input[3]);
    let price = 0;
    let isInvalid = false


    if (city === 'Borovets' || city === 'Bansko') {
        if (package === 'withEquipment') {
            price = days * 100
            if (VIPcard === "yes") {
                price -= price * 0.1
            }
        } else if (package === 'noEquipment') {
            price = days * 80
            if (VIPcard === "yes") {
                price -= price * 0.05
            }
        }else{
            isInvalid = true;
            console.log("Invalid input!");
        }
    } else if (city === 'Varna' || city === 'Burgas') {
        if (package === 'withBreakfast') {
            price = days * 130
            if (VIPcard === "yes") {
                price -= price * 0.12
            }
        } else if (package === 'noBreakfast') {
            price = days * 100
            if (VIPcard === "yes") {
                price -= price * 0.07
            }
        }else{
            isInvalid = true;
            console.log("Invalid input!");
        }
    }else{
        isInvalid = true;
        console.log("Invalid input!");
    }

    if (days > 7) {
        let pricePerDay = price / days
        price -= pricePerDay
    }

    if (days < 1) {
        console.log("Days must be positive number!");
    }else if (!isInvalid){
        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    }
    
}

travelAgency(["Varna",
"sdada",
"no",
"1"])






