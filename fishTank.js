function aquarium(input){
    let length = Number(input[0])
    let width = Number(input[1])
    let height = Number(input[2])
    let percent = Number(input[3])
    let total = length * width * height
    let litres = total / 1000
    let neededLitres = litres * (1 - percent /100)
    console.log(neededLitres)
}

aquarium(["85 ",
"75 ",
"47 ",
"17 "]
)