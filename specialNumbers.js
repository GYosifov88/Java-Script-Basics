function specialNumbers(input) {
    let number = Number(input[0]);
    let specialNums = '';

    for (let i = 1111; i <= 9999; i++) {
        let isNumSpecial = true
        let currentNum = '' + i
        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (number % currentDigit !== 0 || currentDigit === 0) {
                isNumSpecial = false
                break;
            }
        }

        if (isNumSpecial) {
            specialNums += `${currentNum} `;
        }

    }
    console.log(specialNums);

}

specialNumbers(["16"])