function numbers1ToNWithStep3(input) {
    let num = Number(input[0])

    for (let a = 1; a <= num; a += 3) {
        console.log(a);
    }
}

numbers1ToNWithStep3(["10"])