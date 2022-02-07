/*
Higher order function holo emon ekta function jeta onno function er upor kaj kore.
Seta hote pare onno function ke parameter hisebe niye othoba onno function ke return kore diye.
*/

// Higher order function
function hello() {
    return function () {
        console.log('Hello World');
    }
}
hello()();


// Example 1 without higher order function
const numbers1 = [2, 5, 7, 10];

const result1 = [];

for (let i = 0; i < numbers1.length; i++) {
    result1.push(numbers1[i] * 2);
}
console.log(result1);


// Example 1 with higher order function
const numbers2 = [2, 5, 7, 10];

const result2 = numbers2.map((number) => {
    return number * 2;
});
console.log(result2);
