function getNumber(num) {
  document.form.textview.value = document.form.textview.value + num;
}

function clearscreen() {
  document.form.textview.value = "";
}

function equals() {
  var exp = document.form.textview.value;
  if (exp) {
    document.form.textview.value = eval(exp);
  }
}

function log() {
  ans = Math.log10(document.getElementById("result").value);
  document.getElementById("result").value = ans;
}

function ln() {
  ans = Math.log(document.getElementById("result").value);
  document.getElementById("result").value = ans;
}

function square() {
  ans = Math.pow(document.getElementById("result").value, 2);
  document.getElementById("result").value = ans;
}

function sin() {
  ans = Math.sin(document.getElementById("result").value);

  document.getElementById("result").value = ans;
}

function cos() {
  ans = Math.cos(document.getElementById("result").value);
  document.getElementById("result").value = ans;
}

function tan() {
  ans = Math.tan(document.getElementById("result").value);
  document.getElementById("result").value = ans;
}

function pi() {
  if (document.getElementById("result").value == 0)
    document.getElementById("result").value = Math.PI;
  else
    document.getElementById("result").value =
      document.getElementById("result").value * Math.PI;
}

function backspace() {
  var value = document.getElementById("result").value;
  document.getElementById("result").value = value.substr(0, value.length - 1);
}

function pi() {
  if (document.getElementById("result").value == 0)
    document.getElementById("result").value = Math.PI;
  else
    document.getElementById("result").value =
      document.getElementById("result").value * Math.PI;
}

function sqrt() {
  ans = Math.sqrt(document.getElementById("result").value);
  document.getElementById("result").value = ans;
}

function exp() {
  if (document.getElementById("result").value == 0)
    document.getElementById("result").value = Math.E;
  else
    document.getElementById("result").value =
      document.getElementById("result").value * Math.E;
}
