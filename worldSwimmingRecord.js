function worldSwimmingRecord(input){
    let currentRecordInSeconds = Number(input[0])
    let distanceInMetres = Number(input[1])
    let timeInSecondsPerOneMeter = Number(input[2])

    let timeNeeded = distanceInMetres * timeInSecondsPerOneMeter
    let additionalSeconds = (Math.floor(distanceInMetres / 15)) * 12.5
    let totalTime = timeNeeded + additionalSeconds

    if (totalTime >= currentRecordInSeconds){
        console.log(`No, he failed! He was ${(totalTime-currentRecordInSeconds).toFixed(2)} seconds slower.`)
    }
    else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    }

}

worldSwimmingRecord(["55555.67",
"3017",
"5.03"])

