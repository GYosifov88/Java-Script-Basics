function numberPyramid(input) {
    let num = Number(input[0]);
    let currentNum = 1;
    let isBigger = false;
    let printCurrentLine = '';

    for (let row = 1; row <= num; row++) {
        for (let col = 1; col <= row; col++) {
            if (currentNum > num) {
                isBigger = true;
                break;
            }
            printCurrentLine += currentNum + " ";
            currentNum++
        }
        console.log(printCurrentLine);
        printCurrentLine = '';
        if (isBigger) {
            break;
        }
    }

}

numberPyramid(["7"])