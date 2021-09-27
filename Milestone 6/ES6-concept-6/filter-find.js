/**
 * System One
 */

const numbers = [15, 30, 12, 16, 40, 3, 50, 25];
const bigNumbers = numbers.filter(ele => ele > 20);
const smallNumbers = numbers.filter(ele => ele < 20);

console.log(bigNumbers);
console.log(smallNumbers);

/**
 * System Two
 */

const products = [
    { name: 'Mobile phone', price: 15000, color: 'white' },
    { name: 'Key-board', price: 600, color: 'black' },
    { name: 'Smart watch', price: 3000, color: 'black' },
    { name: 'Sticky note', price: 30, color: 'pink' },
    { name: 'School bag', price: 550, color: 'pink' }
]

// filter() return an array with elements
const smallPrice = products.filter(product => product.price < 10000);
const blacks = products.filter(product => product.color == "black");

// find() return only first element
const pinkItems = products.find(product => product.color == "pink");

console.log(smallPrice);
console.log(blacks);
console.log(pinkItems);