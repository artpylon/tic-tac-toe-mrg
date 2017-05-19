
Creator: Matt Gray
Date: 5/18/17
Public URL: artpylon.github.io/tic-tac-toe-mrg

Public Trello Board: https://trello.com/b/So4zIsSQ/wdi-1-tic-tac-toe
Wireframes: https://drive.google.com/drive/folders/0BxtpRPyddhwRUmh2LWh5eHZOdzQ?usp=sharing

USER STORIES:

*AUTH:*

CREATE ACCOUNT:
As a user, I would like to create an account, so that I can login and play the game.
Acceptance criteria:
- Creating an account should also log that user in.

LOGIN:
As a user, I would like to be able to login, so that I can play the game and the results of my games may be tracked and stored with my account.

LOGOUT:
As a user, I would like to logout after completing a session, so that others who use my computer do not play on my account.

CHANGE PASSWORD:
As a user, I would like to be able to change my password, so that I can login using a new password

*GAMEPLAY:*

GAMEBOARD:
As a user, I would like to have an interactive game board, so that I and another player can play tic-tac-toe.
Acceptance criteria:
- Game board should have a 3x3 grid of selectable tiles
- Tiles should only be selectable when a game has been started
- Tiles should only be selectable on a player's turn, by that player

START GAME:
As a logged in user, I would like to be able to start a new game, so that I can play tic-tac-toe.
Acceptance Criteria:
- Only logged in users may start games
- User should be able to start a subsequent game after completing the first

SELECT TILE:
As a logged in user who has started a game, I would like to be able to select a tile on the game board, so that I can play the game.
Acceptance criteria:
- Only logged in users may select tiles on the game board
- Once a tile has been selected, it may not be selected again until a new game is started
- When a tile is selected, the user should be given visual feedback that they now occupy that tile, i.e. tile is filled with a large x or o.
- The first tile selected on the gameboard is, by default, x

LOSE GAME:
As a logged in user who has started a game, I would like to know when I've lost a game, so that I can decide whether to play again and deal with the accompanying shame accordingly.
Acceptance criteria:
- User has lost a game with the other player in that game has selected 3 consecutive tiles.
- User should receive visual feedback that they have lost the game
- User should be prompted to play again
- Record of the user's loss should be stored with that user's account

WIN GAME:
As a logged in user who has started a game, I would like to know when I've won a game, so that I may brag about it.
Acceptance criteria:
- User wins a game when 3 consecutive tiles are occupied with that user's piece (x or o).
- Consecutive tiles are accepted vertically, horizontally, and diagonally.
- Record of the win should be stored with that user's account.
- User should receive visual feedback that they've won the game.
- User should be prompted to play again.

TIE GAME:
As a logged in user who has started a game, I would like to know when my game as resulted in a tie, so that I can decide whether to play again.
Acceptance criteria:
- A game is tied when all tiles on the gameboard are filled and neither player has successfully selected three consecutive tiles
- User should receive visual feedback that the game is complete and resulted in a tie.
- Record of the tie result should be stored in the user's account.
- User should be prompted to play again.

PLAY AGAIN:
As a logged in user, I would like to be presented with the option to play another game after completing one, so that I can continue playing.

USER STATS:
As a logged in user, I would like to see my stats, such as how many games I've played, so that I can keep track of my tic tac toe record over time.

--------------

Technologies Used:
- javascript
- single page application
- jquery
- API
- Ajax
- HTML/CSS
- bootstrap
- git/github

*Planning:*
I started the project by drawing simple wireframes on paper. This helped me take
stock of the set of user facing features needed to meet the requirements. Then,
I expanded on this by creating user stories on a Tello board. My trello board
has multiple 'epics', one for each major component of the app:

- Login/Authentication
- Gameboard/Logic
- User Stats

I also used trello to track bugs and nice-to-have features that came up while I
was coding the project. This was a very helpful method that helped me keep track
of what I was doing, what I should do next, and my progress.

*Process*
First, I setup the Authentication. And, found this came fairly quickly as it was
very similar to what we did together in class. At this time I also completed the
UI for sign up/sign in/sign out/change password. Thought I revisited some of that
UI logic after completing the game board.

After Auth was in a good place, I started working through the game actions in roughly
the order they would occur when playing the game. This order of operations seemed
best for testing the app as I worked. And, I tested constantly.

After the game was in reasonably good working order, I created a user stats section.

Then, I spent a day testing and bug fixing.

Feeling like the app was in a good place at this point to meet the basic requirements,
I spent some time personalizing the app with a Twin Peaks theme.

*Biggest issues while build the app:*
- API was not recognizing my patch at the end of game, I could not update over to true.
  I fixed this by switching from using true/false to using 1/0.
- The function that determines who won also required a lot my time. It kept identifying
  wrong winner. There were to primary issues, the function was being called out of
  order due to a preceding ajax call, and I needed to fix my return statements within
  the function.

I added functionality to the app using roughly the steps we used when working on the Books API exercise:
1. Test API Response - using URL in browser
2. Curl script that does the same test
3. HTML: Add necessary HTML/CSS elements. Then, test.
4. index.js: add event. Test.
5. event.js: add callback(s). Test again
6. Api.js: add API calls. Test.
7. Ui.js: add API response callbacks. Test again.

*Important skills acquired:*
- use of console.log to trace the source of a bug.
- solidify understanding of how to form curl and ajax request
- use of the developer tools to diagnose problems

*Unsolved problems for future iterations*
- Multi-device play
- Expanded statistics
- Thematic improvements
- Better use of callbacks
- Refactoring to make code more modular and easier to maintain
- Use of sass to improve CSS code
