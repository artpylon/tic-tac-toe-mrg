
Creator: Matt Gray
Date: 5/18/17
Public URL: artpylon.github.io/tic-tac-toe-mrg
Public Trello Board: https://trello.com/b/So4zIsSQ/wdi-1-tic-tac-toe
Wireframes: https://drive.google.com/drive/folders/0BxtpRPyddhwRUmh2LWh5eHZOdzQ?usp=sharing

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
