/*-------------------------------- Constants --------------------------------*/

const colors = ["white", "yellow", "green", "blue", "red", "pink"];

/*-------------------------------- Variables --------------------------------*/

const playerCombo = [];

const hintCombo = [];

let turnNum = 0;

const turnString = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth"];

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

const colorSel = document.querySelectorAll(".color-selection");

const goButtonElement = document.querySelectorAll(".go-button");

const hint = document.querySelectorAll(".hint");

// const test = document.querySelector("#play-board") 

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

// const activePlay = () => {
//     for (let i = 0; i < colorChoice.length; i++) {
//         console.log(colorChoice[i].className);
//         if (colorChoice[i].className === `color-dropdown ${turn}`) {
//             console.log("yes!")
//         } else {
//             console.log("no!")
//         }
//     }
// };


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

activePlay();

const handleGo = () => {
    for (let i = 0; i < 4; i++) {
        playerCombo.push(colorSel[turnNum*4 + i].value);
    }
    checkCombo();
    changeHint();
    turnNum += 1;
    activePlay();
    console.log("turn:", turn);
    console.log("computer", computerCombo);
    console.log("player", playerCombo);
    playerCombo.pop();
    playerCombo.pop();
    playerCombo.pop();
    playerCombo.pop();
};

for (let i = 0; i <goButtonElement.length; i++) {
    goButtonElement[i].addEventListener("click", handleGo);
};




// activeChoice = document.querySelectorAll(`.${turnString[turnNum]}`);

// const disablePlay = () => {
//     for (let i = 0; i < colorChoice.length; i++) {
//         colorChoice[i].disabled = true;
//     };
//     goButtonElement.disabled = true;
// };

// problems to solve:
// player choice returns 15 elements 