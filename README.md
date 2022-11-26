# Rock Paper Scissors Lizard Spock 

Rock, Paper, Scissors, Lizard, Spock is an adaptation of the original Rock, Paper, Scissors game. This became known from the TV show 'The Big Bang Theory'. It is a game of chance where 2 players choose a variable and reveal it at the same time. If the players tie, then they must play again until there is a winner. With the additional options of 'Lizard' and 'Spock' this allows for more possible outcomes than the original game and less chance of it ending in a tie. 

This is a responsive website created using HTML, CSS and JavaScript. The main function of the website is to provide a version of the Rock, Paper, Scissors, Lizard, Spock game that allows the user to have fun and play against the computer. In this case, the computer is a substitute for a friend or family member that they would play against in a real world scenario.

It is a simple game where the user makes a choice and this is compared to a randomly generated choice from a predetermined list of possiblities, i.e. Rock, Paper, Scissors, Lizard or Spock. Based on a defined set of rules, for which option defeats another, the winner of each round is determined. The first to win 10 rounds is the overall winner.

## Existing Features

### Header

The header contains the name of the game: 'Rock, Paper, Scissors, Lizard, Spock'. It also contains a sub-heading “First to 10 Wins!”. This lets the player know at a glance what the purpose of the website is. It also informs the user that the winner is the first player to win 10 rounds of the game. The font used is simple, unembelished and clear. The reason for choosing Arial as the font was to make it easy to read and accessible for all users. The heading also uses contrasting colours to incerase the accessibility of the website and bright colours are used to give a cheerful, informal and visually appealing experience to the user.


<h3 align="center"><img src="assets/images/screenshots/screenshot-header.png"></h3>


### The Scores Area

The scores are displayed directly below the heading, close to the top of the page. Both the player and the computers score are displayed. The player is referenced as 'You' and the computer as 'Computer'. After each round, the scores are updated. The winner of each round has their score incremented by 1. In the event of a tie, neither score is changed.


<h3 align="center"><img src="assets/images/screenshots/screenshot-scores.png"></h3>


### The Winner Message

Once either the computer or the player score reaches 10, a winner message is displayed. This message gives feedback to the user about who has won the game. A play again button is also included in the winner message panel that allows the user to re-start the game and play again. 

### Winner Message - Player Wins


<h3 align="center"><img src="assets/images/screenshots/screenshot-winner-message-user-wins.png"></h3>
 

### Winner Message - Computer Wins


<h3 align="center"><img src="assets/images/screenshots/screenshot-winner-message-computer-wins.png"></h3>


### Game Results

The game displays the choices made by the computer and the player for each round. The player's choice is displayed on the left hand side of the game area below their score and the computer's choice is displayed on the right hand side of the game area, below the computer's score. Images are used to represent the choices of either Rock, Paper, Scissors, Lizard or Spock. The user can clearly see what choice they have made, what choice the computer has made and which player has won, as well as the current scores.

In addition to the images, text is also displayed. This shows details of who has won and also explains the reason why by including the relevant game rule. For example: If the computer chooses 'Paper' and the user chooses 'Scissors' the messages will display as "Scissors Cuts Paper. You Win!". This helps the user to familiarise themselves with the rules of the game.


<h3 align="center"><img src="assets/images/screenshots/screenshot-player-choices.png"></h3>


Before beginning the game this area contains placeholder images. This is also displayed if the "Reset" or "Play Again!" buttons are clicked. There is also placeholder text which reads "Make your choice below... or scroll down for Rules". This is intended to make the site more user-friendly and to direct the player to the relevant part of the page. 


<h3 align="center"><img src="assets/images/screenshots/screenshot-default-game-result.png"></h3>


### Game Buttons

The user chooses one of the 5 game buttons to make their choice for the round. These buttons are represented by images of the possible choices; Rock, Paper, Scissors, Lizard or Spock. Once a button is pressed, the user's choice is made, the computer's choice is randomly decided, and the winner of the round is displayed.

The colour of the border matches the main page colour for consistency. When the user hovers over the buttons, the colour changes to highlight the choice the user is about to make. The hover color is green which contrasts with the primary design colour. This colour also matches the colour used for displaying the scores, again maintaining consistency and a robust UI design. As this game can also be played by children, I believe having the buttons displayed as pictures is more user friendly for all ages.

### Game Buttons - Default State


<h3 align="center"><img src="assets/images/screenshots/screenshot-game-buttons.png"></h3>


### Game Buttons - Hover State


<h3 align="center"><img src="assets/images/screenshots/screenshot-game-buttons-hover.png"></h3>


### Reset Button

At the end of the page there is a reset button. If a player wants to restart the game mid round they can click on the "Reset Game" button. Once clicked it clears the scores and sets the images and text back to the default settings. The reset button has a hover state which is the same as the background colour, keeping a consistent design across the page.

### Reset Button


<h3 align="center"><img src="assets/images/screenshots/screenshot-reset-button.png"></h3>


### Reset Button Hover


<h3 align="center"><img src="assets/images/screenshots/screenshot-reset-button-hover.png"></h3>


### Rules Panel

Not all users will know the rules to the game, or they may know the rules for the original game but not the Rock, Paper, Scissors, Lizard, Spock version. The rules are displayed below the main game area in a separate panel with a contrasting colour pallette for optimal readability. These allow the user to get to know the rules before the game begins, and are also available to the user at any stage during the game.


<h3 align="center"><img src="assets/images/screenshots/screenshot-game-rules.png"></h3>


## Future Features

- In future I would like to add add an option for the user to input their name before the game begins. In this way the user's score would include the user's name instead of the current generic username of 'You'. I would also like for their name to be used as part of the winner message. This adds an element of personalisation to the game and gives a more immersive user experience.

- Another idea I would like to implement is to store the computer player's choices as the game is being played. The most frequently chosen answer made by the computer would be displayed to help prompt the user to make a choice that would give the impression that they would have a better chance of winning each round, even though the computer choices are completely random. It would add to the enjoyment of the game as the user would believe they are making a more educated guess, despite their chances of winning not changing at all.


## Testing

- ### Testing: General

- I tested playing this game in different browsers: Chrome, Firefox and Safari to ensure that the game worked correctly in each.

- I tested the website on different screen-sizes and confirmed that this website is responsive on all screen sizes using the dev tools device tool bar.  I used media queries ...

- ### Testing: Functionality & Features

- I played the game numerous times and confirmed that the game results are always correct.

- I confirmed that the scores increment correctly.

- I confirmed that all the buttons work correctly: The Game buttons, the "Play Again" button and the "Reset" button.

- I confirmed that the "Winner Message" is displays the correct message when the player wins and when the computer wins.

- I confirmed that the correct images are displayed throughout the game.

- I confirmed that the correct text is displayed against the correcponding images.

- I confirmed that the hover states work correctly on all the buttons.

- I confirmed that the winner message is displayed correctly once either the player score or computer reaches 10. 

- ### Testing: Accessibility

-  I confirmed that all parts of the game are clearly visible and easy to read. This includes the header, the scores area, the images used, the buttons as well as any text displayed on the page. 

- I confirmed that the font and colours are accessible. I also chose contrasting colours to improve readability. 

- I used Lighthouse to check the accessibility of the website and the accessibility score was 100% on both desktop and mobile 


- ### Testing: Lighthouse - Desktop


<h3 align="center"><img src="assets/images/screenshots/screenshot-lighthouse-desktop.png"></h3>


- ### Testing: Lighthouse - Mobile


<h3 align="center"><img src="assets/images/screenshots/screenshot-lighthouse-mobile.png"></h3>

- ### Testing: Responsiveness

- I confirmed that this website is responsive on the below breakpoint sizes using Chrome Dev Tools.  
max-width: 768px 
max-width: 600px

- I tested common breakpoints of 375px, 600px, 768px, 1024px and above and achieved a consistent layout on all of the screen sizes using the media queries mentioned above.

- ### Validator Testing

- HTML

I tested my HTML code using the HTML Validator (https://validator.w3.org/). Results/ bugs are listed below.

- CSS

I tested my CSS code using the CSS Validator (https://jigsaw.w3.org/css-validator/). Results/ bugs are listed below.

- JavaScript

I tested my Java Script code using the JavaScript Validator (https://jshint.com/) Results/ bugs are listed below.


## Bugs

### CSS Bugs: Border Warning
When passing my code through the CSS Validator (https://jigsaw.w3.org/css-validator/) it returned the below bugs.

- On the reset button there was a warning. This was because I had set the border color and the background color to the same color. As these were both in black there was no way to distinguish between the two.

 - In order to remedy this I removed the border color from the reset button and instead added it to the reset button hover state. As the reset color turns pink when in a hover state and the border is black, these contrast well with one another and the border is clearly visible.


<h3 align="center"><img src="assets/images/screenshots/screenshot-bug-css-border-warnings.png"></h3>


- ### HTML Bugs: Empty Heading Warning

When cheking my code on the HTML Validator (https://validator.w3.org/), it returned the below bug.

- On line 109 in the HTML file I had an empty h2 element. 

- In order to fix this bug I added in some placeholder text "And the winner is..." to ensure that this did not remain as an empty heading in the code. 

<h3 align="center"><img src="assets/images/screenshots/screenshot-bug-empty-header.png"></h3>

JavaScript https://jshint.com/


There were 2 unusued variables found

Two unused variables
5	winnerExplanation
6	winner

Metrics
Metrics
There are 8 functions in this file.

Function with the largest signature take 2 arguments, while the median is 0.

Largest function has 48 statements in it, while the median is 5.

The most complex function has a cyclomatic complexity value of 44 while the median is 1.5.
## Unfixed bugs

- There are no unfixed bugs

