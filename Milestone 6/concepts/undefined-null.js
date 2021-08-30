/**
 * Variable value not assigned
 */

let a;
console.log(a); // undefined

/**
 * function but didn't return anything
 */

function sum (x, y) {
    const result = x + y;
}
const output = sum(10, 25);
console.log(output); // undefined

/**
 * Property that doesn't exist in an object
 */

let user = { name: "abir", age: 25, location: "Dhaka" }
console.log(user.email);

/**
 * Accessing array element out of range
 */

let numbers = [2, 3, 8, 30];
console.log(numbers[5]);


/**
 * null is a special type that means there has no value
 */

const myObj = { name: "Rahim", profession: null };
console.log(myObj.profession);