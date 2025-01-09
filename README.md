<h1>Mastermind</h1>
Mastermind's simple and addictive. Guess the colour of each of the four circles in correct order. If the circle's colour and position are correct, the hint will light up green. If the colour is one of the four correct colours but in the wrong position, the hint will light up red. If both the colour and position are wrong, the hint will not light up. Guess within the maximum number of tries and be the master. 
<br/>
<br/>

[Mastermind here now!](https://caleb-cmyk.github.io/project-one-mastermind-game/)

<h2>Project Brief</h2>

<h4>Minimum Viable Product in Two Weeks</h4>
<ul>
  <li>Working game logic</li>
  <li>Win and lose outcomes</li>
  <li>Restartable</li>
</ul>

<h4>Technologies Used</h4>
<ul>
  <li>Javascript</li>
  <li>HTML</li>
  <li>CSS</li>
  <li>Git / GitHub</li>
</ul>


<h2>Game Design Development</h2>

<h3>User Stories</h3>
<p>
  <ul>
    <li>As a mastermind player, I want to see a fresh game page so that I can start playing.</li>
    <li>As a mastermind player, I want to click and select colours so that I can input my choices.</li>
    <li>As a mastermind player, I want the ability to reselect from the colour menu so that I can change my colour choice before submitting.</li>
    <li>As a mastermind player, I want visual feedback of which of my colour choices were correct so that I can make the next choice.</li>
    <li>As a mastermind player, I want visual feedback when I win so that I know I am a winner.</li>
    <li>As a mastermind player, I want to click a replay button so that play again. </li>
    <li>As a mastermind player, I want to see a stats list so that I can see my highscores.</li>
    <li>As a mastermind player, it would be great if there was a countdown timer for each choice so that the game is more exciting.</li>
    <li>As a mastermind player, it would be great if there were various difficulty levels so that the game is more exciting.</li>
  </ul>
</p>


<h3>Pseudocode</h3>

<h4>Section 1: Game initialisation and First Moves</h4>

--------------------- INSERT REF IMG --------------------- 
```
  // WHEN player clicks the play button,
    // THEN computer initialises the game and shows the game board page.
```
```
  // WHEN player clicks on a circle in the row in play,
    // THEN computer makes a menu of colours appear.
```
```
  // WHEN player clicks on a colour in the menu, 
    // THEN computer makes the menu disappear and the circle takes that colour.
```
```
  // WHEN player clicks on the "guess" button (submit combo),
    //IF player has not chosen for all circles,
      //THEN computer prompts them to do so.

    // IF player has chosen for all circles,
      // THEN computer shows them which of their choices are correct.
```



<h4>Section 2: Situation 1 - Player Wins or Loses</h4>

--------------------- INSERT REF IMG --------------------- 
```
  // IF player wins,
    // THEN computer will show a "YOU WINNER!" image.
  // IF player loses (no more guesses),
    // THEN computer will show a "YOU LOSER." image.

  // WHILE computer shows a "Play Again" button.
      // IF player clicks the "Play Again" button,
        //THEN computer reinitialises the game.
```

<h4>Section 2: Situation 2 - Player Guesses Again</h4>

```
  // IF player needs to guess again,
    // THEN computer removes player actions on the current (guessed) row while maintaining the circles' colours
    // AND computer activates player actions on the next row of choices.
```

<h3>Mastermind Game</h3>
<img width="564" alt="image" src="https://github.com/user-attachments/assets/7c319ed2-5e38-4bc7-b5e0-91aa0b531237" />
<img width="569" alt="image" src="https://github.com/user-attachments/assets/adf52878-5e52-4715-a523-8a88e35b4271" />

<h2>Summary and After-Actions</h2>
<ul>
  <li>Dress up UX/UI</li>
  <li>Remove ability to select colours that have already been selected as one of the options</li>
  <li>Add difficulity levels: 
    <ul>
    <li>Timer</li>
    <li>More colours</li>
    <li>Fewer chances</li>
    <li>More options, ie. choose 6 instead of current choose 4</li>
  </ul>
  <li>Scoreboard</li>
</ul>

<h2>Attributions</h2>
Fisher-Yates Shuffle: https://medium.com/@omar.rashid2/fisher-yates-shuffle-a2aa15578d2f

Selecting with multiple conditions: https://stackoverflow.com/questions/34001917/queryselectorall-with-multiple-conditions-in-javascript
HTML dropdown formatting: https://stackoverflow.com/questions/15755770/change-text-color-of-selected-option-in-a-select-box
