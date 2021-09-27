// Parent Class
class Person {
    constructor () {
        this.name = "Sakib";
        this.age = 35;
    }
    eat () {
        console.log(`${this.name} is eating`);
    }
}

// Child Class
class Cricketer extends Person {
    constructor () {
        super();
        this.type = "All rounder";
        this.country = "Bangladesh";
    }
}

const sakib = new Cricketer();
console.log(sakib.type);
sakib.eat();