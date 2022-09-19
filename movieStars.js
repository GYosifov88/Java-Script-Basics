function movieStars(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let command = input[index];
    let isBudgetFinished = false

    while (command !== 'ACTION') {
        let actorName = command;
        let actorSalary = 0;
        if (actorName.length > 15) {
            actorSalary = budget * 0.2;
            if (budget >= actorSalary) {
                budget -= actorSalary;
            } else {
                isBudgetFinished = true;
                budget -= actorSalary
                break;
            }
        } else {
            index++;
            actorSalary = Number(input[index]);
            if (budget >= actorSalary) {
                budget -= actorSalary;
            } else {
                isBudgetFinished = true;
                budget -= actorSalary
                break;
            }
        }

        index++;
        command = input[index];
    }

    if (isBudgetFinished === true) {
        console.log(`We need ${(Math.abs(budget)).toFixed(2)} leva for our actors.`);
    } else {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    }
}

movieStars(["170000",
    "Ben Affleck",
    "40000.50",
    "Zahari Baharov",
    "80000",
    "Tom Hanks",
    "2000.99",
    "ACTION"])

