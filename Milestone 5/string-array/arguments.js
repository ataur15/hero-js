function addNumbers (num1, num2) {
    // console.log(arguments);
    let result = 0;
    for (const sum of arguments) {
        result = result + sum;
    }
    return result;
}

let resultSum = addNumbers(15, 20, 50, 70, 100);
console.log(resultSum);