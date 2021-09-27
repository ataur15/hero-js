/**
 * Sorting simple numbers
 */

const numbers = [5, 7, 1, 9, 6, 2, 4, 3, 8];
const sorted = numbers.sort();
// console.log(sorted);

/**
 * Sorting big numbers
 */

const bigNumbers = [70, 45, 56, 120, 700, 80, 90, 76, 69, 30];
// const sortedBigNumber = bigNumbers.sort();
const sortedBigNumber = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumber);