function allClear() {
  const all = document.getElementById("outputScreen");
  all.value = "";
}

function del() {
  document.getElementById("outputScreen").value = document
    .getElementById("outputScreen")
    .value.slice(0, -1);
}

function display(newValue) {
  document.getElementById("outputScreen").value += newValue;
}
function calculate() {
  const a = document.getElementById("outputScreen").value;
  var b = eval(a);
  document.getElementById("outputScreen").value = b;
}
