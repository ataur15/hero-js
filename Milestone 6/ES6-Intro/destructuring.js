/**
 * Destructuring of object
 */

const student = {
    id: 20,
    name: 'Karim',
    phone: '0157877745',
    address: 'Dhaka',
    dress: 'blue',
}

const { phone, id, dress, name } = student;

console.log(phone, dress);
console.log(dress, name, id);

const company = {
    name: 'Robi',
    ceo: { name: 'Hasan', food: 'beaf', salary: '10lakh' },
    it: {
        department: 'web',
        framework: 'react',
        employee: 200,
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
    address: 'Gulsan'
}

const { food, salary } = company.ceo;
const { employee, framework } = company.it;
const { first, second, third } = company.it.tech;

console.log(food, salary, framework, second, third);


/**
 * Destructuring of array
 */

const numbers = [20, 41, 18];
const [a, b, c] = numbers;

console.log(a, b);
