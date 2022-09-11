function movieRatings(input){
    let index = 0;
    let moviesCount = Number(input[index]);
    index++;

    let topMovie = '';
    let topScore = Number.MIN_SAFE_INTEGER;
    let worstMovie = '';
    let worstScore = Number.MAX_SAFE_INTEGER;
    let totalRatings = 0;

    for (let i = 0; i < moviesCount; i++){
        let currentMovie = input[index];
        index++;
        let currentScore = Number(input[index]);
        index++;

        totalRatings += currentScore;

        if(currentScore > topScore){
            topScore = currentScore;
            topMovie = currentMovie;
        }
        if(currentScore < worstScore){
            worstMovie = currentMovie;
            worstScore = currentScore;
        }

    }

    let averageRating = totalRatings / moviesCount;

    console.log(`${topMovie} is with highest rating: ${topScore.toFixed(1)}`);
    console.log(`${worstMovie} is with lowest rating: ${worstScore.toFixed(1)}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);

}

movieRatings(["3",
"Interstellar",
"8.5",
"Dangal",
"8.3",
"Green Book",
"8.2"])

