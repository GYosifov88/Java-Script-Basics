function moving(input){
    let index = 0;
    let width = Number(input[index])
    index++
    let length = Number(input[index])
    index++
    let height = Number(input[index])
    index++
    let command = input[index]
    let totalSpace = width * length * height
    let totalBoxes = 0
    while(command !== 'Done'){
        let boxes = Number(command)
        totalBoxes += boxes
        if(totalSpace<totalBoxes){
            console.log(`No more free space! You need ${totalBoxes-totalSpace} Cubic meters more.`); break;
        }
        index++
        command = input[index]
    }

    if(totalSpace>=totalBoxes){
        console.log(`${totalSpace-totalBoxes} Cubic meters left.`);
    }
}

moving(["10","1","2","4","6","Done"])