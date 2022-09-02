function graduation(input){
    let name = input[0]
    let index = 1
    let badGrade = 0 
    let totalGrades = 0
    let grades = 1

    while(grades<=12){
        let currentGrade = Number(input[index])
        index++
        
        if(currentGrade >= 4){
            totalGrades += currentGrade
        }else{
            badGrade++
            totalGrades += currentGrade
        }

        if(badGrade === 2){
            console.log(`${name} has been excluded at ${grades-1} grade`)
            break;
        }
        grades++
    }
    if (badGrade<2){
        let averageGrade = totalGrades / 12
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

