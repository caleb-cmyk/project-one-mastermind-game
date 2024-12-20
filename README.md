<h1>Mastermind</h1>
Mastermind's simple and addictive. Guess the colour of each of the four circles in correct order. If the circle's colour and position are correct, the hint will light up green. If the colour is one of the four correct colours but in the wrong position, the hint will light up red. If both the colour and position are wrong, the hint will not light up. Guess within the maximum number of tries and be the master.

<h2>Project Brief</h2>

<h4>Minimum Viable Product in Two Weeks</h4>
<ul>
  <li>Insert MVP</li>
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

<h3>Code Breakdown</h3>
INSERT CODE BREAKDOWN

<h2>Summary and After-Actions</h2>
INSERT SUMMARY TEXT

<h2>References</h2>
INSERT AUTHORS+SOURCES
