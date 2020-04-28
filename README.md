# CodeQuiz

PseudoCode:

On the home page
    - Highscore page left upper corner 
    - Timer set to zero right upper corner
    - First div (probably one in HTML) with rules and start button

You click start button to start quiz.

Then questions pop up
    - Do I replace/clear the div? Or create a selector?
    - There's a question and then four buttons with choices
    - When I click the right answer it changes tally +1, tells you "correct" and moves to the next question (if, else? Or if, if else?)
    - When I click any of the wrong answers it changes tally -1, tells you "wrong" and moves to the next question 
    - this goes through all of the questions (five questions)
    - There is a timer counting down 60 seconds. If it reaches 0 it changes wrong tally -1 for each question not answered

At the end of the questions "you finish" and your score. This score needs to be locally logged and then added to high score list.

If you click on high score list it will show you those scores
    - You keep adding to object? 

You can clear the high score list.

Real code:

Created variables needed including:
    - timeTrack: Every time a question is answered (right or wrong), this is subtracted from. This is then taken from the score at the end. The purpose of this is so that if the timer runs out the score subtracts a point from questions not answered.
    - questionNumber: Every time a question is answered (right or wrong), this is added to. This keeps track of what question we're on so the correct function runs.

Created my setTime function. This counts down until the timer reaches 0. If it reaches zero, it calls function allDone, which goes automatically to the add done page and subtracts timeTrack from score.

Created function firstQuestion, which adds all of the nodes needed for the first question and sets all the wrong answer button's value to "false" and the right answer button's value to "true". This will be used in the rightWrong function. It also calls the setTime function so that the timer starts when the first question is pulled up.

Created function rightWrong with a parameter parButton. It states that if the value of the parameter is true, then you add to the score and the questionNumber, and subtract from the timeTrack. It is the opposite if the value is value -- and it subtracts multiple from secondsLeft. Then it has a series of if's that runs question number functions (or the allDone page) based on the value of the variable questionNumber.

Created a series of question functions that changes the text in the question and the answer buttons and resets the values to reflect which answer is correct.

Created function allDone that brings up the allDone page. It starts with secondsLeft = secondsLeft - secondsLeft-1 since I was coming to an error that if I set seconds left to 0 it went negative. If I didn't set it at all it would keep counting down - even if I tried to change the textContent or removeChild it. But by setting secondsLeft to 1 when you get to allDone fixed that issue without causing trauma to setTime. This also added the form where you submit your initials.

Created function highScorepage that parses the initials and the score into variable scoreList. The scoreList is then pushed to keepScores. The initials and score are put into the localStorage with the submitButton. Was having issue that the array came out all next to each other so I joined in a break. Removed the forms, and added the necessary buttons.

function startPage restarts everything over by the go back button being pressed. The numerical variables being are reset and it looks just like it does when you first open the page.

added event listener for the submit button, which is in the all done page. This uses the value put into the form and the score and puts them into an array. Then it takes the array and puts it into local storage. And it runs the highScorePage function.

added event listener for clear high score button, found in high score page. This clears local storages and empties out the keepScores array and removes all text from the p that held the scores.

The go back button, found in high score page, clears local storage and runs the start pages.

The start button, found in the home page, runs function first question.

Then there are a series of event Listeners that are connected to the answer buttons that run the rightWrong button.

