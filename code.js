
var startBtn = document.querySelector(".myBtn");
var divTags = document.querySelectorAll("div");
var h2Tags = document.querySelectorAll("h2");
var pTags = document.querySelectorAll("p");
var questDiv = document.createElement("div");
var timeEl = document.querySelector("#time");
var scoreForm = document.createElement("form");
var highTime = document.querySelectorAll("h5");

var secondsLeft = 60;
var score = 0;
var timeTrack = 5;
var questionNumber = 0;
var highScore = score - timeTrack;

// var initials = scoreInput.value;
    // var scoreObject = {
        // initals : highScore,
    // }

/*
var wrongText = document.createElement("p");
var correctText = document.createElement("p");
wrongText.textContent = "Wrong"
correctText.textContent = "Correct"
wrongText.setAttribute("style", "border-top: solid 2px gray; font-style: italic; visibility: hidden;");
correctText.setAttribute("style","border-top: solid 2px gray; font-style: italic; visibility: hidden;");
*/

var p1 = document.createElement("p");
var p2 = document.createElement("p");
var p3 = document.createElement("p");
var p4 = document.createElement("p");

var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");

var submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "submit");
submitButton.setAttribute("style", "background-color: blueviolet;");

var goBackButton = document.createElement("button");
goBackButton.setAttribute("style", "background-color: blueviolet;");
goBackButton.textContent = "Go Back"
var clearHighScoreButton = document.createElement("button");
clearHighScoreButton.setAttribute("style", "background-color: blueviolet;");
clearHighScoreButton.textContent = "Clear Scores"

var keepScores = [];

var scoreInput = document.createElement("input");
    var labelInput = document.createElement("label");
    scoreInput.setAttribute("type", "text");
    labelInput.setAttribute("for", "Score")
    labelInput.textContent = "Enter initials: "

function setTime () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            timeEl.textContent = "Time: 0";
            console.log("time up");
            allDone();
            
            
        }

    }, 1000);
}



function firstQuestion() {
    h2Tags[0].textContent = "What does HTML stand for?"
    pTags[0].textContent = "" 
    divTags[0].removeChild(divTags[0].children[2])
    divTags[0].appendChild(questDiv);

    questDiv.appendChild(p1);
    questDiv.appendChild(p2);
    questDiv.appendChild(p3);
    questDiv.appendChild(p4);

    questDiv.children[0].appendChild(button1);
    questDiv.children[1].appendChild(button2);
    questDiv.children[2].appendChild(button3);
    questDiv.children[3].appendChild(button4);
    // questDiv.appendChild(correctText);
    // questDiv.appendChild(wrongText);

    button1.setAttribute("style", "background-color: blueviolet; color: white; padding: 6px 12px; border-radius: 25px;");
    button2.setAttribute("style", "background-color: blueviolet; color: white; padding: 6px 12px; border-radius: 25px;");
    button3.setAttribute("style", "background-color: blueviolet; color: white; padding: 6px 12px; border-radius: 25px;");
    button4.setAttribute("style", "background-color: blueviolet; color: white; padding: 6px 12px; border-radius: 25px;");

    button1.textContent = "1. HyperText Mark-Up Language"
    button2.textContent = "2. Hyper Technical Mark-Up Language"
    button3.textContent = "3. Href Text Mark-Up Language"
    button4.textContent = "4. Href Technical Mark-Up Language"

    button1.value = "true"
    button2.value = "false"
    button3.value = "false"
    button4.value = "false"
    console.log(button1.value);

    

    setTime();
}

function rightWrong(parButton) {
    if (parButton.value === "true") {  
       
        score++
        questionNumber++
        timeTrack--
        
    }
    else if (parButton.value === "false") {
            
            score--
            questionNumber++
            timeTrack--
            secondsLeft--
            secondsLeft--
            secondsLeft--
            secondsLeft--
            secondsLeft--
            secondsLeft--
           
    }
    
    if (questionNumber === 1) {
        secondQuestion();
    }
    if (questionNumber === 2) {
        thirdQuestion();
    }
    if (questionNumber === 3) {
        fourthQuestion();
    }
    if (questionNumber === 4) {
        fifthQuestion();
    }
    if (questionNumber === 5) {
        allDone();
    }
}



function secondQuestion() {

    h2Tags[0].textContent = "Commonly used data types DO NOT include:"

    button1.textContent = "1. strings"
    button2.textContent = "2. alerts"
    button3.textContent = "3. booleans"
    button4.textContent = "4. numbers"

    button1.value = "false"
    button2.value = "true"
    button3.value = "false"
    button4.value = "false"

}
function thirdQuestion() {

    h2Tags[0].textContent = "The condition in an if/else statement is enclosed within___."

    button1.textContent = "1. quotes"
    button2.textContent = "2. curly brackets"
    button3.textContent = "3. parentheses"
    button4.textContent = "4. square brackets"

    button1.value = "false"
    button2.value = "false"
    button3.value = "true"
    button4.value = "false"

}

function fourthQuestion() {

    h2Tags[0].textContent = "String values must be enclosed within ____ when being assigned to variables."

    button1.textContent = "1. commas"
    button2.textContent = "2. curly brackets"
    button3.textContent = "3. parentheses"
    button4.textContent = "4. quotes"

    button1.value = "false"
    button2.value = "false"
    button3.value = "false"
    button4.value = "true"

}

function fifthQuestion() {

    h2Tags[0].textContent = "Arrays in JavaScript can be used to store ____."

    button1.textContent = "1. numbers and strings"
    button2.textContent = "2. other arrays"
    button3.textContent = "3. booleans"
    button4.textContent = "4. all of the above"

    button1.value = "false"
    button2.value = "false"
    button3.value = "false"
    button4.value = "true"

}

function allDone() {

    secondsLeft = secondsLeft - (secondsLeft - 1)
    console.log("this is" + secondsLeft);
    h2Tags[0].textContent = "All done!"
    var highScore = score - timeTrack
    pTags[0].textContent = "Your final score is " + highScore 
    

    questDiv.children[0].removeChild(button1);
    questDiv.children[1].removeChild(button2);
    questDiv.children[2].removeChild(button3);
    questDiv.children[3].removeChild(button4);

    questDiv.removeChild(p1);
    questDiv.removeChild(p2);
    questDiv.removeChild(p3);
    questDiv.removeChild(p4);

    questDiv.appendChild(scoreForm);
    // var scoreInput = document.createElement("input");
    // var labelInput = document.createElement("label");
    // scoreInput.setAttribute("type", "text");
    // labelInput.setAttribute("for", "Score")
    // labelInput.textContent = "Enter initials: "
    // var submitButton = document.createElement("button");
    // submitButton.textContent = "Submit"
    // submitButton.setAttribute("style", "background-color: blueviolet;");

    questDiv.children[0].appendChild(labelInput);
    questDiv.children[0].appendChild(scoreInput);
    questDiv.children[0].appendChild(submitButton);


    /*
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        
        var scoreObject = {
            labelInput: highScore,
        }

    localStorage.setItem("scoreObject", JSON.stringify(scoreObject));

        });
        */
        

    // var lastUser = JSON.parse(localStorage.getItem("user"));


    
}

function highScorePage() {
    // var keepScores = [];
    console.log(keepScores);
    var scoreList = JSON.parse(localStorage.getItem("scoreArray"));
    keepScores.push(scoreList);
    var newList = keepScores.join(" <br> ");
    console.log(newList)
    
    h2Tags[0].textContent = "Highscores"
    highTime[0].textContent = ""
    highTime[1].textContent = ""
    pTags[0].innerHTML = newList
    
    

    questDiv.children[0].removeChild(labelInput);
    questDiv.children[0].removeChild(scoreInput);
    questDiv.children[0].removeChild(submitButton);
    questDiv.removeChild(scoreForm);

    divTags[0].appendChild(goBackButton);
    divTags[0].appendChild(clearHighScoreButton);
    

    

}

function startPage() {
    h2Tags[0].textContent = "Coding Quiz Challenge!"
    highTime[0].textContent = "View HighScores"
    highTime[1].textContent = "Time: 0"
    pTags[0].textContent = "Take our challenge! Do you know coding as well as well as you think you do? Answer correctly and you'll get points! Answer incorrectly and you'll get points (and time!!) taken away! Any questions you don't answer are negative points! Add your incredible score to our high scores so you can compete against youself! You have 60 seconds to take the quiz." 
    divTags[0].removeChild(goBackButton);
    divTags[0].removeChild(clearHighScoreButton);
    divTags[0].removeChild(questDiv);
    divTags[0].appendChild(startBtn);
    secondsLeft = 60;
    score = 0;
    timeTrack = 5;
    questionNumber = 0;
}


submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(scoreInput.value);
    var scream = scoreInput.value;
    var highScore = score - timeTrack
    var scoreArray = [scream, highScore]
    
    // questDiv.children[0].removeChild(labelInput);
    // questDiv.children[0].removeChild(scoreInput);
    // questDiv.children[0].removeChild(submitButton);
    // questDiv.removeChild(scoreForm);
    localStorage.setItem("scoreArray", JSON.stringify(scoreArray));

    highScorePage();

}); 

clearHighScoreButton.addEventListener("click", function() {
    event.preventDefault();
    localStorage.clear();
    pTags[0].innerHTML = ""
    keepScores = []
    console.log(keepScores);
    
});


goBackButton.addEventListener("click", function() {
    event.preventDefault();
    startPage();
    localStorage.clear();
    
    
});

startBtn.addEventListener("click", function() {
    event.preventDefault();
    firstQuestion();
    
});

button1.addEventListener("click", function() {
    event.preventDefault();
    rightWrong(button1);
    
    

});

button2.addEventListener("click", function() {
    event.preventDefault();
    rightWrong(button2)
    
});

button3.addEventListener("click", function() {
    event.preventDefault();
    rightWrong(button3);
    
});

button4.addEventListener("click", function() {
    event.preventDefault();
    rightWrong(button4);
    

});