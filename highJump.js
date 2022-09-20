function highJump(input) {
    let index = 0;
    let desiredHigh = Number(input[index]);
    index++;
    let unsuccessfulJumps = 0;
    let jumpsCount = 0;
    let currentBarHigth = desiredHigh - 30;
    let isReachedTarget = false;

    while (true) {
        let currentJump = Number(input[index]);
        if (isNaN(currentJump)){
            break;
        }
        jumpsCount++;
        if (currentJump > currentBarHigth) {
            if (currentJump > desiredHigh) {
                isReachedTarget = true;
                break;
            }else{
                currentBarHigth += 5;
                unsuccessfulJumps = 0;
            }

        } else {
            unsuccessfulJumps++;
            if (unsuccessfulJumps === 3) {
                break;
            }
        }

        index++;
    }

    if (isReachedTarget === true) {
        console.log(`Tihomir succeeded, he jumped over ${currentBarHigth}cm after ${jumpsCount} jumps.`);
    }else {
        console.log(`Tihomir failed at ${currentBarHigth}cm after ${jumpsCount} jumps.`);
    }

}

highJump(["250",
"200",
])







