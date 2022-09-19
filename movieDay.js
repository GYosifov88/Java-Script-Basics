function movieDay(input) {
    let time = Number(input[0]);
    let scenesCount = Number(input[1]);
    let sceneTime = Number(input[2]);

    let scenePreparing = time * 0.15;
    let scenesOverallTime = sceneTime * scenesCount;

    let totalNeededTime = scenesOverallTime + scenePreparing;

    let difference = Math.ceil(Math.abs(totalNeededTime - time));

    if (totalNeededTime > time) {
        console.log(`Time is up! To complete the movie you need ${difference} minutes.`);
    } else {
        console.log(`You managed to finish the movie on time! You have ${difference} minutes left!`);
    }
}

movieDay(["60",
    "15",
    "3"])
