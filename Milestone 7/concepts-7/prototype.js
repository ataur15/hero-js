// Constructor function theke amra object create korte pari
function Human (name, age, city) {
    // Child object
    /*
    let person = Object.create(Human.prototype);
    person.name = name;
    person.age = age;
    person.city = city;
    return person;
    */

    /*
    vitore vitore javascript ei kajta kore dicche new keyword use korar karone
    let this = Object.create(Human.prototype);
    */
    this.name = name;
    this.age = age;
    this.city = city;
    // return this;
}

// Parent object
Human.prototype = {
    salary: 20000,
    eat () {
        console.log(`Person is eating`);
    },
    sleep () {
        console.log(`Person is sleeping`);
    },
    play () {
        console.log(`Person is playing`);
    }
}

/* const sakib = Human('Sakib', 35, 'Dhaka');
sakib.play(); */

// Create a new object from Human object/function
const sakib = new Human('Sakib', 35, 'Dhaka');
console.log(sakib);
sakib.play();

// Create a new object from Human object/function
const musfiq = new Human('Musfiq', 32, 'Dhaka');
musfiq.sleep();
console.log(musfiq.salary);
