let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "blue", "green"];

let level = 0;
let started = false;
let h3 = document.querySelector("h3")
document.addEventListener("keypress", function () {
    if (started == false) {
        // console.log("Game is started...");
        started = true;
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 10);
        levelUp();
    }

});

let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    if (started == false) {

        // console.log("Game is started...");
        started = true;
        levelUp();
    }

});


function btnFlash(btn) {

    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}



function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 4);
    let randomClr = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomClr}`);
    gameSeq.push(randomClr);
    // console.log(gameSeq);
    // console.log(randomIdx);
    // console.log(randomClr);
    // console.log(randomBtn);

    //to flash the button
    btnFlash(randomBtn);
}


function userFlash(btn) {

    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 300);
}


function checkAns(idx) {

    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1200);
        }

    }
    else {
        // console.log("Game Over! press any key to start...");
        h3.innerHTML = `Game Over! <br><b>Your Score is ${level - 1}</b> <br>Press any key to start...<br>`;

        let rebtn = document.createElement("button");
        rebtn.innerText = "Restart";
        h3.append(rebtn);
        let btn = document.querySelector("button");
        rebtn.addEventListener("click", function () {
            if (started == false) {
                setTimeout(function () {
                    document.querySelector("body").style.backgroundColor = "white";
                }, 10);
                // console.log("Game is started...");
                started = true;
                levelUp();
            }

        });

        document.querySelector("body").style.backgroundColor = "red";



        // function highestScore() {
        //     let hiscore = 0;
        //     if (hiscore < (level - 1)) {
                
        //         hiscore = level - 1;
        //         HighScore.push[hiscore];
        //     }

            
        //     // console.log(hiscore);
        //     console.log(HighScore);


        // }

        restart();

    }
}



function btnPress() {
    // console.log("btn was pressed");
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);


}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);


}

function restart() {
    started = false;

    level = 0;
    gameSeq = [];
    userSeq = [];


}

let HighScore = [];

