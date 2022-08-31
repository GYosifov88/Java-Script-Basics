function schoolCamp(input){
    let season = input[0]
    let groupType = input[1]
    let studentsCount = Number(input[2])
    let nightsCount = Number(input[3])
    let nightsPrice = 0
    let sport;

    if (season === 'Winter' && (groupType === 'boys' || groupType === 'girls')){
        nightsPrice = nightsCount * 9.60 * studentsCount
    }else if(season === 'Winter' && groupType === 'mixed'){
        nightsPrice = nightsCount * 10 * studentsCount
    }else if(season === 'Spring' && (groupType === 'boys' || groupType === 'girls')){
        nightsPrice = nightsCount * 7.20 * studentsCount
    }else if(season === 'Spring' && groupType === 'mixed'){
        nightsPrice = nightsCount * 9.50 * studentsCount
    }else if(season === 'Summer' && (groupType === 'boys' || groupType === 'girls')){
        nightsPrice = nightsCount * 15 * studentsCount
    }else if(season === 'Summer' && groupType === 'mixed'){
        nightsPrice = nightsCount * 20 * studentsCount
    }

    if(studentsCount >= 10 && studentsCount < 20){
        nightsPrice -= nightsPrice * 0.05
    }else if(studentsCount>=20 && studentsCount< 50){
        nightsPrice -= nightsPrice * 0.15
    }else if(studentsCount >=50){
        nightsPrice -= nightsPrice* 0.5
    }

    if(season === 'Winter'){
        if(groupType === 'girls'){
            sport = "Gymnastics"
        }else if(groupType === 'boys'){
            sport = 'Judo'
        }else if(groupType === 'mixed'){
            sport = 'Ski'
        }
    }else if(season === 'Spring'){
        if(groupType === 'girls'){
            sport = "Athletics"
        }else if(groupType === 'boys'){
            sport = 'Tennis'
        }else if(groupType === 'mixed'){
            sport = 'Cycling'
        }
    }else if(season === 'Summer'){
        if(groupType === 'girls'){
            sport = "Volleyball"
        }else if(groupType === 'boys'){
            sport = 'Football'
        }else if(groupType === 'mixed'){
            sport = 'Swimming'
        }
    }
    
    console.log(`${sport} ${nightsPrice.toFixed(2)} lv.`)

}

schoolCamp(["Spring", "girls", "20", "7"])