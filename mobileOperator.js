function mobileOperator(input) {
    let contractDuration = input[0];
    let contractType = input[1];
    let mobileNetAdded = input[2];
    let monthsCount = Number(input[3]);
    let cost = 0;
    let tax = 0;

    if (contractDuration === 'one') {
        if (contractType === 'Small') {
            tax = 9.98;
        } else if (contractType === 'Middle') {
            tax = 18.99;
        } else if (contractType === 'Large') {
            tax = 25.98;
        } else if (contractType === 'ExtraLarge') {
            tax = 35.99;
        }
    } else if (contractDuration === 'two') {
        if (contractType === 'Small') {
            tax = 8.58;
        } else if (contractType === 'Middle') {
            tax = 17.09;
        } else if (contractType === 'Large') {
            tax = 23.59;
        } else if (contractType === 'ExtraLarge') {
            tax = 31.79;
        }
    }

    if (mobileNetAdded === 'yes') {
        if (tax <= 10) {
            tax += 5.50;
        } else if (tax > 10 && tax <= 30) {
            tax += 4.35;
        } else {
            tax += 3.85;
        }
    }

    cost = tax * monthsCount;

    if (contractDuration === 'two') {
        cost = cost - cost * 0.0375;
    }

    console.log(`${cost.toFixed(2)} lv.`);

}

mobileOperator(["two",
    "Large",
    "no",
    "10"])

