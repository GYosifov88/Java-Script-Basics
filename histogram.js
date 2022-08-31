function histogram(input) {
    let num = Number(input[0])
    let p1 = 0
    let p2 = 0
    let p3 = 0
    let p4 = 0
    let p5 = 0

    for (let i = 1; i <= num; i++) {
        let digit = Number(input[i])
        if (digit < 200) {
            p1 += 1
        } else if (digit >= 200 && digit <= 399) {
            p2 += 1
        } else if (digit >= 400 && digit <= 599) {
            p3 += 1
        } else if (digit >= 600 && digit <= 799) {
            p4 += 1
        } else {
            p5 += 1
        }
    }
    let p1Percent = (p1 / num) * 100
    let p2Percent = (p2 / num) * 100
    let p3Percent = (p3 / num) * 100
    let p4Percent = (p4 / num) * 100
    let p5Percent = (p5 / num) * 100

    console.log(`${p1Percent.toFixed(2)}%`);
    console.log(`${p2Percent.toFixed(2)}%`);
    console.log(`${p3Percent.toFixed(2)}%`);
    console.log(`${p4Percent.toFixed(2)}%`);
    console.log(`${p5Percent.toFixed(2)}%`);
}

histogram(["7",
    "800",
    "801",
    "250",
    "199",
    "399",
    "599",
    "799"])

