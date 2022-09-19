function seriesCalculator(input) {
    let seriesName = input[0];
    let seasonsCount = Number(input[1]);
    let episodesCount = Number(input[2]);
    let episodeTimeWithoutAdverts = Number(input[3]);

    let comercialsTime = episodeTimeWithoutAdverts * 0.2;
    let totalEpisodeTime = episodeTimeWithoutAdverts + comercialsTime;
    let extraFinalEpisodesTime = seasonsCount * 10;

    let totalTimeNeeded = Math.floor(totalEpisodeTime * episodesCount * seasonsCount + extraFinalEpisodesTime);

    console.log(`Total time needed to watch the ${seriesName} series is ${totalTimeNeeded} minutes.`);
}

seriesCalculator(["Game of Thrones",
    "7",
    "10",
    "50"])

