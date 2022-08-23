function circleAreaAndPerimeter(input){
    let radius = input[0]
    let circleArea = (radius * radius * Math.PI).toFixed(2)
    let circlePerimeter = (2 * Math.PI * radius).toFixed(2)
    console.log(circleArea)
    console.log(circlePerimeter)
}

circleAreaAndPerimeter([3])