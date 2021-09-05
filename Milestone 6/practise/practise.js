
/**
 * object with property (string, boolean, number, object, array, method which will return a property value)
 */

 student = {
    name: 'Abir',
    id: 101,
    money: 5000,
    isRegular: true,
    subjects: [ 'English', 'Mathematics', 'Biology', 'Chemistry' ],
    subjectsNumber: {
        en: 80,
        math: 75,
        bio: 80,
        chm: 85
    },
    treatDey: function (expense) {
        this.money = this.money - expense;
        return this.money;
    }
}

const output = student.treatDey(1000);
console.log(`
    Name: ${student.name}
    Regular: ${student.isRegular}
    Main Subject: ${student.subjects[1]}
    Math Number: ${student.subjectsNumber.math}
    Money: ${output}
`);

/**
 * No parameter arrow function return 89
 */

const noParameter = () => 89;
// console.log(noParameter());

/**
 * single parameter arrow function. will divide input by 7
 */

const singleParameter = (param) => param / 7;
// console.log(singleParameter(56));

/**
 * arrow function with 2 parameters.
 */

const twoParameters = (num1, num2) => (num1 + num2) / 2;
// console.log(twoParameters(16, 4));

/**
 * multi-line arrow function with two parameters
 */

const multiLine = (num1, num2) => {
    let frist = num1 + 7;
    let second = num2 + 7;
    const result = frist + second;
    return result;
}

// console.log(multiLine(13, 10));

/**
 * map divide each element by 7
 */

const numbers = [56, 14, 21, 28, 35, 42];

// map
const outputArray = numbers.map(number => number / 7);

// forEach
outputArray.forEach(ele => {
    // console.log(ele);
});

// filter
const filterEle = outputArray.filter(ele => ele < 6);
// console.log(filterEle);

// find
const findEle = outputArray.find(ele => ele === 2);
// console.log(findEle);

/**
 * destructuring of an object
 */

const subjects = { en: 'English', math: 'Mathematics', bn: 'Bangla', isl: 'Islam' }
const { en, isl } = subjects;
console.log(en, isl);

/**
 * destructuring of an array
 */

const foods = ['apple', 'banana', 'jack-fruit', 'mango'];
const [a, b, j] = foods;
console.log(a, b, j);