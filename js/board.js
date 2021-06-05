var tr_fal = true;
var old = 0;
var old_1 = 0;
var old_2 = 0;
var ic1, ic2;
var diceNum;
var won1, won2;
const ref = document.getElementsByClassName("tile");
window.onload = function () {
  var url = document.location.href;
  params = url.split("?");
  ic1 = parseInt(params[1]) + 1;
  ic2 = parseInt(params[2]) + 1;
  ic1 = ic1 > 5 ? "flag" + (ic1 - 5) : "char" + ic1;
  ic2 = ic2 > 5 ? "flag" + (ic2 - 5) : "char" + ic2;
  won1 = ic1;
  won2 = ic2;
  ic1 = "<img class='img-thumbnail' src='img/" + ic1 + ".png'/>";
  ic2 = "<img class='img-thumbnail' src='img/" + ic2 + ".png'/>";
  ref[0].innerHTML = ic1;
  ref[0].innerHTML += ic2;

  ref[0].children[0].setAttribute("width", "50%");
  ref[0].children[1].setAttribute("width", "50%");

};

function roll() {
  diceNum = Math.floor(Math.random() * 6 + 1);
  document.getElementById("number").innerHTML = "Your Number <br> <h1>" + diceNum + "</h1 >";
  if (tr_fal) {
    if (old_1 + diceNum <= 29) {
      ref[old_1].innerHTML = "";
      if (old_2 === old_1) ref[old_2].innerHTML = ic2;
      numb(ref[old_1 + diceNum].innerText);
      old_1 = old_1 + diceNum;
      ref[old_1].innerHTML += ic1;
    }
  } else {
    if (old_2 + diceNum <= 29) {
      ref[old_2].innerHTML = "";
      if (old_2 === old_1) ref[old_1].innerHTML += ic1;
      numb(ref[old_2 + diceNum].innerText);
      old_2 = old_2 + diceNum;
      ref[old_2].innerHTML += ic2;
    }
  }
  if (old_1 == old_2) {
    ref[old_1].children[0].setAttribute("width", "50%");
    ref[old_1].children[1].setAttribute("width", "50%");
  }
  if (old_1 === 29) {
    window.location.href = "main.html?" + won1;
  }
  if (old_2 === 29) {
    window.location.href = "main.html?" + won2;
  }
  if (diceNum !== 6) tr_fal = !tr_fal;
  const player = document.querySelector(
    "body > div > div.player_area > h3:nth-child(2)"
  );
  if (tr_fal) {
    player.innerHTML = "Now Player 1's turn";
    if (old === 6 && diceNum === 6) {
      player.innerHTML = "Again Player 1's turn";
    }
  } else {
    player.innerHTML = "Now Player 2's turn";
    if (old === 6 && diceNum === 6) {
      player.innerHTML = "Again Player 2's turn";
    }
  }
  old = diceNum;
}

function numb(s) {
    console.log(s);
    let traps = document.querySelector("#out");
  if (s == "-1") {diceNum = diceNum - 1;
    traps.innerHTML = " <h4 class='text-danger text-center w-100'>Deanerys's Dragon bit you -1 </h4> "
  }else if (s == "-2") {diceNum = diceNum - 2;
    traps.innerHTML = "<h4 class='text-danger text-center w-100'>Deanerys's Dragon bit you -2 </h4> "
  }else if (s == "-3") {diceNum = diceNum - 3;
    traps.innerHTML = "<h4 class='text-danger text-center w-100'>Deanerys's Dragon bit you -3 </h4> "
  }else if (s == "-4") {diceNum = diceNum - 4;
    traps.innerHTML = "<h4 class='text-danger text-center w-100'>Deanerys's Dragon bit you -4 </h4> "
  }else if (s == "-5") {diceNum = diceNum - 5;
    traps.innerHTML = " <h4 class='text-danger text-center w-100'>Deanerys's Dragon bit you -5 </h4> "
  }else{
    traps.innerHTML = ""

  }
}
