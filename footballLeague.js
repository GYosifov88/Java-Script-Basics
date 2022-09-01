function footballLeague(input) {
    let index = 0
    let stadiumCapacity = Number(input[index])
    index++
    let fansCount = Number(input[index])
    index++

    let sectorA = 0
    let sectorB = 0
    let sectorV = 0
    let sectorG = 0

    for (let i = 0; i < fansCount; i++) {
        let sector = input[index]
        index++
        if (sector === 'A') {
            sectorA++
        } else if (sector === 'B') {
            sectorB++
        } else if (sector === 'V') {
            sectorV++
        } else if (sector === 'G') {
            sectorG++
        }
    }
    let sectorAPercent = sectorA / fansCount * 100
    let sectorBPercent = sectorB / fansCount * 100
    let sectorVPercent = sectorV / fansCount * 100
    let sectorGPercent = sectorG / fansCount * 100
    let overallPercent = fansCount / stadiumCapacity * 100

    console.log(`${sectorAPercent.toFixed(2)}%`)
    console.log(`${sectorBPercent.toFixed(2)}%`)
    console.log(`${sectorVPercent.toFixed(2)}%`)
    console.log(`${sectorGPercent.toFixed(2)}%`)
    console.log(`${overallPercent.toFixed(2)}%`)
}

footballLeague(["76",
    "10",
    "A",
    "V",
    "V",
    "V",
    "G",
    "B",
    "A",
    "V",
    "B",
    "B"
])