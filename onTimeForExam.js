function onTimeForExam(input){
    let examHour = Number(input[0])
    let examMinute = Number(input[1])
    let arrivalHour = Number(input[2])
    let arrivalMinute = Number(input[3])

    let examTimeInMinutes = examHour * 60 + examMinute
    let arrivalTimeInMinutes = arrivalHour * 60 + arrivalMinute
    let difference = Math.abs(arrivalTimeInMinutes - examTimeInMinutes)


    if(arrivalTimeInMinutes > examTimeInMinutes){
        console.log('Late')
        if ((difference) < 60){
            console.log(`${difference} minutes after the start`)
        }else{
            let hour = Math.floor(difference / 60)
            let minutes = difference % 60
            if(minutes<10){
                console.log(`${hour}:0${minutes} hours after the start`)
            }else{
                console.log(`${hour}:${minutes} hours after the start`)
            }
        }
    }else if (arrivalTimeInMinutes <= examTimeInMinutes){
        if (difference === 0){
            console.log('On time')
        }else if (difference > 0 && difference <= 30){
            console.log('On time')
            console.log(`${difference} minutes before the start`)
        }else if(difference < 60){
            console.log("Early")
            console.log(`${difference} minutes before the start`)
        }else{
            console.log("Early")
            let hour = Math.floor(difference / 60)
            let minutes = difference % 60
            if(minutes<10){
                console.log(`${hour}:0${minutes} hours before the start`)
            }else{
                console.log(`${hour}:${minutes} hours before the start`)
            }
        }

    }

}

onTimeForExam(["11",
"30",
"12",
"29"])







