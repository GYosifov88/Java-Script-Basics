function lunchBreak(input) {
    let serialName = input[0]
    let episodeTime = Number(input[1])
    let breakTime = Number(input[2])

    let lunchTime = breakTime / 8
    let restTime = breakTime / 4

    let timeLeft = breakTime - lunchTime - restTime

    if (timeLeft >= episodeTime) {
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(timeLeft - episodeTime)} minutes free time.`)
    }
    else {
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(Math.abs(timeLeft - episodeTime))} more minutes.`)
    }

}

lunchBreak(["Teen Wolf",
    "48",
    "60"])

