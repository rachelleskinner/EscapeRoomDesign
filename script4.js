var x = document.getElementById("incorrectAudio");
var y = document.getElementById("correctAudio");

var playBtn = document.getElementById("play");
var a = document.getElementById("light");

//when play btn is clicked, play this sequence of animations at specific times
playBtn.onclick = function () {
  playBtn.style.display="none";
  setTimeout(morseOne, 1000);
  setTimeout(morseTwo, 10000);
  setTimeout(morseThree, 12500);
  setTimeout(morseFour, 19000);
  setTimeout(morseFive, 22500);
  setTimeout(morseSix, 28000);
  setTimeout(morseSeven, 31500);
  setTimeout(function(){playBtn.style.display="inline";}, 36000);
}

//morse code S
function morseOne(){ 
  a.style.animation="morseDotA 2s 3"; 
}

//morse code A
function morseTwo(){
  a.style.animation="morseDotB 2s 1"; 
}
function morseThree(){
  a.style.animation="morseDashA 3s 1";
}

//morse code N
function morseFour(){
  a.style.animation="morseDashB 3s 1";
}
function morseFive(){
  a.style.animation="morseDotC 2s 1";
}

//morse code D
function morseSix(){
  a.style.animation="morseDashC 3s 1";
}
function morseSeven(){
  a.style.animation="morseDotD 2s 2";
}

let timeout;
function checkAnswer() {
  var a = document.getElementById("textBox");
  var password = a.value.toUpperCase();
  
  if (password == "SAND") {
    y.play();
    timeout = setTimeout(correctWindow, 4000);
    return true;
  }
  x.play();
  alert("Incorrect! Please try again.");
  return false;
}

function correctWindow() {
  alert("Nice! You may proceed...");
  document.getElementById("reward").style.display = "block";
  document.getElementById("nextPuzzle").style.display = "block";
}