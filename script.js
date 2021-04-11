"use strict";

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
  formula: "÷",
  type: "operator",
};

const subtract = {
  name: "subtraction",
  symbol: "-",
  formula: "-",
  type: "operator",
};

calc_buttons.push(clear, multiply, add, subtract, divide);

console.log(calc_buttons);

// const [key, value] = numbers
// console.log(key, value)

const btns_per_row = 4;

calc_buttons.forEach((button, index) => {});

/*

const subtract = function (oper) {};
const divide = function (oper) {};
const multiply = function (oper) {};

*/
// responsive to a keypad & keyboard numbers
