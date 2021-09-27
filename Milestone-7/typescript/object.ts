const city: string = "Dhaka";
const fruits: string[] = ['apple', 'banana', 'orange', 'mango'];

/**
 * Two ways to declare an object
 */

// First way
const student: { name: string, age: number, id: number } = {
    name: 'Hamja',
    age: 25,
    id: 10
}

// Second way
type Person = { name: string, age: number, salary: number }

const employee: Person = {
    name: 'Humayon',
    age: 30,
    salary: 20000
}