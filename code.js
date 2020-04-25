
var startBtn = document.querySelector(".myBtn");
var divTags = document.querySelectorAll("div");
var h2Tags = document.querySelectorAll("h2");
var pTags = document.querySelectorAll("p");



function firstQuestion()
{
    h2Tags[0].textContent = "What does HTML stand for?"
    pTags[0].textContent = "" 
    console.log("why");
}
//HyperText Mark-Up Language

startBtn.addEventListener("click", function() {
    console.log("hi");
    firstQuestion();
   


});