"use strict";
/**
 * Normal function
 */
function addNew(num1, num2) {
    const result = num1 + num2;
    return result;
}
let output2 = addNew(40, 50);
console.log('Normal function output:', output2);
/**
 * Arrow function
 */
const doMath = (num1, num2) => num1 + num2;
let output3 = doMath(80, 20);
console.log('Arrow function output:', output3);
