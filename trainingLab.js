function trainingLab(input){
    let lenghtInMeters = input[0]
    let widthInMeters = input[1]
    let leghtInCentimeters  = lenghtInMeters * 100
    let widthInCentimeters  = widthInMeters * 100 - 100
    let desksWitdth = Math.floor(widthInCentimeters / 70)
    let desksHeight = Math.floor(leghtInCentimeters / 120)
    let currentWorkingSpace = desksWitdth * desksHeight - 3
    console.log(currentWorkingSpace)

}

trainingLab([15, 8.9])