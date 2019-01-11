var _ = require('lodash');


console.log(_);
var css = document.querySelector("h3");
var colour1 = document.querySelector(".colour1");
var colour2 = document.querySelector(".colour2");
var body = document.getElementById("gradient");
var random = document.querySelector("button");


function startup(){
    body.style.background = "linear-gradient(to right, " + colour1.value + ", " + colour2.value + ")";
    css.textContent = body.style.background + ";";
}

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + colour1.value 
    + ", " 
    + colour2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function generateRandomBackground() {
    body.style.background = 
    "linear-gradient(to right, " 
    + "#"+((1<<24)*Math.random()|0).toString(16) 
    + ", " 
    + "#"+((1<<24)*Math.random()|0).toString(16)
    + ")";

    css.textContent = body.style.background + ";";
}

startup();

colour1.addEventListener("input", setGradient);

colour2.addEventListener("input", setGradient);

random.addEventListener("click", generateRandomBackground);