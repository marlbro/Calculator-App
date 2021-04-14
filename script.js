"use strict";

// html elements
const input = document.querySelector(".input");

let calc_buttons = [];

const clear = {
  name: "delete",
  symbol: "CLEAR",
  formula: false,
  type: "key",
};

const multiply = {
  name: "multiplication",
  symbol: "x",
  formula: "*",
  type: "operator",
};

const add = {
  name: "addition",
  symbol: "+",
  formula: "+",
  type: "operator",
};

const divide = {
  name: "division",
  symbol: "÷",
  formula: "/",
  type: "operator",
};

const subtract = {
  name: "subtraction",
  symbol: "-",
  formula: "-",
  type: "operator",
};

const calculate = {
  name: "calculate",
  symbol: "=",
  formula: "=",
  type: "calculate",
};

calc_buttons.push(clear, multiply, add, subtract, divide, calculate);

console.log(calc_buttons);

// const [key, value] = numbers
// console.log(key, value)

const btns_per_row = 4;
let added_btns = 0;

calc_buttons.forEach((button, index) => {
  if (added_btns % btns_per_row == 0) {
    document.querySelector(".input").innerHTML += `<div class="row"></div>`;
  }

  document.querySelector(
    ".row:last-child"
  ).innerHTML += `<button id="${button.name}">${button.symbol}</button>`;

  added_btns++;
});

input.addEventListener("click", (event) => {
  const target_btn = event.target;
  calc_buttons.forEach((button) => {
    if (button.name == target_btn.id) calculator(button);
  });
});

let data = {
  operation: [],
  result: [],
};

/*

*/

// responsive to a keypad & keyboard numbers
