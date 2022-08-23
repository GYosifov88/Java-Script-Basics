function housePainting(input){
    let height = input[0]
    let lenght = input[1]
    let roofHeight = input[2]
    let door = 1.2 * 2
    let windows = 2 * (1.5 * 1.5)
    let greenSquareMeters = (2*(height* height) + 2*(height*lenght) - door - windows)
    let redSquareMeters = (2*(height*lenght) + 2*(roofHeight*height/2))
    let greenPaintNeeded = (greenSquareMeters / 3.4).toFixed(2)
    let redPaintNeeded = (redSquareMeters / 4.3).toFixed(2)
    console.log(greenPaintNeeded)
    console.log(redPaintNeeded)
}

housePainting([6, 10, 5.2])