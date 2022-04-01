var x = document.getElementById("incorrectAudio");
var y = document.getElementById("correctAudio");

var a = document.getElementById("ankh");
var b = document.getElementById("eye");
var c = document.getElementById("ra");
var d = document.getElementById("djed");

//changes the img opacity based on which one the user clicks. choosenImg's values corespond with if statement in answer() 
var choosenImg = 0;
function chosenSymbola(){
  a.style.opacity="1.0";
  choosenImg = 1;
}
function chosenSymbolb(){
  b.style.opacity="1.0";
  choosenImg = 2;
}
function chosenSymbolc(){
  c.style.opacity="1.0";
  choosenImg = 3;
}
function chosenSymbold(){
  d.style.opacity="1.0";
  choosenImg = 4;
}
//count is for the user to see how many times they have clicked the button
var count = 0;
var stoneBtn = document.getElementById("stoneButton");
var resetBtn = document.getElementById("resetButton")
var disp = document.getElementById("display");
  
stoneBtn.onclick = function () {
//on click, increase count by 1 and make it display the current count
count++;
disp.innerHTML = count;
}
resetBtn.onclick = function () {
  //put everything back to deafult
  count=0;
  disp.innerHTML = count;
  choosenImg = 0;
  a.style.opacity="0.5";
  b.style.opacity="0.5";
  c.style.opacity="0.5";
  d.style.opacity="0.5";
}

let timeout;
function answer(){
 if(count==9 && choosenImg==3){
  y.play;
  timeout = setTimeout(correctWindow, 4000);
 }
  else{
  x.play;
  alert("Incorrect! Please try again.")
  }
}

function correctWindow(){
  alert("You've unlocked the door!")
  document.getElementById("escapeBtn").style.display="block";
}