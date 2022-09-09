function trainTheTrainers(input) {
    let index = 0;
    let juryCount = Number(input[index]);
    index++;
    let totalGrade = 0;
    let gradesGiven = 0
    let command = input[index];
    index++;
    while (command !== 'Finish') {
        let currentCourseGrades = 0
        for (let i = 0; i < juryCount; i++) {
            let currentGrade = Number(input[index]);
            index++;
            totalGrade += currentGrade;
            currentCourseGrades += currentGrade;
            gradesGiven++
        }
        let average = currentCourseGrades / juryCount
        console.log(`${command} - ${average.toFixed(2)}.`);

        command = input[index]
        index++
    }

    let finalAverage = totalGrade / gradesGiven
    console.log(`Student's final assessment is ${finalAverage.toFixed(2)}.`);
}

trainTheTrainers(["2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"])


