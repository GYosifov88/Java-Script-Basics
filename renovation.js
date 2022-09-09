function renovation(input) {
    let index = 0;
    let height = Number(input[index]);
    index++;
    let width = Number(input[index]);
    index++;
    let percentWithoutPaint = Number(input[index]);
    index++;
    let totalForPainting = Math.ceil(4 * (height * width) - (4 * (height * width) * percentWithoutPaint / 100));

    command = input[index];

    while (command !== 'Tired!') {
        let litresOfPaint = Number(command);
        totalForPainting -= litresOfPaint;
        if (totalForPainting <= 0) {
            break;
        }
        index++;
        command = input[index];
    }

    if (totalForPainting === 0) {
        console.log("All walls are painted! Great job, Pesho!");
    }
    else if (totalForPainting < 0) {
        console.log(`All walls are painted and you have ${Math.abs(totalForPainting)} l paint left!`);
    } else {
        console.log(`${totalForPainting} quadratic m left.`);
    }
}

renovation(["2",
"3",
"25",
"6",
"7",
"8"])



