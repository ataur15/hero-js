/**
 * object literal
 */

const student = { name: "Jamal", job: "teacher" }

/**
 * object constructor
 */

const human = new Object();
console.log(human);

/**
 * object create by class (syntactic sugar)
 */

class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const obj = new User('Hamid', 13);
console.log(obj);

/**
 * creates a new object using an existing object
 */

const captain = {
    name: 'Masrafi',
    age: 38,
    country: 'Bangladesh'
}

const player = Object.create(captain);
// console.log(player);
console.log(player.name);