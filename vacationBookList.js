function bookLIst(input){
    let pages = Number(input[0])
    let pagesPerHour = Number(input[1])
    let numberOfDays = Number(input[2])

    let timeToReadBook = pages / pagesPerHour
    let hoursToRead = timeToReadBook / numberOfDays
    console.log(hoursToRead)

}

bookLIst(["212 ",
"20 ",
"2 "]
)