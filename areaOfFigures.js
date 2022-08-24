function areaOfFigure(input){
    let type = input[0]
    let lenght = Number(input[1])
    let width = Number(input[2])
    let area
    if (type === 'square'){
        area = (lenght * lenght)
    }
    else if (type === 'rectangle'){
        area = (lenght*width)
    }
    else if (type === 'circle'){
        area = (Math.PI * lenght * lenght)
    }
    else if (type === 'triangle'){
        area = (lenght * width / 2)
    }
    console.log(area.toFixed(3))
}

areaOfFigure(["rectangle",
"7",
"2.5"])
