function gymnastics(input) {
    let country = input[0];
    let type = input[1];
    let performancePoints = 0;
    let levelPoints = 0;

    if (country === 'Russia') {
        if (type === 'ribbon') {
            levelPoints = 9.100;
            performancePoints = 9.400;
        } else if (type === 'hoop') {
            levelPoints = 9.300;
            performancePoints = 9.800;
        } else if (type === 'rope') {
            levelPoints = 9.600;
            performancePoints = 9.000;
        }
    } else if (country === 'Bulgaria') {
        if (type === 'ribbon') {
            levelPoints = 9.600;
            performancePoints = 9.400;
        } else if (type === 'hoop') {
            levelPoints = 9.550;
            performancePoints = 9.750;
        } else if (type === 'rope') {
            levelPoints = 9.500;
            performancePoints = 9.400;
        }
    } else if (country === 'Italy') {
        if (type === 'ribbon') {
            levelPoints = 9.200;
            performancePoints = 9.500;
        } else if (type === 'hoop') {
            levelPoints = 9.450;
            performancePoints = 9.350;
        } else if (type === 'rope') {
            levelPoints = 9.700;
            performancePoints = 9.150;
        }
    }

    let totalPoints = levelPoints + performancePoints;
    let pointsNeeded = 20 - totalPoints;
    let percentageNeeded = (pointsNeeded / 20) * 100;

    console.log(`The team of ${country} get ${totalPoints.toFixed(3)} on ${type}.`);
    console.log(`${percentageNeeded.toFixed(2)}%`);

}

gymnastics(["Russia",
    "rope"])

