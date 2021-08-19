const numbers = [5, 2, 8, 9, 15, 11, 17, 20, 6];

/**
 * slice (start Index, end Index)
 */

const slice = numbers.slice(2, 7);
// console.log(slice);
// console.log(numbers); // not change the original array

/**
 * splice (start index , delete count)
 */

// const splice = numbers.splice(2, 3);
// console.log(splice);
// console.log(numbers); // change the original array

/**
 * splice (start index , delete count, inject new elements)
 */

const splice2 = numbers.splice(2, 3, 555, 777, 999);
console.log(splice2);
console.log(numbers); // change the original array
