function tennisRanglist(input){
    let index = 0
    let tournamentNum = Number(input[index])
    index++
    let initialPoints = Number(input[index])
    index++
    let numberOfWins = 0
    let pointsWin = 0

    for(let i = 0; i <= tournamentNum; i++){
        let stageReached = input[index]
        index++
        if(stageReached === 'W'){
            numberOfWins += 1
            pointsWin += 2000
        }else if(stageReached === 'F'){
            pointsWin += 1200
        }else if(stageReached === 'SF'){
            pointsWin += 720
        }
    }
    let totalPoints = initialPoints + pointsWin
    let averagePoints = Math.floor(pointsWin / tournamentNum)
    let percentWins = numberOfWins / tournamentNum * 100
    
    console.log(`Final points: ${totalPoints}`)
    console.log(`Average points: ${averagePoints}`)
    console.log(`${percentWins.toFixed(2)}%`)
}

tennisRanglist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])


