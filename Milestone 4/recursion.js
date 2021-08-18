/**
 * Normal for loop
 */

let sum = 0;
for (let i = 6; i >= 1; i--) {
    sum = sum + i;
}
//console.log(sum);

/**
 * Recursion of sum
 *
 * @param {*} i
 * @returns
 */

function recursion (i) {
    if (i == 1) {
        return 1;
    }
    return recursion(i-1) + i;
}

// 1 + 2 + 3 + 4 + 5 + 6;

let result = recursion(6);
//console.log(result);

/**
 * Recursion of Factorial
 * 6! = 6 x 5 x 4 x 3 x 2 x 1
 *
 * @param {*} i
 * @returns
 */

function factorialRecursion (i) {
    if (i == 1) {
        return 1;
    }
    return factorialRecursion(i-1) * i;
}

// 1 * 2 * 3 * 4 * 5 * 6

let factorialResult = factorialRecursion(6);
//console.log(factorialResult);

/**
 * Fibonacci Series
 * [0, 1, 1, 2, 3, 5, 8, 13]
 */

let fibo = [0, 1];
for (let i = 2; i <= 6; i++) {
    // fibo[2] = fibo[1] + fibo[0];
    // fibo[3] = fibo[2] + fibo[1];
    // fibo[4] = fibo[3] + fibo[2];
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);

/**
 * Recursion of Fibonacci Series
 * Fibonacci Series
 * [0, 1, 1, 2, 3, 5, 8, 13]
 *
 * @param {*} i
 * @returns array element of 6 number position
 */

function fibonacciRecursion (i) {
    if (i == 0) {
        return 0;
    }
    if (i == 1) {
        return 1;
    }
    return fibonacciRecursion(i - 1) + fibonacciRecursion(i - 2);
}

console.log(fibonacciRecursion(6));