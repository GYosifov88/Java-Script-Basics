function examPreparation(input){
    let index = 0;
    let totalGrades = 0;
    let totalTasks = 0;
    let badGradesCounter = 0;
    let lastProblem = '';
    let badGradesTarget = Number(input[index]);
    index++;
    let taskName = input[index];
    index++;
    let taskGrade = Number(input[index])
    index++

    while (taskName !== 'Enough'){
        lastProblem = taskName;
        if(taskGrade <= 4){
            badGradesCounter++;
        }
        totalGrades += taskGrade
        totalTasks++

        if(badGradesCounter === badGradesTarget){
            console.log(`You need a break, ${badGradesTarget} poor grades.`);
            break;
        }

        taskName = input[index]
        index++
        taskGrade = Number(input[index])
        index++
    }
    
    if (badGradesCounter !== badGradesTarget){
    let average = totalGrades / totalTasks
    console.log(`Average score: ${average.toFixed(2)}`);
    console.log(`Number of problems: ${totalTasks}`);
    console.log(`Last problem: ${lastProblem}`);
    }
}

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

