function skeleton(input) {
    let controlMinutes = Number(input[0]);
    let controlSeconds = Number(input[1]);
    let distance = Number(input[2]);
    let secondsPer100Meters = Number(input[3]);

    let totalControlSeconds = controlMinutes * 60 + controlSeconds;
    let speedDecreases = distance / 120;
    let totalDecreaseTime = speedDecreases * 2.5;
    let marinTime = (distance / 100) * secondsPer100Meters - totalDecreaseTime;

    let diff = Math.abs(totalControlSeconds - marinTime);

    if (marinTime <= totalControlSeconds) {
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${marinTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
    }
}

skeleton(["1",
    "20",
    "1546",
    "12"])

