// Parent Constructor
let name;
let age;

function Person () {
    this.name = "Sakib";
    this.age = 35;
}

// Child Constructor
let type;
let country;

function Cricketer () {
    Person.call(this);
    this.type = "All rounder";
    this.country = "Bangladesh";
}

// Parent Person prototype
Person.prototype = {
    eat: function () {
        console.log(`${this.name} is eating`);
    }
}

// Inheritance for Cricketer prototype
Cricketer.prototype = Object.create(Person.prototype);

// Override the Cricketer constructor
Cricketer.prototype.constructor = Cricketer;

const sakib = new Cricketer();
console.log(sakib.name);
