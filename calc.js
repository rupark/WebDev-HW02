var mode = "add";
var prev = 0;

// Displays the given value
function display(val) {
  document.getElementById('display').innerHTML = val;
}

//Clears Display
function cleardis() {
  document.getElementById('display').innerHTML = "";
  prev = 0;
}

//Sets the mode; One of add, mult, div, sub
function set_mode(m) {
  mode = m;
  prev = document.getElementById('display').innerHTML;
  document.getElementById('display').innerHTML = "";
}

//Functionality when decimal button is hit
function decimal() {
  let cur_val = document.getElementById('display').innerHTML;
  document.getElementById('display').innerHTML = cur_val + ".";
}

//Handler for key press
function key_pressed(val) {
  let cur_val = document.getElementById('display').innerHTML;
  if (cur_val == 0) {
    document.getElementById('display').innerHTML = val;
  } else {
    document.getElementById('display').innerHTML = cur_val + val;
  }
}

//Handler for equals button
function equals() {
  if (prev == 0) {
    set_mode('add');
  } else {
  let cur_val = document.getElementById('display').innerHTML;
  if (cur_val == "") {
    document.getElementById('display').innerHTML = "";
  } else {
  if (mode == "add") {
    add(cur_val);
  } else if (mode == "sub") {
    subtract(cur_val);
  } else if (mode == "mult") {
    multiply(cur_val);
  } else {
    divide(cur_val);
  }
}
}
}

//Displays the result of add
function add(val) {
  display(parseFloat(prev) + parseFloat(val));
  prev = document.getElementById('display').innerHTML;
}

//Displays the result of subtract
function subtract(val) {
  display(parseFloat(prev) - parseFloat(val));
  prev = 0;
}

//Displays the result of divide
function divide(val) {
  display(parseFloat(prev) / parseFloat(val));
  prev = 0;
}

//Displays the result of multiply
function multiply(val) {
  display(parseFloat(prev) * parseFloat(val));
  prev = 0;
}
