function add() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result = num1 + num2;
  document.getElementById("result").innerHTML = result;
}

function subtract() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result = num1 - num2;
  document.getElementById("result").innerHTML = result;
}

function mutiply() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result = num1 * num2;
  document.getElementById("result").innerHTML = result;
}

function Divided() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result = num1 / num2;
  document.getElementById("result").innerHTML = result;
}

function power() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result = Math.pow(num1, num2);
  document.getElementById("result").innerHTML = result;
}

function squarroot() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result = Math.sqrt(num1);
  document.getElementById("result").innerHTML = result;
}
