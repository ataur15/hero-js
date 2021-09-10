/**
 * Normal function
 */

function addNew (num1: number, num2: number):number {
    const result = num1 + num2;
    return result;
}
let output2: number = addNew(40, 50);
console.log('Normal function output:', output2);

/**
 * Arrow function
 */

const doMath = (num1: number, num2: number):number => num1 + num2;
let output3: number = doMath(80, 20);
console.log('Arrow function output:', output3);
