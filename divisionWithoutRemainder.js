function divisionWithoutRemainder(input) {
    let index = 0;
    let number = Number(input[index]);
    index++;
    let divisionByTwo = 0;
    let divisionByThree = 0;
    let divisionByFour = 0;

    for (let i = 0; i < number; i++) {
        let currentNum = Number(input[index]);
        index++;

        if (currentNum % 2 === 0) {
            divisionByTwo++;
        }

        if (currentNum % 3 === 0) {
            divisionByThree++;
        }

        if (currentNum % 4 === 0) {
            divisionByFour++
        }
    }

    let percentByTwo = divisionByTwo / number * 100;
    let percentByThree = divisionByThree / number * 100;
    let percentByFour = divisionByFour / number * 100;

    console.log(`${percentByTwo.toFixed(2)}%`);
    console.log(`${percentByThree.toFixed(2)}%`);
    console.log(`${percentByFour.toFixed(2)}%`);
}

divisionWithoutRemainder(["3",
    "3",
    "6",
    "9"])

