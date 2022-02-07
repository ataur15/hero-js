/**
 * Declare Three variables (string, number, boolean)
 */

var firstV = "My Variable";
var secondV = 10;
var thirdV = true;

/**
 * Declare Two variables let and const
 */

let myVar = 5;
myVar = 7;
const myConst = 50;
//console.log(myVar);

/**
 * Simple math operation +, -, /, *, %
 */

let sum1 = 5;
let sum2 = 6;
let sumResult = sum1 + sum2;
//console.log(sumResult);

let subtr1 = 10;
let subtr2 = 8;
let subtrResult = subtr1 - subtr2;
//console.log(subtrResult);

let multp1 = 6;
let multp2 = 7;
let multpResult = multp1 * multp2;
//console.log(multpResult);

let division1 = 15;
let division2 = 3;
let divisionResult = division1 / division2;
//console.log(divisionResult);

let modulus1 = 10;
let modulus2 = 5;
let modulusResult = modulus1 % modulus2;
//console.log(modulusResult);

/**
 * Comparison 2 variables and fulfill 2 conditions.
 * Task1 fulfill both conditions
 * Task2 fulfill one conditions
 */

let comp1 = 22;
let comp2 = 22;
if (comp1 === comp2 && comp1 <= comp2) {
    //console.log('True');
} else {
    //console.log('False');
}

let comp3 = 20;
let comp4 = 22;
if (comp3 === comp4 || comp3 <= comp4) {
    //console.log('True');
} else {
    //console.log('False');
}

/**
 * Using while loop and figure out the odd numbers between 7 to 19
 */

let i = 7;
while (i <= 19) {
    if (i % 2 == 1) {
        //console.log(i);
    }
    i++;
}

/**
 * array length
 * and 4th position update
 * add or remove elements
 * check specific value exists
 */

let names = ['karim', 'rahim', 'kabul', 'habul', 'abir'];
//console.log(names.length);
names[4] = 'Kasem';
names.push('Jahid');
//console.log(names);
if (names[2] == 'kabul') {
    //console.log('kabul ache');
}

/**
 * Use for loop to display array elements
 */

let phones = ['oppo', 'samsung', 'oneplus', 'symphony', 'xiaomi'];
for (const phone of phones) {
    //console.log(phone);
}

/**
 * Display the bigger number of an array.
 * Find out the numbers bigger than 80 of an array
 */

let numbers = [80, 100, 90, 88, 205, 115, 83];
let biggerNumb = Math.max(...numbers);
//console.log(biggerNumb);

let largeNum = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > 80) {
        largeNum = numbers[i];
    }
    //console.log(largeNum);
}

/**
 * Write a function that takes 3 number and returns multiplication of these numbers
 */

function multiply(num1, num2, num3) {
    const result = num1 * num2 * num3
    return result;
}

const finalResult = multiply(2, 3, 4);
//console.log(finalResult);

/**
 * Declare an object and change any property value of that object
 */

let user = {
    name: 'ataur',
    email: 'ataur@gmail.com',
    role: 'admin'
}
user.role = 'editor';
//console.log(user);

/**
 * Convert Feet to inch
 */

function feetToInch(feet) {
    const inch = 12 * feet;
    return inch;
}
const totalInch = feetToInch(3);
//console.log(totalInch);

/**
 * Convert centimeter to meter
 */

function centimeterToMeter(cent) {
    const meter = 0.01 * cent;
    return meter
}
const totalMeter = centimeterToMeter(4);
//console.log(totalMeter);

/**
 * Books pages
 */

function pageRequirements(book1, book2, book3) {
    let book1Page = 100;
    let book2Page = 200;
    let book3Page = 300;

    let book1totalpages = book1Page * book1;
    let book2totalpages = book2Page * book2;
    let book3totalpages = book3Page * book3;

    let pages = book1totalpages + book2totalpages + book3totalpages;
    return pages;
}

const totalPages = pageRequirements(4, 3, 2);
//console.log(totalPages);

/**
 * Return bigger string of an array
 */

const friends = ['Abdul Aziz', 'Motin', 'Mubashir Husain Rehmani', 'Jabed', 'Konal'];

function bestFriends(friends) {
    let biggerName = friends[0];
    for (let i = 1; i < friends.length; i++) {
        let friend = friends[i];
        if (friend.length > biggerName.length) {
            biggerName = friends[i];
        }
    }
    return biggerName;
}

const bigName = bestFriends(friends);
// console.log(bigName);

/**
 * will stop the loop if the array has any negative number and display positive numbers before the negative number
 */

const numberArr = [2, 5, 7, 3, 6, -1, 10, -8, 12];

function onlyPositive() {
    for (const num of numberArr) {
        if (num < 0) {
            break;
        }
        console.log(num);
    }
}

onlyPositive();