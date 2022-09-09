function footballTournament(input){
    let index = 0;
    let teamName = input[index];
    index++;
    let gameCount = Number(input[index]);
    index++;
    let wins = 0;
    let draws = 0;
    let defeats = 0;
    let pointsGathered = 0;
    let nogames = false

    for(let i = 0; i < gameCount; i++){
        let gameResult = input[index]
        index++
        if (gameCount === 0){
            nogames = true
            break;
        }else{
            if(gameResult === 'W'){
                pointsGathered +=3;
                wins++;
            }else if(gameResult === 'D'){
                pointsGathered += 1;
                draws++;
            }else if(gameResult === 'L'){
                defeats++
            }

        }

    }

    let percentWins = wins / gameCount * 100

    if(gameCount>0){
        console.log(`${teamName} has won ${pointsGathered} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${wins}`);
        console.log(`## D: ${draws}`);
        console.log(`## L: ${defeats}`);
        console.log(`Win rate: ${percentWins.toFixed(2)}%`);
    }else{
        console.log(`${teamName} hasn't played any games during this season.`);
    }

}

footballTournament(["Chelsea",
"0"])


