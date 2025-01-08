/*-------------------------------- Constants --------------------------------*/

const colors = ["white", "yellow", "green", "blue", "red", "pink"];

/*-------------------------------- Variables --------------------------------*/

const playerCombo = [];

const hintCombo = [];

let turnNum = 1;

const turnString = ["zeroth", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth"];

/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/

const checkCombo = () => {
    for (let i = 0; i < computerCombo.length; i++) {
        if (playerCombo[i] === computerCombo[i]) {
            hintCombo.push("match");
        } else if (computerCombo.indexOf(playerCombo[i]) >= 0) {
            hintCombo.push("present");
        } else {
            hintCombo.push("absent");
        }
    }
};

//fisher-yates shuffle function: https://medium.com/@omar.rashid2/fisher-yates-shuffle-a2aa15578d2f

const shuffle = (colors) => {
    let oldElement;
    for (let i = colors.length - 1; i > 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1));
        oldElement = colors[i];
        colors[i] = colors[rand];
      colors[rand] = oldElement;
    }
    return colors;
};

const computerCombo = shuffle(colors).slice(0,4);

/*----------------------------- Event Listeners -----------------------------*/

const colorChoice = document.querySelectorAll(".color-dropdown");

//exclusive multiple selectors: https://stackoverflow.com/questions/34001917/queryselectorall-with-multiple-conditions-in-javascript

const colorSel = document.querySelectorAll(`.color-selection.${turnString[turnNum]}`);

const goButtonElement = document.querySelectorAll(".go-button");

const hint = document.querySelectorAll(".hint");

const playElements = document.querySelectorAll(".color-dropdown");

const replayButtonElement = document.querySelector("#replay");

const colorSelFunc = () => {
    return document.querySelectorAll(`.color-selection.${turnString[turnNum]}`);
};

const handleReplay = () => {
    location.reload()
};

replayButtonElement.addEventListener("click", handleReplay);

const changeHint = () => {
    for (let i = 0; i < hintCombo.length; i++) {
        if (hintCombo[i] === "match") {
            hint[i].style.backgroundColor = "green";
        } else if (hintCombo[i] === "present") {
            hint[i].style.backgroundColor = "yellow";
        } else if (hintCombo[i] === "absent") {
            hint[i].style.backgroundColor = "red";
        }
    }
};

const activePlay = () => {
    turn = turnString[turnNum];
    for (let i = 0; i < colorChoice.length; i++) {
        if (colorChoice[i].classList.contains(`${turn}`)) {
            colorChoice[i].removeAttribute("disabled");
        } else {
            colorChoice[i].setAttribute("disabled", "disabled");
        }
    }
};

const checkOutcome = () => {
    const lastFourHintCombos = hintCombo.slice(hintCombo.length -4);
    const outcomeElement = document.querySelector("#outcome");
    const disablePlay = () => {
        for (let i = 0; i < playElements.length; i++) {
            playElements[i].setAttribute("disabled", "disabled");
        }
    };
    if (
        lastFourHintCombos[0] === "match" &&
        lastFourHintCombos[1] === "match" &&
        lastFourHintCombos[2] === "match" &&
        lastFourHintCombos[3] === "match"
    ) {
        const playElements = document.querySelectorAll(".color-dropdown");
        for (let i = 0; i < playElements.length; i++) {
            playElements[i].setAttribute("disabled", "disabled");
        disablePlay();
        outcomeElement.textContent = "YOU WINNER!";
        }
    } else if (turnNum === 9) {
        disablePlay();
        outcomeElement.textContent = "YOU LOSER!";
    }
};

activePlay();

const handleGo = () => {
    for (let i = 0; i < colorSelFunc().length; i++) {
        playerCombo.push(colorSelFunc()[i].value);
    }
    checkCombo();
    changeHint();
    turnNum += 1;
    activePlay();
    checkOutcome();
    console.log("computer", computerCombo);
    console.log("player", playerCombo);
    for (let i = 0; i < 4; i++) {
        playerCombo.pop();
    };
};

for (let i = 0; i <goButtonElement.length; i++) {
    goButtonElement[i].addEventListener("click", handleGo);
};