
var startBtn = document.querySelector(".myBtn");
var divTags = document.querySelectorAll("div");
var h2Tags = document.querySelectorAll("h2");
var pTags = document.querySelectorAll("p");
var button1 = document.querySelector(".btn");
var questDiv = document.createElement("div");

var p1 = document.createElement("p");
var p2 = document.createElement("p");
var p3 = document.createElement("p");
var p4 = document.createElement("p");


var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");







function firstQuestion()
{
    h2Tags[0].textContent = "What does HTML stand for?"
    pTags[0].textContent = "" 
    divTags[0].appendChild(questDiv);

    questDiv.appendChild(p1);
    questDiv.appendChild(p2);
    questDiv.appendChild(p3);
    questDiv.appendChild(p4);

    questDiv.children[0].appendChild(button1);
    questDiv.children[1].appendChild(button2);
    questDiv.children[2].appendChild(button3);
    questDiv.children[3].appendChild(button4);

    button1.setAttribute("style", "background-color: blueviolet; color: white; padding: 6px 12px; border-radius: 25px;");
    button2.setAttribute("style", "background-color: blueviolet; color: white; padding: 6px 12px; border-radius: 25px;");
    button3.setAttribute("style", "background-color: blueviolet; color: white; padding: 6px 12px; border-radius: 25px;");
    button4.setAttribute("style", "background-color: blueviolet; color: white; padding: 6px 12px; border-radius: 25px;");

    button1.textContent = "1. HyperText Mark-Up Language"
    button2.textContent = "2. Hyper Technical Mark-Up Language"
    button3.textContent = "3. Href Text Mark-Up Language"
    button4.textContent = "4. Href Technical Mark-Up Language"

    
}


startBtn.addEventListener("click", function() {
    console.log("hi");
    firstQuestion();

});