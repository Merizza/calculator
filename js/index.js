var box = document.getElementById("display");

function toScreen(x) {
  x==="c" ? box.value="" : box.value+=x;
}

function power() {
  x = box.value;
  x = Math.pow(x, 2);
  box.value = x;
}

function equals() {
  x = box.value;
  x = eval(x);
  box.value = x;
}

function backspace() {
  var numbers = box.value;
  var len = numbers.length - 1;
  var newNum = numbers.substring(0, len);
  box.value = newNum;
}