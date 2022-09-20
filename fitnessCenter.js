function fitnessCenter(input) {
    let index = 0;
    let visitorsCount = Number(input[index]);
    index++;
    let backTraining = 0;
    let chestTraining = 0;
    let legsTraining = 0;
    let absTraining = 0;
    let overallTrainers = 0;
    let proteinShakeBuyers = 0;
    let proteinBarBuyers = 0;
    let overallBuyers = 0;

    for (i = 0; i < visitorsCount; i++) {
        let currentVisitorActivity = input[index];
        index++;

        if (currentVisitorActivity === 'Back') {
            backTraining++;
            overallTrainers++;
        } else if (currentVisitorActivity === 'Chest') {
            chestTraining++;
            overallTrainers++;
        } else if (currentVisitorActivity === 'Legs') {
            legsTraining++;
            overallTrainers++;
        } else if (currentVisitorActivity === 'Abs') {
            absTraining++;
            overallTrainers++;
        } else if (currentVisitorActivity === 'Protein shake') {
            proteinShakeBuyers++;
            overallBuyers++;
        } else if (currentVisitorActivity === 'Protein bar') {
            proteinBarBuyers++;
            overallBuyers++;
        }
    }

    let percentTrainers = overallTrainers / visitorsCount * 100;
    let percentBuyers = overallBuyers / visitorsCount * 100;

    console.log(`${backTraining} - back`);
    console.log(`${chestTraining} - chest`);
    console.log(`${legsTraining} - legs`);
    console.log(`${absTraining} - abs`);
    console.log(`${proteinShakeBuyers} - protein shake`);
    console.log(`${proteinBarBuyers} - protein bar`);
    console.log(`${percentTrainers.toFixed(2)}% - work out`);
    console.log(`${percentBuyers.toFixed(2)}% - protein`);

}

fitnessCenter(["7",
    "Chest",
    "Back",
    "Legs",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar"])

