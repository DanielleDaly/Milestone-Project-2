# Rock Paper Scissors Lizard Spock 

Rock, Paper, Scissors, Lizard, Spock is an adaptation of the original Rock, Paper, Scissors game. This became known from the TV show 'The Big Bang Theory'. It is a game of chance where 2 players choose a variable and reveal it at the same time. If the players tie, then they must play again until there is a winner. With the additional options of 'Lizard' and 'Spock' this allows for more possible outcomes than the original game and less chance of it ending in a tie. 

This is a responsive website created using HTML, CSS and JavaScript. The main function of the website is to provide a version of the Rock, Paper, Scissors, Lizard, Spock game that allows the user to have fun and play against the computer. In this case, the computer is a substitute for a friend or family member that they would play against in a real world scenario.

It is a simple game where the user makes a choice and this is compared to a randomly generated choice from a predetermined list of possiblities, i.e. Rock, Paper, Scissors, Lizard or Spock. Based on a defined set of rules, for which option defeats another, the winner of each round is determined. The first to win 10 rounds is the overall winner.

## Existing Features

### Header

The header contains the name of the game: 'Rock, Paper, Scissors, Lizard, Spock'. It also contains a sub-heading “First to 10 Wins!”. This lets the player know at a glance what the purpose of the website is. It also informs the user that the winner is the first player to win 10 rounds of the game. The font used is simple, unembelished and clear. The reason for choosing Arial as the font was to make it easy to read and accessible for all users. The heading also uses contrasting colours to incerase the accessibility of the website and bright colours are used to give a cheerful, informal and visually appealing experience to the user.


<h3 align="center"><img src="assets/images/screenshots/screenshot-header.png"></h3>


## The Scores Area

The scores are displayed directly below the heading, close to the top of the page. Both the player and the computers score are displayed. The player is referenced as 'You' and the computer as 'Computer'. After each round, the scores are updated. The winner of each round has their score incremented by 1. In the event of a tie, neither score is changed.


<h3 align="center"><img src="assets/images/screenshots/screenshot-scores.png"></h3>


## The Winner Message

Once either the computer or the player score reaches 10, a winner message is displayed. This message gives feedback to the user about who has won the game. A play again button is also included in the winner message panel that allows the user to re-start the game and play again. 

### Winner Message - Player Wins


<h3 align="center"><img src="assets/images/screenshots/screenshot-winner-message-user-wins.png"></h3>
 

### Winner Message - Computer Wins


<h3 align="center"><img src="assets/images/screenshots/screenshot-winner-message-computer-wins.png"></h3>


## Game Results

The game displays the choices made by the computer and the player for each round. The player's choice is displayed on the left hand side of the game area below their score and the computer's choice is displayed on the right hand side of the game area, below the computer's score. Images are used to represent the choices of either Rock, Paper, Scissors, Lizard or Spock. The user can clearly see what choice they have made, what choice the computer has made and which player has won, as well as the current scores.

In addition to the images, text is also displayed. This shows details of who has won and also explains the reason why by including the relevant game rule. For example: If the computer chooses 'Paper' and the user chooses 'Scissors' the messages will display as "Scissors Cuts Paper. You Win!". This helps the user to familiarise themselves with the rules of the game.


<h3 align="center"><img src="assets/images/screenshots/screenshot-player-choices.png"></h3>


Before beginning the game this area contains placeholder images. This is also displayed if the "Reset" or "Play Again!" buttons are clicked. There is also placeholder text which reads "Make your choice below... or scroll down for Rules". This is intended to make the site more user-friendly and to direct the player to the relevant part of the page. 


<h3 align="center"><img src="assets/images/screenshots/screenshot-default-game-result.png"></h3>


## Game Buttons

The user chooses one of the 5 game buttons to make their choice for the round. These buttons are represented by images of the possible choices; Rock, Paper, Scissors, Lizard or Spock. Once a button is pressed, the user's choice is made, the computer's choice is randomly decided, and the winner of the round is displayed.

The colour of the border matches the main page colour for consistency. When the user hovers over the buttons, the colour changes to highlight the choice the user is about to make. The hover color is green which contrasts with the primary design colour. This colour also matches the colour used for displaying the scores, again maintaining consistency and a robust UI design. As this game can also be played by children, I believe having the buttons displayed as pictures is more user friendly for all ages.

### Game Buttons - Default State


<h3 align="center"><img src="assets/images/screenshots/screenshot-game-buttons.png"></h3>


### Game Buttons - Hover State


<h3 align="center"><img src="assets/images/screenshots/screenshot-game-buttons-hover.png"></h3>


## Reset Button

At the end of the page there is a reset button. If a player wants to restart the game mid round they can click on the "Reset Game" button. Once clicked it clears the scores and sets the images and text back to the default settings. The reset button has a hover state which is the same as the background colour, keeping a consistent design across the page.

### Reset Button


<h3 align="center"><img src="assets/images/screenshots/screenshot-reset-button.png"></h3>


### Reset Button Hover


<h3 align="center"><img src="assets/images/screenshots/screenshot-reset-button-hover.png"></h3>


## Rules Panel

Not all users will know the rules to the game, or they may know the rules for the original game but not the Rock, Paper, Scissors, Lizard, Spock version. The rules are displayed below the main game area in a separate panel with a contrasting colour pallette for optimal readability. These allow the user to get to know the rules before the game begins, and are also available to the user at any stage during the game.


<h3 align="center"><img src="assets/images/screenshots/screenshot-game-rules.png"></h3>


## Future Features

- In future I would like to add add an option for the user to input their name before the game begins. In this way the user's score would include the user's name instead of the current generic username of 'You'. I would also like for their name to be used as part of the winner message. This adds an element of personalisation to the game and gives a more immersive user experience.

- Another idea I would like to implement is to store the computer player's choices as the game is being played. The most frequently chosen answer made by the computer would be displayed to help prompt the user to make a choice that would give the impression that they would have a better chance of winning each round, even though the computer choices are completely random. It would add to the enjoyment of the game as the user would believe they are making a more educated guess, despite their chances of winning not changing at all.