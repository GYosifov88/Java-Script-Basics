function pointOnRectangleBorder(input){
    let x1 = Number(input[0])
    let y1 = Number(input[1])
    let x2 = Number(input[2])
    let y2 = Number(input[3])
    let x = Number(input[4])
    let y = Number(input[5])

    if(x === x1 || x === x2){
        if(y1 <= y && y <= y2){
            console.log("Border")
        }else{
            console.log("Inside / Outside")
        }
    }else if(y === y1 || y === y2){
        if(x1 <= x && x <= x2){
            console.log("Border")
        }else{
            console.log("Inside / Outside")
        }
    }else{
        console.log("Inside / Outside")
    }

}

pointOnRectangleBorder(["2", "-3", "12", "3", "12", "4"])