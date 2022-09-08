function building(input) {
    let floors = Number(input[0])
    let rooms = Number(input[1])
    let mark = ''
    let building = ''
    for (let f = floors; f > 0; f--) {
        let floor = ''
        if (f === floors) {
            mark = 'L'
        } else if (f % 2 === 0) {
            mark = 'O'
        } else {
            mark = 'A'
        }
        for (let r = 0; r < rooms; r++) {
            floor += `${mark}${f}${r} `
        }
        building += `${floor}\n`
    }
    console.log(building)
}

building(["1", "4"])