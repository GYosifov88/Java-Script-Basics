function walking(input){
    let target = 10000
    let stepsCount = 0
    let index = 0
    let command = input[index]
    while(true){
        if(command === 'Going home'){
            index++
            let lastSteps = Number(input[index])
            stepsCount += lastSteps
            if(stepsCount >= target){
                console.log(`Goal reached! Good job!`)
                console.log(`${stepsCount - target} steps over the goal!`); break;
            }else{
                console.log(`${target - stepsCount} more steps to reach goal.`); break;
            }
        }else{
            let currentSteps = Number(command)
            stepsCount += currentSteps
            if(stepsCount >= target){
                console.log(`Goal reached! Good job!`)
                console.log(`${stepsCount - target} steps over the goal!`); break;
            }
        }
        
        index++
        command = input[index]
    }
}

walking(["125", "250", "4000", "30", "2678", "4682"])