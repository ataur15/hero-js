const numbers = [4, 6, 8, 10];

/**
 * System One
 */

const output1 = [];
const doubleIt = (number) => number * 2;

for (i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const result = doubleIt(number);
    output1.push(result);
}

console.log(output1);

/**
 * System Two
 */

const output2 = numbers.map((ele) => ele * 2);
console.log(output2);

/**
 * System Three
 */

const products = [
    { name: 'Mobile Phone', price: 15000, color: 'white' },
    { name: 'Key-board', price: 600, color: 'black' },
    { name: 'Smart watch', price: 3000, color: 'black' },
    { name: 'Sticky note', price: 30, color: 'yellow' }
]

const productNames = products.map(product => product.name);
console.log(productNames);