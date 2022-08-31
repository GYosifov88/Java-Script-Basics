function trekkingMania(input){
    let index = 0
    let groupsNumber = Number(input[index])
    index++
    let totalPeopleCount = 0
    let musalaCount = 0
    let monblanCount = 0
    let kilimandjaroCount = 0
    let k2Count = 0
    let everestCount = 0
    

    for (let i = 0; i < groupsNumber; i++){
        let peopleCount = Number(input[index])
        index++
        totalPeopleCount += peopleCount
        if(peopleCount <= 5){
            musalaCount += peopleCount
        }else if(peopleCount >= 6 && peopleCount <=12){
            monblanCount += peopleCount
        }else if(peopleCount >= 13 && peopleCount <=25){
            kilimandjaroCount += peopleCount
        }else if(peopleCount >= 26 && peopleCount <=40){
            k2Count += peopleCount
        }else if(peopleCount >= 41){
            everestCount += peopleCount
        }
    }
    let musalaPercent = musalaCount / totalPeopleCount * 100
    let monblanPercent = monblanCount / totalPeopleCount * 100
    let kilimandjaroPercent = kilimandjaroCount / totalPeopleCount * 100
    let k2Percent = k2Count / totalPeopleCount * 100
    let everestPercent = everestCount / totalPeopleCount * 100

    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${monblanPercent.toFixed(2)}%`);
    console.log(`${kilimandjaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);
}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
