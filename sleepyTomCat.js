function sleepyTomCat(input) {
    let numberOfRestingDays = Number(input[0])
    let normalPlayingTimePerYear = 30000
    let numberOfWorkingDays = 365 - numberOfRestingDays

    let playingTime = (numberOfRestingDays * 127) + (numberOfWorkingDays * 63)
    let difference = Math.abs(normalPlayingTimePerYear - playingTime)
    let hours = Math.floor(difference / 60)
    let minutes = difference % 60

    if (normalPlayingTimePerYear > playingTime) {
        console.log("Tom sleeps well")
        console.log(`${hours} hours and ${minutes} minutes less for play`)
    }
    else {
        console.log("Tom will run away")
        console.log(`${hours} hours and ${minutes} minutes more for play`)
    }


}

sleepyTomCat(["113"])