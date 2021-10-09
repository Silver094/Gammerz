var Index = 0;
function javaslide() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  Index++;
  if (Index > x.length) {
    Index = 1;
  }
  x[Index - 1].style.display = "block";

  setTimeout(javaslide, 3000);
}

var intervalID;
var modal = document.getElementById("log");
window.onclick = function (Event) {
  if (event.target == log) {
    modal.style.display = "none";
  }
};

function handleOnSignInClick() {
  document.getElementById("log").style.display = "block";
  clearTimeout(intervalID);
}

function handleOnClose() {
  document.getElementById("log").style.display = "none";
  intervalID = setTimeout(javaslide, 3000);
}
function checkdetail() {
  var username = localStorage.getItem("username");
  var password = localStorage.getItem("password");
  if (
    document.content.uname.value === username &&
    document.content.password.value === password
  )
    window.open("Event.html");
  else alert("Wrong Input");
}
