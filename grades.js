function grades(input){
    let index = 0
    let studentsCount = Number(input[index])
    index++
    let topStudents = 0
    let failStudents = 0
    let between3and4 = 0
    let between4and5 = 0
    let totalGrades = 0

    for (let i = 0; i < studentsCount; i++){
        let currentGrade = Number(input[index])
        index++
        totalGrades += currentGrade
        if(currentGrade <= 2.99){
            failStudents += 1
        }else if(currentGrade >=3.00 && currentGrade <= 3.99){
            between3and4 +=1
        }else if(currentGrade >=4 && currentGrade <=4.99){
            between4and5 +=1
        }else{
            topStudents +=1
        }
    }
    let topStudentsPercent = topStudents / studentsCount * 100
    let failStudentsPercent = failStudents / studentsCount * 100
    let between3and4Percent = between3and4 / studentsCount * 100
    let between4and5Percent = between4and5 / studentsCount * 100
    let averageGrade = totalGrades / studentsCount

    console.log(`Top students: ${topStudentsPercent.toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${between4and5Percent.toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${between3and4Percent.toFixed(2)}%`)
    console.log(`Fail: ${failStudentsPercent.toFixed(2)}%`)
    console.log(`Average: ${averageGrade.toFixed(2)}`)
}

grades(["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"
    ])