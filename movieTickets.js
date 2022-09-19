function movieTickets(input) {
    let a1 = Number(input[0]);
    let a2 = Number(input[1]);
    let n = Number(input[2]);
    let interval = Number(n / 2);
    let sum = 0;

    for (i = a1; i < a2; i++) {
        let firstSymbol = String.fromCharCode(i)
        for (k = 1; k < n; k++) {
            let secondSymbol = k
            for (j = 1; j < interval; j++) {
                let thirdSymbol = j;
                let fourthSymbol = i;
                sum = fourthSymbol + secondSymbol + thirdSymbol;
                let currNum = firstSymbol.charCodeAt(0)
                if (currNum % 2 !== 0 && sum % 2 !== 0) {
                    console.log(`${firstSymbol}-${secondSymbol}${thirdSymbol}${fourthSymbol}`);
                }
            }
        }
    }
}

movieTickets(["76",
    "78",
    "7"])



