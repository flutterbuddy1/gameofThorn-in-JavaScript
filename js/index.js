// Getting ALl Cards
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
const card6 = document.getElementById("card6");
const card7 = document.getElementById("card7");
const card8 = document.getElementById("card8");
const card9 = document.getElementById("card9");
const card10 = document.getElementById("card10");
// Getting all checkboxes
const char1 = document.getElementById("char1");
const char2 = document.getElementById("char2");
const char3 = document.getElementById("char3");
const char4 = document.getElementById("char4");
const char5 = document.getElementById("char5");
const flag1 = document.getElementById("flag1");
const flag2 = document.getElementById("flag2");
const flag3 = document.getElementById("flag3");
const flag4 = document.getElementById("flag4");
const flag5 = document.getElementById("flag5");

char1.addEventListener("click", function () {
  if (char1.checked == true) {
    card1.style.border = "5px solid #62ABD9";
  } else {
    card1.style.border = "2px solid black";
  }
  checkAll();
});

char2.addEventListener("click", function () {
  if (char2.checked == true) {
    card2.style.border = "5px solid #62ABD9";
  } else {
    card2.style.border = "2px solid black";
  }
  checkAll();
});

char3.addEventListener("click", function () {
  if (char3.checked == true) {
    card3.style.border = "5px solid #62ABD9";
  } else {
    card3.style.border = "2px solid black";
  }
  checkAll();
});
char4.addEventListener("click", function () {
  if (char4.checked == true) {
    card4.style.border = "5px solid #62ABD9";
  } else {
    card4.style.border = "2px solid black";
  }
  checkAll();
});
char5.addEventListener("click", function () {
  if (char5.checked == true) {
    card5.style.border = "5px solid #62ABD9";
  } else {
    card5.style.border = "2px solid black";
  }
  checkAll();
});
flag1.addEventListener("click", function () {
  if (flag1.checked == true) {
    card6.style.border = "5px solid #62ABD9";
  } else {
    card6.style.border = "2px solid black";
  }
  checkAll();
});
flag2.addEventListener("click", function () {
  if (flag2.checked == true) {
    card7.style.border = "5px solid #62ABD9";
  } else {
    card7.style.border = "2px solid black";
  }
  checkAll();
});
flag3.addEventListener("click", function () {
  if (flag3.checked == true) {
    card8.style.border = "5px solid #62ABD9";
  } else {
    card8.style.border = "2px solid black";
  }
  checkAll();
});
flag4.addEventListener("click", function () {
  if (flag4.checked == true) {
    card9.style.border = "5px solid #62ABD9";
  } else {
    card9.style.border = "2px solid black";
  }
  checkAll();
});
flag5.addEventListener("click", function () {
  if (flag5.checked == true) {
    card10.style.border = "5px solid #62ABD9";
  } else {
    card10.style.border = "2px solid black";
  }
  checkAll();
});

function checkAll() {
  var total = 0;
  var elements = [];
  for (var i = 0; i < 10; i++) {
    if (document.getElementsByClassName("check")[i].checked) {
      total++;
      elements.push(i);
      if (total == 2) {
        document.getElementsByClassName("play_button");
        var str = "board.html?" + elements[0] + "?";
        window.location.href = str + elements[1];
      }
    }
  }
} /*
const check = document.querySelector(".check");
check.addEventListener("click", function () {
  let character = document.getElementsByName("character");
  let count = 0;
  for (var i = 1; i < character.length; i++) {
    if (character[i].checked == true) {
      count = count + 1;
      window.location.href = "board.html";
    }
  }
  if (count >= 2) {
    window.location.href = "board.html";
  }
});
*/
