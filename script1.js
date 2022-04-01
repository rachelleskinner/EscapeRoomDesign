var x = document.getElementById("incorrectAudio");
var y = document.getElementById("correctAudio");

function checkAnswer() {
  var a = document.getElementById("textBox");
  var password = a.value.toUpperCase();
  
  if (password == "KHUFU TOMB") {
    //plays correct sound and waits 4 sec (to let sound play) then shows correctWindow
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