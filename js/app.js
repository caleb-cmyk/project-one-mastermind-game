/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/


let computerCombo = [];

const colorButtonElement = document.querySelectorAll(".color-button");

const ddElement = document.querySelectorAll(".dd");

const handleButtonClick = () => {
    for (let i = 0; i < ddElement.length; i++) {
        ddElement[i].style.display = "block";
    }
};

// const handleChangeColor = () => colorButtonElement[0].style.backgroundColor = ddElement[0].textContent;

const handleChangeColor = (e) => console.log(ddElement[e]);

const createComputerCombo = () => {
    for (let i = 0; i < 4; i++) {
        computerCombo.push(Math.round(Math.random() * 5));
    }
};

createComputerCombo()

console.log(computerCombo);

colorButtonElement.forEach(button => {
    button.addEventListener("click", handleButtonClick);
});

ddElement.forEach(button => {
    button.addEventListener("click", handleChangeColor);
});
