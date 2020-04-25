
var startBtn = document.querySelector(".myBtn");
var nextBtn = document.querySelectorAll("button")



startBtn.addEventListener("click", function() {
    console.log("hi");
    nextBtn[0].setAttribute("style", "color: pink;");

});