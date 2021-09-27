class Human {
    constructor (name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    eat () {
        console.log(`Person is eating`);
    }
    sleep () {
        console.log(`Person is sleeping`);
    }
    play () {
        console.log(`Person is playing`);
    }
}

// Create a new object from Human class
const sakib = new Human('Sakib', 35, 'Dhaka');
console.log(sakib);
sakib.play();

// Create a new object from Human class
const musfiq = new Human('Musfiq', 32, 'Dhaka');
musfiq.sleep();