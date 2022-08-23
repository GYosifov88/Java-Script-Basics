function triangleArea(input) {
    let lenght = Number(input[0])
    let height = Number(input[1])
    let area = (lenght * height / 2).toFixed(2)
    console.log(area)
}

triangleArea([15, 35])