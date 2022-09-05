function cake(input){
    let index = 0
    let cakeWidth = Number(input[index])
    index++
    let cakeLength = Number(input[index])
    index++
    let cakeSize = cakeWidth * cakeLength
    let command = input[index]
    let notEnough = false
    while(command !== 'STOP'){
        let cakePieces = Number(command)
        if(cakeSize >= cakePieces){
            cakeSize -= cakePieces
        }else{
            console.log(`No more cake left! You need ${cakePieces-cakeSize} pieces more.`)
            notEnough = true; break;
        }
        index++
        command = input[index]
    }
    if(cakeSize > 0 && notEnough === false){
        console.log(`${cakeSize} pieces are left.`)
    }
    
}

cake(["10","2","2","4","6","STOP"])