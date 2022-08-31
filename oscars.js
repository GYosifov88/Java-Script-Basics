function oscars(input) {
    let index = 0
    let actorName = input[index]
    index++
    let academyPoints = Number(input[index])
    index ++
    let gradersNum = Number(input[index])
    index++

    for (let i = 0; i < gradersNum; i++) {
        let graderName = input[index]
        index++ 
        let graderPoints = Number(input[index])
        index++
        let pointsGiven = graderPoints * graderName.length / 2
        academyPoints += pointsGiven
        if (academyPoints >= 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`); break;
        }
    }
    if (academyPoints < 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - academyPoints).toFixed(1)} more!`);
    }
}

oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])


