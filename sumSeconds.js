function sumSeconds(input) {
    let firstPlayerSeconds = Number(input[0])
    let secondPlayerSeconds = Number(input[1])
    let thirdPlayerSeconds = Number(input[2])

    let totalTimeInSeconds = firstPlayerSeconds + secondPlayerSeconds + thirdPlayerSeconds
    let minutes = Math.floor(totalTimeInSeconds / 60)
    let seconds = totalTimeInSeconds % 60
    if (seconds < 10) {
        console.log(` ${minutes}:0${seconds}`)
    }
    else {
        console.log(`${minutes}:${seconds}`)
    }


}

sumSeconds(["35",
    "45",
    "44"])
