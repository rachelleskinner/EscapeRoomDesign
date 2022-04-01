var x = document.getElementById("incorrectAudio");
var y = document.getElementById("correctAudio");

function incorrectButton() {
  x.play();
  alert("Incorrect! Please try again.");
}

let timeout;
//timeout is for when audio finishes playing, trigger correctWindow()
function correctButton() {
  y.play();
  timeout = setTimeout(correctWindow, 4000);
}
function correctWindow() {
  alert("Nice! There is a small piece of paper under his statue...");
  //makes elements appear 
  document.getElementById("reward").style.display = "block";
  document.getElementById("nextPuzzle").style.display = "block";
  document.getElementById("glyphs").style.display = "block";
}