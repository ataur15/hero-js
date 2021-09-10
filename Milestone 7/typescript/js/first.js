"use strict";
const money = 200;
const honey = "Hello Honey";
const funny = true;
/**
 * If return something from the function
 */
function add(first, second) {
    const reslult = first + second;
    return reslult;
}
let output = add(10, 20);
console.log('Normal function output:', output);
/**
 * If something is not return from the function
 */
function justConsole(name) {
    console.log(name);
}
justConsole("Abdul Motin");
