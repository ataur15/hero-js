const money: number = 200;
const honey: string = "Hello Honey";
const funny: boolean = true;

/**
 * If return something from the function
 */

function add (first:number, second:number): number {
    const reslult = first + second;
    return reslult;
}

let output: number = add(10, 20);
console.log('Normal function output:', output);

/**
 * If something is not return from the function
 */

function justConsole (name: string): void {
    console.log(name);
}

justConsole("Abdul Motin");
